const inputAlert = require('scripts/inputAlert')
const loginAlert = require('scripts/loginAlert')
const textDialogs = require('scripts/textDialogs')
const formDialogs = require('scripts/formDialogs')
const src_cross_64x64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDBsALRrDpF2GAAABv0lEQVRo3sWZzVLCMBRGjy7E58EZUISqqOiMP0/JloUrnwoHlB9d1UVlJGlLm+TmprsMA+e0NO293wWADlN6aB49pnR2ixPeyFnQV8N3mZPzzuk/PldUKPD5TmH2t9BS6LPYI87gka2hcB4Vf8bHHu2HV4AHNQUb/7L7wFRYRlKoxesoHMTHV2jEA0wMhRWZGP6CZTM+nkJrfBwFG//c9IUJG0PhShD/3YyXVfDCyykMfPEA98EKNv7J9QdshWtdfJjCgM9wvL+Cid9w54sHyFg5Koji3RUupfFuClHwhcKXoXCjiy8rrCsUTPxaFt+sYONvpfEAo1oFFXy9ghq+WmGoiQcYszZ2xKrh5ox+FfbxYw18nYIiHmBoKXjjjz0FjjTPtnwk/gvqb8LoWxCSb8PED6Is7aM4a/0yEn8VH8aXFYSLkQJvlmVNBYl4PdSmKoxYESYtSt2aE/GuwL03EmvL/PCiCiHNqUBvHBZSBIUT4fhgBZmIJiAh2grgywotIroqfFhS6BRSyuOdFeIE1q2C6nj41gqJ4/r4Y5uDCjqDq8qBlR6+UJiXFWx83Mlht6yQfHCZfHSbfHgNScf3vxXvVhPvXnwTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTEyLTI3VDAwOjQ1OjI2KzAwOjAwmwHCiwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0xMi0yN1QwMDo0NToyNiswMDowMOpcejcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"

const sections = [
    {
        title: 'Section 1',
        fields: [
            {
                type: 'string',
                title: 'string',
                key: 'string',
                value: 'ssss',
                icon: $image(src_cross_64x64),
                iconEdgeInsets: $insets(15, 15, 15, 15)
            },
            {
                type: 'number',
                title: 'number',
                key: 'number',
                value: '1111.1'
            },
            {
                type: 'integer',
                title: 'integer',
                key: 'integer',
                value: '1111'
            },
            {
                type: 'password',
                title: 'password',
                key: 'password',
                value: 'ssss'
            }
        ],
        footer: 'This is footer'
    },
    {
        title: 'Section 2',
        fields: [
            {
                type: 'boolean',
                title: 'boolean',
                key: 'boolean',
                value: true
            },
            {
                type: 'slider',
                title: 'slider',
                key: 'slider',
                value: 0.1
            },
            {
                type: 'segmentedControl',
                title: 'segmentedControl',
                key: 'segmentedControl',
                items: ['aaa', 'bbb'],
                value: -1
            }
        ],
        footer: 'This is footer'
    },
    {
        title: 'Section 3',
        fields: [
            {
                type: 'datetime',
                title: 'datetime',
                key: 'datetime',
                value: new Date()
            },
            {
                type: 'info',
                title: 'info',
                value: 'this is info'
            },
            {
                type: 'link',
                title: 'link',
                value: 'https://apple.com'
            },
            {
                type: 'action',
                buttonTitle: 'action',
                value: (() => console.info(1))
            }
        ],
        footer: 'This is footer'
    }
]

$ui.render({
    props:{
        bgcolor: $color('white')
    },
    views: [
        {
            type: 'button',
            props: {
                title: "inputAlert"
            },
            layout: function(make, view) {
                make.size.equalTo($size(200,50))
                make.centerX.equalTo(view.super)
                make.centerY.equalTo(view.sender).offset(-150)
            },
            events: {
                tapped: async function(sender) {
                    const result = await inputAlert.inputAlert(title='inputAlert')
                    console.info(result)
                }
            }
        },
        {
            type: 'button',
            props: {
                title: "loginAlert"
            },
            layout: function(make, view) {
                make.size.equalTo($size(200,50))
                make.centerX.equalTo(view.super)
                make.centerY.equalTo(view.sender).offset(-50)
            },
            events: {
                tapped: async function(sender) {
                    const result = await loginAlert.loginAlert(title='loginAlert')
                    console.info(result)
                }
            }
        },
        {
            type: 'button',
            props: {
                title: "textDialogs"
            },
            layout: function(make, view) {
                make.size.equalTo($size(200,50))
                make.centerX.equalTo(view.super)
                make.centerY.equalTo(view.sender).offset(50)
            },
            events: {
                tapped: async function(sender) {
                    const result = await textDialogs.textDialogs(title='textDialogs', text='测试')
                    console.info(result)
                }
            }
        },
        {
            type: 'button',
            props: {
                title: "formDialogs"
            },
            layout: function(make, view) {
                make.size.equalTo($size(200,50))
                make.centerX.equalTo(view.super)
                make.centerY.equalTo(view.sender).offset(150)
            },
            events: {
                tapped: async function(sender) {
                    const result = await formDialogs.formDialogs(sections, title='formDialogs')
                    console.info(result)
                }
            }
        }
    ]
})
