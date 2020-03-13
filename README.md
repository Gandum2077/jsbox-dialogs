# JSBoxDialogs

解决 JSBox 缺少 alert 和 dialogs 的问题。

`main.js`即为 DEMO

## Known issues

- 如果要在应用运行的时候动态更改 dialogs 中的 view，必须在 dialogs 被 dismiss 之前完成（即注意回调函数的使用），否则将可能出现 JSBox 卡死崩溃的严重 bug。
