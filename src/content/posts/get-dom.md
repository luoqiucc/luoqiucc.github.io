---
title: '记录一个获取Dom元素的写法'
description: '记录一个获取Dom元素的写法'
pubDate: 2024-06-12
tags: ['HTML', 'JavaScript']
---

**HTML 部分**

```html
<div class="apple">Apple</div>
<div class="orange">Orange</div>
<button class="btn">Button</button>
<img class="image" src="/images/cover.jpg" alt="cover" />
```

**JavaScript 部分**

```javascript
// 通过bind()函数封装document.querySelector来简化后续操作
const $ = document.querySelector.bind(document)
const dom = {
  apple: $('.apple'),
  orange: $('.orange'),
  btn: $('.btn'),
  image: $('.image'),
}

// 使用示例
dom.apple.style.backgroundColor = 'red'

dom.orange.style.backgroundColor = 'orange'

dom.btn.addEventListener('click', (event) => {
  console.log(event)
})

dom.image.src = '/images/avatar.jpg'
```
