const { maskView, defineTitleBarView } = require("./baseViews");

const template = {
  props: {
    bgcolor: $color("white")
  },
  views: [
    {
      type: "label",
      props: {
        id: "label"
      },
      layout: (make, view) => {
        make.top.bottom.inset(0);
        make.left.inset(20);
        make.right.inset(50);
      }
    },
    {
      type: "image",
      props: {
        id: "checkmark",
        symbol: "checkmark",
        contentMode: 1
      },
      layout: (make, view) => {
        make.top.bottom.right.inset(10);
        make.width.equalTo(30);
      }
    }
  ]
};

function getData(items, values) {
  return items.map((n, i) => {
    return {
      label: { text: n },
      checkmark: { hidden: !values.includes(i) }
    };
  });
}

function defineList({ items = [], multiSelectEnabled = false, values }) {
  const list = {
    type: "list",
    props: {
      id: "list",
      style: 2,
      bgcolor: $color("#eee"),
      template,
      data: getData(items, values)
    },
    layout: function(make, view) {
      make.left.right.bottom.equalTo(view.super.safeArea);
      if ($("titleBar")) {
        make.top.equalTo($("titleBar").bottom);
      } else {
        make.top.equalTo(view.super.safeArea);
      }
    },
    events: {
      didSelect: function(sender, indexPath, data) {
        if (multiSelectEnabled) {
          const index = indexPath.item;
          if (values.includes(index)) {
            values = values.filter(n => n !== index);
          } else {
            values.push(index);
          }
          sender.data = getData(items, values);
        } else {
          values = [indexPath.item];
          sender.data = getData(items, values);
        }
      }
    }
  };
  return list;
}

async function listDialogsSheet({
  title = "",
  items,
  multiSelectEnabled = false,
  values
}) {
  const width = 500;
  const layout = function(make, view) {
    make.width.equalTo(width);
    make.height.equalTo(556);
    make.center.equalTo(view.super);
  };
  return new Promise((resolve, reject) => {
    const cancelEvent = function(sender) {
      sender.super.super.super.remove();
      reject("cancel");
    };
    const confrimEvent = function(sender) {
      const result = sender.super.super
        .get("list")
        .data.map((n, i) => {
          if (n.checkmark.hidden) {
            return null;
          } else {
            return i;
          }
        })
        .filter(n => n !== null);
      sender.super.super.super.remove();
      if (!multiSelectEnabled) {
        resolve(result[0]);
      } else {
        resolve(result);
      }
    };
    const titleBarView = defineTitleBarView(title, cancelEvent, confrimEvent);
    const list = defineList({
      items,
      multiSelectEnabled,
      values
    });
    const content = {
      props: {
        radius: 10
      },
      views: [titleBarView, list],
      layout: layout
    };
    const listDialogs = {
      props: {
        id: "listDialogs"
      },
      views: [maskView, content],
      layout: $layout.fillSafeArea
    };
    $ui.window.add(listDialogs);
  });
}

async function listDialogsPush({
  title = "",
  items = [],
  multiSelectEnabled = false,
  values
}) {
  let done = false;
  let result = values;
  return new Promise((resolve, reject) => {
    $ui.push({
      props: {
        title,
        navButtons: [
          {
            title: "Done",
            handler: () => {
              done = true;
              result = $ui.window
                .get("list")
                .data.map((n, i) => {
                  if (n.checkmark.hidden) {
                    return null;
                  } else {
                    return i;
                  }
                })
                .filter(n => n !== null);
              if (!multiSelectEnabled) result = result[0];
              $ui.pop();
            }
          }
        ]
      },
      views: [defineList({ items, multiSelectEnabled, values })],
      events: {
        dealloc: () => {
          if (done) {
            resolve(result);
          } else {
            reject("cancel");
          }
        }
      }
    });
  });
}

async function listDialogs({
  title = "",
  items,
  multiSelectEnabled = false,
  value,
  values
}) {
  if (!multiSelectEnabled) {
    values = [value];
  }
  if ($device.isIpad) {
    return listDialogsSheet({ title, items, multiSelectEnabled, values });
  } else {
    return listDialogsPush({ title, items, multiSelectEnabled, values });
  }
}

module.exports = listDialogs;
