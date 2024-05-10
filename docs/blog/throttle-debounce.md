# 节流与防抖(前端性能优化)

## 节流

多次触发在一定时间内仅执行一次

```javascript
function throttle(fn, interval = 500) {
  let last = 0
  return function (...args) {
    const now = new Date().getTime()
    const remain = now - lastTime

    if (remain - interval >= 0) {
      fn.apply(this, args)
      last = now
    }
  }
}
```

## 防抖

多次触发仅执行最后一次

```javascript
function throttle(fn, delay === 500) {
  let timer = null
  return function (...args) {
    if (timer !== null) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
```
