---
title: '部署你的Gitlab CE(Ubuntu@24)'
description: 'Ubuntu@24部署Gitlab CE，本文介绍了在线与离线两种安装方式'
pubDate: 2025-05-19
tags: ['Ubuntu', 'Gitlab CE', '安装&部署', 'Linux']
---

## 在线安装

这里首先介绍在线安装的方式

### Step 1: 安装必要依赖

```shell
sudo apt-get update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl

# 邮件服务（可选）
sudo apt-get install -y postfix
```

### Step2: 安装 Gitlab CE

一些参数

- EXTERNAL_URL （必须）Gitlab CE 的访问地址，这里我由于本地的机器并没有配置域名，所以直接使用 IP 地址的方式访问
- GITLAB_ROOT_EMAIL （可选）初始账户的邮箱地址，默认为一个随机地址
- GITLAB_ROOT_PASSWORD （可选）Root 账户的登录密码，默认为随机密码，该密码保存在 **/etc/gitlab/initial_root_password** 文件中（该文件会在 24 小时后被删除）

```shell
# 配置GitLab CE的包仓库
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash

# 默认安装最新版本。若需指定版本，在该命令末尾拼接版本号即可
# 例如 sudo EXTERNAL_URL="https://gitlab.example.com" apt-get install gitlab-ce=17.5.5-ce.0
# 查看可用版本 apt-cache madison gitlab-ce
sudo EXTERNAL_URL="https://gitlab.example.com" apt-get install gitlab-ce
```

至此，Gitlab CE 安装完毕，访问 EXTERNAL_URL 中设置的访问地址，使用密码与用户名 root 登录。

## 离线安装

因为一些原因使用在线安装的方式时资源下载的速度可能会非常缓慢，这时候可以尝试使用官方提供的软件包进行离线安装

### Step1: 下载并安装软件包

前往官方仓库[_https://packages.gitlab.com/gitlab/gitlab-ce_](https://packages.gitlab.com/gitlab/gitlab-ce)，根据自己服务器的架构和使用的操作系统来选择对应版本的软件包。准备完毕后对照自己的软件包类型选择下面的命令安装他们。

```shell
# Debian/Ubuntu
dpkg -i <package_name>

# RHEL/CentOS 7 and Amazon Linux 2
rpm -Uvh <package_name>

# RHEL/Almalinux 8/9 and Amazon Linux 2023
dnf install <package_name>

# SUSE
zypper install <package_name>
```

### Step2: 配置基本信息

找到 **/etc/gitlab/gitlab.rb** 文件，找到 **external_url** 选项并将他的值设为你的主机地址，

```shell
# 这里由于我本地的机器并没有配置域名，所以直接使用IP地址访问
external_url "http://192.168.0.151"
```

设置完成后使用下面的命令重载配置

```shell
sudo gitlab-ctl reconfigure
```

至此，Gitlab CE 安装完毕，在浏览器访问你设置的 external_url 进入。同时，如果没有手动指定 root 用户的初始密码，那么随机生成的密码将保存在 **/etc/gitlab/initial_root_password** 文件中。注意！该文件会在 24 小时后被删除。

## 参考

官方文档

- [_Install GitLab with the Linux package_](https://docs.gitlab.com/omnibus/installation)
- [_Install self-managed GitLab(Ubuntu)_](https://about.gitlab.com/install/#ubuntu)
- [_By using a downloaded package_](https://docs.gitlab.com/ee/update/package/#download-a-package-manually)
