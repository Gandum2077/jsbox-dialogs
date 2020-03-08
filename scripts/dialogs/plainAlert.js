const {
  UIAlertActionStyle,
  UIAlertControllerStyle,
  UIAlertAction,
  UIAlertController
} = require("./UIAlert");

function plainAlert({ title = "", message } = {}) {
  return new Promise((resolve, reject) => {
    const alertVC = new UIAlertController(
      title,
      message,
      UIAlertControllerStyle.Alert
    );

    alertVC.addAction(
      new UIAlertAction($l10n("CANCEL"), UIAlertActionStyle.Destructive, cancelEvent)
    );
    alertVC.addAction(
      new UIAlertAction($l10n("OK"), UIAlertActionStyle.Default, confirmEvent)
    );
    alertVC.present();

    function confirmEvent() {
      resolve("ok");
    }
    function cancelEvent() {
      reject("cancel");
    }
  });
}

module.exports = plainAlert;
