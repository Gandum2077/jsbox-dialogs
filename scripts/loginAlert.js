async function loginAlert(title) {
    return new Promise((resolve, reject) => {
        if (!title) {
            title = '登录'
        }
        const titleView = {
            type: "label",
            props: {
                id: "title",
                text: title,
                align: $align.center,
                font: $font('bold', 17),
                bgcolor: $color("clear")
            },
            layout: function(make, view) {
                make.top.left.inset(0)
                make.size.equalTo($size(270,60))
            }
        }
        
        const inputs = {
            type: "view",
            props: {
                id: "inputs",
                borderWidth: 1,
                borderColor: $color("#b4b4b4"),
                radius: 5,
                bgcolor: $rgb(255, 255, 255)
            },
            views: [
                {
                    type: "input",
                    props: {
                        id: "username",
                        borderWidth: 1,
                        borderColor: $color("#b4b4b4"),
                        radius: 0,
                        bgcolor: $color("white"),
                        autocapitalizationType: 0
                    },
                    layout: function(make, view) {
                        make.size.equalTo($size(240, 30.5))
                        make.top.left.inset(0)
                    },
                    events: {
                        returned: function(sender) {
                            sender.super.get('password').focus()
                        }
                    }
                },
                {
                    type: "input",
                    props: {
                        id: "password",
                        secure: true,
                        borderWidth: 1,
                        borderColor: $color("#b4b4b4"),
                        radius: 0,
                        bgcolor: $color("white")
                    },
                    layout: function(make, view) {
                        make.size.equalTo($size(240, 30.5))
                        make.bottom.left.inset(0)
                    },
                    events: {
                        returned: function(sender) {
                            sender.blur()
                        }
                    }
                }
            ],
            layout: function(make, view) {
                make.size.equalTo($size(240, 60))
                make.center.equalTo(view.super)
            }
        }
        
        const buttonCancel = {
            type: "button",
            props: {
                id: "buttonCancel",
                title: "Cancel",
                type: 1,
                titleColor: $color("#007aff"),
                borderWidth: 1,
                borderColor: $color("#b1b1b1")
            },
            layout: function(make, view) {
                make.left.bottom.inset(-1)
                make.size.equalTo($size(136.5, 45))
            },
            events: {
                tapped: function(sender) {
                    reject('canceled')
                    sender.super.super.remove()
                }
            }
        }
        
        const buttonConfirm = {
            type: "button",
            props: {
                id: "buttonConfirm",
                title: "OK",
                type: 1,
                titleColor: $color("#007aff"),
                borderWidth: 1,
                borderColor: $color("#b1b1b1")
            },
            layout: function(make, view) {
                make.right.bottom.inset(-1)
                make.size.equalTo($size(136.5, 45))
            },
            events: {
                tapped: function(sender) {
                    resolve({
                        account: sender.super.get("username").text,
                        password: sender.super.get("password").text
                    })
                    sender.super.super.remove()
                }
            }
        }
        
        const loginViewContent = {
            props: {
                radius: 10,
                bgcolor: $rgb(241, 241, 241)
            },
            views: [titleView, inputs, buttonCancel, buttonConfirm],
            layout: function(make, view) {
                make.size.equalTo($size(270, 180))
                make.center.equalTo(view.super)
            }
        }
        
        const maskView = {
            props: {
                bgcolor: $rgba(0, 0, 0, 0.2)
            },
            layout: $layout.fill
        }
        
        const loginView = {
            props: {
                id: 'loginView'
            },
            views: [maskView, loginViewContent],
            layout: $layout.fill
        }
        $ui.window.add(loginView)
    })
}

module.exports = {
    loginAlert: loginAlert
}