async function textDialogs(title='', text='') {
    const src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDBsALRrDpF2GAAABv0lEQVRo3sWZzVLCMBRGjy7E58EZUISqqOiMP0/JloUrnwoHlB9d1UVlJGlLm+TmprsMA+e0NO293wWADlN6aB49pnR2ixPeyFnQV8N3mZPzzuk/PldUKPD5TmH2t9BS6LPYI87gka2hcB4Vf8bHHu2HV4AHNQUb/7L7wFRYRlKoxesoHMTHV2jEA0wMhRWZGP6CZTM+nkJrfBwFG//c9IUJG0PhShD/3YyXVfDCyykMfPEA98EKNv7J9QdshWtdfJjCgM9wvL+Cid9w54sHyFg5Koji3RUupfFuClHwhcKXoXCjiy8rrCsUTPxaFt+sYONvpfEAo1oFFXy9ghq+WmGoiQcYszZ2xKrh5ox+FfbxYw18nYIiHmBoKXjjjz0FjjTPtnwk/gvqb8LoWxCSb8PED6Is7aM4a/0yEn8VH8aXFYSLkQJvlmVNBYl4PdSmKoxYESYtSt2aE/GuwL03EmvL/PCiCiHNqUBvHBZSBIUT4fhgBZmIJiAh2grgywotIroqfFhS6BRSyuOdFeIE1q2C6nj41gqJ4/r4Y5uDCjqDq8qBlR6+UJiXFWx83Mlht6yQfHCZfHSbfHgNScf3vxXvVhPvXnwTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTEyLTI3VDAwOjQ1OjI2KzAwOjAwmwHCiwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0xMi0yN1QwMDo0NToyNiswMDowMOpcejcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
    const titleBarView = {
        type: "view",
        props: {
            id: "titleBar",
            bgcolor: $color("white")
        },
        views: [
            {
                type: "button",
                props: {
                    id: 'buttonCancel',
                    type: 1,
                    image: $image(src).alwaysTemplate,
                    tintColor: $color("#007aff"),
                    imageEdgeInsets: $insets(7.5, 7.5, 7.5, 7.5)

                },
                layout: function(make, view) {
                    make.centerY.equalTo(view.super).offset(-0.25)
                    make.size.equalTo($size(32, 32))
                    make.left.inset(15)
                }
            },
            {
                type: "label",
                props: {
                    text: title,
                    font: $font('bold', 20),
                    align: $align.center
                },
                layout: function(make, view) {
                    make.size.equalTo($size(300,32))
                    make.centerY.equalTo(view.super).offset(-0.25)
                    make.centerX.equalTo(view.super)
                }
            },
            {
                type: "button",
                props: {
                    id: 'buttonConfirm',
                    type: 1,
                    title: 'Done',
                    font: $font(17),
                    titleColor: $color("#007aff")
                },
                layout: function(make, view) {
                    make.centerY.equalTo(view.super).offset(-0.25)
                    make.size.equalTo($size(50, 32))
                    make.right.inset(15)
                }
            },
            {
                type: "type",
                props: {
                    bgcolor: $color("#a9a9ad")
                },
                layout: function(make, view) {
                    make.left.right.bottom.inset(0)
                    make.height.equalTo(0.5)
                }
            }
        ],
        layout: function(make, view) {
            make.top.left.right.inset(0)
            make.height.equalTo(56.5)
        }
    }
    
    const textView = {
        type: "text",
        props: {
            id: "textView",
            text: text,
            textColor: $color("black"),
            bgcolor: $color("white")
        },
        layout: function(make, view) {
            make.left.right.bottom.inset(0)
            make.top.equalTo($("titleBar").bottom)
        }
    }
    
    const textDialogsContent = {
        props: {
            radius: 10
        },
        views: [titleBarView, textView],
        layout: function(make, view) {
            make.size.equalTo($size(500, 556))
            make.center.equalTo(view.super)
        }
    }
    const maskView = {
        props: {
            bgcolor: $rgba(0, 0, 0, 0.2)
        },
        layout: $layout.fill
    }
    
    const textDialogs = {
        props: {
            id: 'textDialogs_56c2613b'
        },
        views: [maskView, textDialogsContent],
        layout: $layout.fill
    }
    
    return new Promise((resolve, reject) => {
        const cancelEvent = function(sender) {
            reject('canceled')
            sender.super.super.super.remove()
        }
        const confrimEvent = function(sender) {
            resolve(sender.super.super.get("textView").text)
            sender.super.super.super.remove()
        }
        $ui.window.add(textDialogs)
        $ui.window.get('textDialogs_56c2613b').get('buttonCancel').addEventHandler({
            events: $UIEvent.touchDown,
            handler: cancelEvent
        })
        $ui.window.get('textDialogs_56c2613b').get('buttonConfirm').addEventHandler({
            events: $UIEvent.touchDown,
            handler: confrimEvent
        })
    })
}

module.exports = {
    textDialogs: textDialogs
}