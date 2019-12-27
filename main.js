const inputAlert = require('scripts/inputAlert')
const loginAlert = require('scripts/loginAlert')
const textDialogs = require('scripts/textDialogs')
const formDialogs = require('scripts/formDialogs')

const sections = [
    {
        title: 'Section 1',
        fields: [
            {
                type: 'string',
                title: 'string',
                key: 'string',
                value: 'ssss'
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
                key: 'info',
                value: 'this is info'
            },
            {
                type: 'link',
                title: 'link',
                key: 'link',
                value: 'https://apple.com'
            },
            {
                type: 'action',
                title: 'action',
                key: 'action',
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
