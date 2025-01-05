---
title: '安装Docker(Ubuntu@24)'
description: '使用官方apt仓库安装'
pubDate: 2024-12-29
tags: ['Ubuntu', 'Docker', '安装&部署']
---

## Step 1: 设置 Docker 的 Apt 存储库

```shell
# 添加Docker的官方GPG密钥
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# 添加Apt源
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
```

## Step 2: 安装

- 安装最新版本

```shell
# 安装
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

- 安装其他版本

```shell
# 查看所有可用版本
apt-cache madison docker-ce | awk '{ print $3 }'

# 设置版本号，这里以 5:27.4.0-1~ubuntu.24.04~noble 为例
VERSION_STRING=5:27.4.0-1~ubuntu.24.04~noble

# 安装
sudo apt-get install docker-ce=$VERSION_STRING docker-ce-cli=$VERSION_STRING containerd.io docker-buildx-plugin docker-compose-plugin
```

至此安装完毕，使用下面的命令验证安装状态

```shell
docker version

# 如果一切顺利，执行该命令后应该能看到两部分的内容，分别为客户端信息和服务端信息
Client: Docker Engine - Community
 Version:           27.4.1
 API version:       1.47
 Go version:        go1.22.10
 Git commit:        b9d17ea
 Built:             Tue Dec 17 15:45:46 2024
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          27.4.1
  API version:      1.47 (minimum version 1.24)
  Go version:       go1.22.10
  Git commit:       c710b88
  Built:            Tue Dec 17 15:45:46 2024
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.7.24
  ...
```

## 参考

[_Docker 官方文档(Install using the apt repository)_](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
