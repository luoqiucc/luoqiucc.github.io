---
title: '部署你的 Code Server(Ubuntu)'
description: '部署你的 Code Server(Ubuntu)'
pubDate: 2024-03-24
tags: ['Ubuntu', 'CodeServer', '安装&部署', 'Linux']
---

## 使用官方的安装脚本 _install.sh_

这条命令用于预览安装的一系列步骤

```shell
curl -fsSL https://code-server.dev/install.sh | sh -s -- --dry-run
```

使用下面的命令将 Code Server 部署到你的机器

```shell
curl -fsSL https://code-server.dev/install.sh | sh
```

_由于国内复杂的网络环境，若在使用该方式时下载速度过慢，可考虑使用下面的手动安装_

## 手动安装

### 1. 下载 deb 包

前往 Github 发布页 _[https://github.com/coder/code-server/releases](https://github.com/coder/code-server/releases)_ 下载相应版本的 deb 包，这里根据本人的机器(Ununtu)选择的是 _code-server_4.89.0_amd64.deb_

### 2. 安装

使用下面的命令安装该 deb 包到自己的机器

```shell
sudo dpkg -i code-server_4.89.0_amd64.deb
```

_文件名注意替换为自己实际的版本号_

## 配置与运行

### 1. 配置

配置文件路径: **~/.config/code-server/config.yaml**

```yaml
# 默认只允许本地访问，使用8080端口，修改为0.0.0.0表示允许来自任意ip的连接，端口号任意
bind-addr: 127.0.0.1:8080

# 验证方式，默认使用密码的方式进行验证
auth: password

# 你的访问密码
password: bdib4u3i2b34uv3u2y14v

cert: false
```

### 2. 运行

直接运行 code-server 命令启动 Code Server

```shell
code-server
```

以服务的方式启动

```shell
sudo systemctl start --now code-server@$USER
```

## 使用

打开浏览器并访问 http://127.0.0.1:8080 使用你的 Code Server

## 参考

_[Code Server 官方文档](https://coder.com/docs/code-server/latest/install)_
