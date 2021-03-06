const plainAlert = require("scripts/dialogs/plainAlert");
const inputAlert = require("scripts/dialogs/inputAlert");
const loginAlert = require("scripts/dialogs/loginAlert");
const textDialogs = require("scripts/dialogs/textDialogs");
const listDialogs = require("scripts/dialogs/listDialogs");
const editListDialogs = require("scripts/dialogs/editListDialogs");
const formDialogs = require("scripts/dialogs/formDialogs");
const src_cross_64x64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDBsALRrDpF2GAAABv0lEQVRo3sWZzVLCMBRGjy7E58EZUISqqOiMP0/JloUrnwoHlB9d1UVlJGlLm+TmprsMA+e0NO293wWADlN6aB49pnR2ixPeyFnQV8N3mZPzzuk/PldUKPD5TmH2t9BS6LPYI87gka2hcB4Vf8bHHu2HV4AHNQUb/7L7wFRYRlKoxesoHMTHV2jEA0wMhRWZGP6CZTM+nkJrfBwFG//c9IUJG0PhShD/3YyXVfDCyykMfPEA98EKNv7J9QdshWtdfJjCgM9wvL+Cid9w54sHyFg5Koji3RUupfFuClHwhcKXoXCjiy8rrCsUTPxaFt+sYONvpfEAo1oFFXy9ghq+WmGoiQcYszZ2xKrh5ox+FfbxYw18nYIiHmBoKXjjjz0FjjTPtnwk/gvqb8LoWxCSb8PED6Is7aM4a/0yEn8VH8aXFYSLkQJvlmVNBYl4PdSmKoxYESYtSt2aE/GuwL03EmvL/PCiCiHNqUBvHBZSBIUT4fhgBZmIJiAh2grgywotIroqfFhS6BRSyuOdFeIE1q2C6nj41gqJ4/r4Y5uDCjqDq8qBlR6+UJiXFWx83Mlht6yQfHCZfHSbfHgNScf3vxXvVhPvXnwTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTEyLTI3VDAwOjQ1OjI2KzAwOjAwmwHCiwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0xMi0yN1QwMDo0NToyNiswMDowMOpcejcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC";

const sections = [
  {
    title: "Section 1",
    rows: [
      {
        type: "string",
        title: "string",
        key: "string",
        value: "ssss",
        icon: $image(src_cross_64x64),
        iconEdgeInsets: $insets(15, 15, 15, 15)
      },
      {
        type: "number",
        title: "number",
        key: "number",
        value: "1111.1"
      },
      {
        type: "integer",
        title: "integer",
        key: "integer",
        value: "1111"
      },
      {
        type: "password",
        title: "password",
        key: "password",
        value: "ssss"
      }
    ]
  },
  {
    title: "Section 2",
    rows: [
      {
        type: "boolean",
        title: "boolean",
        key: "boolean",
        value: true
      },
      {
        type: "slider",
        title: "sliderxxxxxxxxx",
        key: "slider",
        value: 0.1
      },
      {
        type: "list",
        title: "list_menu",
        key: "list_menu",
        listType: "menu",
        items: ["aaa", "bbb"],
        value: "aaa"
      },
      {
        type: "list",
        title: "list_popover",
        key: "list_popover",
        listType: "popover",
        items: ["aaa", "bbb"],
        value: "aaa"
      },
      {
        type: "segmentedControl",
        title: "segmentedControl",
        key: "segmentedControl",
        items: ["aaa", "bbb"],
        value: -1
      }
    ]
  },
  {
    title: "Section 3",
    rows: [
      {
        type: "datetime",
        title: "datetime",
        key: "datetime",
        value: new Date()
      },
      {
        type: "info",
        title: "info",
        value: "this is info"
      },
      {
        type: "link",
        title: "link",
        value: "https://apple.com"
      },
      {
        type: "action",
        buttonTitle: "action0",
        icon: $image(src_cross_64x64),
        iconEdgeInsets: $insets(15, 15, 15, 15),
        value: () => console.info(0)
      },
      {
        type: "action",
        title: "action1",
        buttonType: 1,
        buttonTitle: "action1",
        icon: $image(src_cross_64x64),
        iconEdgeInsets: $insets(15, 15, 15, 15),
        value: () => console.info(1)
      }
    ]
  }
];

