---
title: '安装 Node.js 与 npm (Ubuntu@24)'
description: '本文主要介绍从NodeSource源安装 Node.js 和 npm'
pubDate: 2024-05-23
tags: ['Ubuntu', 'Node.js', '安装&部署', 'Linux']
---

```shell
# 添加 NodeSource 源
# 这里以安装最新的 22 版本为例
# 若要安装其他版本，替换“setup_22.x”中的版本号即可，例如若要安装20版本就是“setup_20.x”
curl -sL https://deb.nodesource.com/setup_22.x | sudo -E bash -

# 安装（npm会一并安装）
apt-get install nodejs -y
```

_以上命令可能需要 sudo_
