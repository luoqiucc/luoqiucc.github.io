---
title: 'Golang更换代理'
description: 'A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.'
pubDate: 2024-12-27
tags: ['Golang', '镜像站']
---

> _A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond._

由于国内复杂的网络环境，在 Go 进行资源下载时若出现网络问题可尝试更换代理

```shell
# 七牛
go env -w GOPROXY=https://goproxy.cn

# 阿里
go env -w GOPROXY=https://mirros.aliyun.com/goproxy
```
