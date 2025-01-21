---
title: 'Ubuntu 系统安装 MySQL(使用 DEB-Bundle 包)'
description: '关于这个问题网上的教程都比较旧，所以特别总结了新的比较简洁的方法。'
pubDate: 2023-09-23
tags: ['Ubuntu', 'MySQL', '安装&部署', 'Linux']
---

## step 1: 下载软件包

前往 MySQL 官网下载该文件，官网链接：[https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)，根据自己的需要选择 MySQL 的版本，选好后在文件下载列表中找到 DEB Bundle 文件并下载。

## step 2: 解压该包

将文件解压到某个位置。

```shell
tar -xvf mysql-server_XXX_XXX.deb-bundle.tar
```

解压完成后应该有这些文件。

```shell
libmysqlclient21_8.0.36-1ubuntu22.04_amd64.deb
libmysqlclient-dev_8.0.36-1ubuntu22.04_amd64.deb
mysql-client_8.0.36-1ubuntu22.04_amd64.deb
mysql-common_8.0.36-1ubuntu22.04_amd64.deb
mysql-community-client_8.0.36-1ubuntu22.04_amd64.deb
mysql-community-client-core_8.0.36-1ubuntu22.04_amd64.deb
mysql-community-client-plugins_8.0.36-1ubuntu22.04_amd64.deb
mysql-community-server_8.0.36-1ubuntu22.04_amd64.deb
mysql-community-server-core_8.0.36-1ubuntu22.04_amd64.deb
mysql-community-server-debug_8.0.36-1ubuntu22.04_amd64.deb
mysql-community-test_8.0.36-1ubuntu22.04_amd64.deb
mysql-community-test-debug_8.0.36-1ubuntu22.04_amd64.deb
mysql-server_8.0.36-1ubuntu22.04_amd64.deb
mysql-testsuite_8.0.36-1ubuntu22.04_amd64.deb
```

## step 3: 安装相关依赖

如果机器上没有 libaio1 和 libmecab2，安装他们。

```shell
// 安装libaio1
sudo apt-get install libaio1

// 安装libmecab2
sudo apt-get -y install libmecab2
```

## step 4: 预配置

使用下面的命令来预配置 MySQL 服务包，执行该命令后我们需要配置 root 用户的密码和一些设置。

```shell
sudo dpkg-preconfigure mysql-community-server_*.deb
```

## step 5: 安装 MySQL

安装我们在第二步解压出的这些包，注意这些包相互之间具有依赖关系，需要按照一定的顺序安装。我们可以用下面这一条命令，他会按照正确的顺序安装所有包。

```shell
sudo dpkg -i mysql-{common,community-client-plugins,community-client-core,community-client,client,community-server-core,community-server,server}_*.deb
```

至此安装完成

## 额外事项

- 若在安装 MySQL 时依然遇到 dpkg 警告缺少依赖项的问题，可以尝试使用下面的命令来修复。

```shell
sudo apt-get -f install
```

- 文件位置
  - 所有配置文件(如 my.conf): /etc/mysql
  - 库，二进制文件等:
    - /usr/bin
    - /usr/sbin
  - 数据: /var/lib/mysql

## 参考

_[MySQL 官方文档](https://dev.mysql.com/doc/refman/8.0/en/linux-installation-debian.html)_
