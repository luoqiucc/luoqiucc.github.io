# 在前端页面使用扫码枪

::: tip
扫码枪是一个键盘设备，扫码枪的每次扫描本质上就是在键盘输入数字并在结尾加上一个 Enter 键
:::

## 1. 直接通过 input 输入框来获取扫码枪内容

该方式与传统接收键盘输入的方式一致，这里就不在赘述。

## 2. 通过监听键盘输入的方式获取扫码枪内容

在一些场景下我们不用输入框，而是在扫描后直接将信息展示到一个列表中，类似于超市中的收银系统。这时我们就可以通过监听键盘输入的方式来实现该功能。

下面直接上代码，通过给键盘添加监听事件，并以 Enter 键作为结束标志，来记录每次扫描的结果并将他存入到一个数组中。

```typescript
// 定义合法的内容，扫码枪仅为数字 + Enter键
const allowKey = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Enter']

// 扫描到的内容，初始为空数组
let codeArray = []

// 临时条码数据
let code = ''
const handleKeypress = (event: KeyboardEvent) => {
  const key: string = event.key
  const isAllowKey = allowKey.some((item) => {
    return item === key
  })

  // 在这里检查是否为合法数据，若出现除数字外的任意字符就放弃这次输入
  if (!isAllowKey) {
    code = ''
    return
  }

  // 数据无误后进行下一步处理
  handleKey(key)
}

let timer: number
const handleKey = (key: string) => {
  /**
   * 若检测到Enter键输入且条码(code)不为空，则认为这是一
   * 次有效的输入，将内容添加到数组中(codeArray)
   */
  if (key === 'Enter' && code !== '') {
    codeArray.push(code)
    code = ''
  }

  // 拼接扫码枪输入的字符
  if (key !== 'Enter') {
    code += key
  }

  /**
   * 通过这种方式限制输入的间隔，扫码枪的输入间隔是非常短的，若间隔
   * 过长说明这次输入大概率不是扫码枪的内容，程序会放弃这次输入。减
   * 少由于键盘误触产生错误数据的可能。
   */
  clearTimeout(timer)
  timer = setTimeout(() => {
    code = ''
  }, 1000)
}

// 添加监听事件
document.addEventListener('keypress', handleKeypress)
```
