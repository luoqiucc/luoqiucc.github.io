---
title: '部署你的Gitlab CE(Ubuntu@24)'
description: 'Ubuntu@24部署Gitlab CE'
pubDate: 2025-01-10
tags: ['Ubuntu', 'Gitlab CE', '安装&部署']
---

## Step 1: 安装必要依赖

```shell
sudo apt-get update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl

# 邮件服务（可选）
sudo apt-get install -y postfix
```

## Step2: 安装 Gitlab CE

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

## 参考

官方文档

- [_Install GitLab with the Linux package_](https://docs.gitlab.com/omnibus/installation)
- [_Install self-managed GitLab(Ubuntu)_](https://about.gitlab.com/install/#ubuntu)