$ui.render({
  views: [
    {
      type: "stack",
      props: {
        spacing: 10,
        distribution: $stackViewDistribution.fillEqually,
        axis: $stackViewAxis.vertical,
        stack: {
          views: [
            {
              type: "button",
              props: {
                title: "plainAlert"
              },
              events: {
                tapped: async function(sender) {
                  const result = await plainAlert({
                    title: "textDialogs",
                    message: "测试"
                  });
                  console.info(result);
                }
              }
            },
            {
              type: "button",
              props: {
                title: "inputAlert"
              },
              events: {
                tapped: async function(sender) {
                  const result = await inputAlert({ title: "inputAlert" });
                  console.info(result);
                }
              }
            },
            {
              type: "button",
              props: {
                title: "loginAlert"
              },
              events: {
                tapped: async function(sender) {
                  const result = await loginAlert({ title: "loginAlert" });
                  console.info(result);
                }
              }
            },
            {
              type: "button",
              props: {
                title: "textDialogs"
              },
              events: {
                tapped: async function(sender) {
                  const result = await textDialogs({
                    title: "textDialogs",
                    text: "测试"
                  });
                  console.info(result);
                }
              }
            },
            {
              type: "button",
              props: {
                title: "listDialogs"
              },
              events: {
                tapped: async function(sender) {
                  const result = await listDialogs({
                    title: "listDialogs",
                    items: ["1", "2", "3"],
                    multiSelectEnabled: true,
                    values: [0, 1],
                    editable: true
                  });
                  console.info(result);
                }
              }
            },
            {
              type: "button",
              props: {
                title: "styledTextListDialogs"
              },
              events: {
                tapped: async function(sender) {
                  const result = await listDialogs({
                    title: "styledTextListDialogs",
                    items: [
                      {
                        styledText: {
                          text: " 优秀   AAA    Tag1 Tag2",
                          font: $font(17),
                          color: $color("primaryText"),
                          styles: [
                            {
                              range: $range(0, 4),
                              color: $color("white"),
                              bgcolor: $color("green")
                            },
                            {
                              range: $range(13, 4),
                              color: $color("secondaryText"),
                              font: $font(12),
                              obliqueness: 0.3
                            },
                            {
                              range: $range(18, 4),
                              color: $color("secondaryText"),
                              font: $font(12),
                              obliqueness: 0.3
                            }
                          ]
                        }
                      },
                      {
                        styledText: {
                          text: " 良好   BBB    Tag1 Tag2",
                          font: $font(17),
                          color: $color("primaryText"),
                          styles: [
                            {
                              range: $range(0, 4),
                              color: $color("white"),
                              bgcolor: $color("orange")
                            },
                            {
                              range: $range(13, 4),
                              color: $color("secondaryText"),
                              font: $font(12),
                              obliqueness: 0.3
                            },
                            {
                              range: $range(18, 4),
                              color: $color("secondaryText"),
                              font: $font(12),
                              obliqueness: 0.3
                            }
                          ]
                        }
                      }
                    ],
                    multiSelectEnabled: false,
                    value: 0
                  });
                  console.info(result);
                }
              }
            },
            {
              type: "button",
              props: {
                title: "editListDialogs"
              },
              events: {
                tapped: async function(sender) {
                  try {
                    const result = await editListDialogs({
                      title: "editListDialogs",
                      items: ["1", "2", "3"],
                      addHandler: ({addedItem, index, items}) => {console.info(addedItem, index, items)},
                      moveHandler: ({items}) => {console.info(items)},
                      renameHandler: ({oldItem, newItem, index, items}) => {console.info(oldItem, newItem, index, items)},
                      deleteHandler: ({deletedItem, index, items}) => {console.info(deletedItem, index, items)}
                    });
                    console.info(result);
                  } catch (e) {
                    console.log(e);
                  }
                }
              }
            },
            {
              type: "button",
              props: {
                title: "formDialogs"
              },
              events: {
                tapped: async function(sender) {
                  try {
                    const result = await formDialogs({
                      sections,
                      title: "formDialogs"
                    });
                    console.info(result);
                  } catch (e) {
                    console.log(e);
                  }
                }
              }
            }
          ]
        }
      },
      layout: (make, view) => {
        make.width.equalTo(view.super).dividedBy(2);
        make.height.equalTo(view.super).dividedBy(2);
        make.center.equalTo(view.super);
      }
    }
  ]
});
