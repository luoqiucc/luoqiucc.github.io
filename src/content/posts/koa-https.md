---
isFocus: true
title: '为你的Koa应用添加对https的支持'
description: '为你的Koa应用添加对https的支持'
pubDate: 2024-05-08
tags: ['Koa.js', 'https', 'node.js']
---

## 1. 安装 koa-sslify

```shell
npm install koa-sslify
```

## 2. 使用 koa-sslify

大致流程为引入该中间件，准备必要的配置信息，使用这些配置创建服务。下面是一个完整示例

```javascript
const fs = require('fs')
const http = require('http')
const https = require('https')
const Koa = require('koa')
const { default: enforceHttps } = require('koa-sslify')

// koa实例
const server = new Koa()

// 定义所需配置信息
const HTTPS_PORT = 443
const HTTP_PORT = 80
const SSL_KEY = fs.readFileSync('***ssl.key')
const SSL_CSR = fs.readFileSync('***ssl.crt')

// 引入中间件，强制使用https
server.use(
  enforceHttps({
    port: HTTPS_PORT,
  })
)

// 配置ssl证书
const options = {
  key: SSL_KEY,
  cert: SSL_CSR,
}

// 创建https服务
https.createServer(options, server.callback()).listen(HTTPS_PORT, (error) => {
  if (!error) {
    console.log('HTTPS服务已启动')
  }
})

// 同理，创建基本http服务
http.createServer(server.callback()).listen(HTTP_PORT, (error) => {
  if (!error) {
    console.log('HTTP服务已启动')
  }
})
```

## 附录

最后再附上一个官方的默认函数可接受配置项表格
|Name|Type|Default|Description|
|---|---|---|---|
|resolver|Function|httpsResolver|Function used to test if request is secure|
|hostname|Function|undefined|Function that takes the request hostname string as its only argument and returns the desired hostname to use as a result. Uses request hostname if not set or return value is falsy|
|port|Integer|443|Port of HTTPS server|
|ignoreUrl|Boolean|false|Ignore url path (redirect to domain)|
|temporary|Boolean|false|Temporary mode (use 307 Temporary Redirect)|
|skipDefaultPort|Boolean|true|Avoid port in redirect url :443|
|redirectMethods|Array|['GET', 'HEAD']|Whitelist methods that should be redirected|
|disallowStatus|Integer|405|Status returned for disallowed methods|

## 参考

_官方主页: [koa-sslify-npm](https://www.npmjs.com/package/koa-sslify)_
