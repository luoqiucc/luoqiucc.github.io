---
isFocus: true
title: 'Git常用命令速查'
description: 'Git常用命令速查'
pubDate: 2024-08-14
tags: ['Git']
---

## Git 的三个工作区域

| 分类              | 描述                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------- |
| 工作区            | 自己的项目目录                                                                              |
| 暂存区            | 一般存放在 **.git** 目录下的 **index** 文件(_.git/index_)中，所以我们把暂存区有时也叫作索引 |
| Git 仓库 / 版本库 | 工作区有一个隐藏目录 **.git** ，这个不算工作区，而是 Git 的版本库                           |

## 文件的三种基本状态

| 状态                    | 描述                                                           |
| ----------------------- | -------------------------------------------------------------- |
| 已提交(**_committed_**) | 表示数据已经安全的保存在本地数据库中                           |
| 已修改(**_modified_**)  | 表示修改了文件，但还没提交到数据库中                           |
| 已暂存(**_staged_**)    | 表示对已修改文件的当前版本做了标记，使之包含在下次提交的快照中 |

## 基本使用

```shell
# 初始化仓库
git init

# 查看状态
git status

# 查看提交日志
git log

# 查看所有的提交日志
git reflog

# 树形查看
git log --graph

# 格式化显示，让内容只显示在一行中，更简洁
git log --pretty=oneline

# 查看git本地仓库中的文件目录
git ls-files

#将改动提交到暂存区
git add [文件名]

# 提交内容到版本库
git commit -m [提交描述]

# 将所有改动添加到暂存区并提交到版本库
git commit -am [提交描述]

#与版本库内容进行比较
git diff HEAD -- [文件名]

#从暂存区撤销提交
git restore --staged [文件名]

#移除上一步操作
git reset HEAD [文件名]
```

## 版本回退

```sh
# 往上回退一个版本
git reset --hard HEAD^

# 往上回退三个版本，以此类推
git reset --hard HEAD~3

# 根据提交记录的hash回退或前进
git reset --hard [提交记录的hash]
```

## 删除文件

```shell
# 1. 以git add的形式删除，先添加一个删除的修改到暂存区，然后提交
git add [删除的文件名]

# 2. 以git rm的形式删除
git rm [删除的文件名]
```

## 远程操作

ssh 密钥

```shell
# 生成ssh密钥
ssh-keygen -t rsa -C [一般都是邮箱]

# 测试链接，以Github为例
ssh -T git@github.com
```

从远程仓库拉取

```shell
# 获取远程仓库的最新状态
git fetch

# 克隆项目到本地
git clone [项目地址]
```

推送到远程仓库

```shell
# 添加远程仓库
git remote add [远程仓库名] [仓库地址]

# 推送到远程仓库
git push [远程仓库名] [分支名]
```

## 分支操作

本地分支操作

```shell
# 切换到指定分支
git checkout [分支名]

# 新建分支并切换到该分支
git checkout -b [分支名]

# 删除指定分支
git branch -d [分支名]

# 查看所有分支
git branch

# 合并分支
git merge [分支名]

# 重命名分支
git branch -m [旧分支名] [新分支名]
```

远程分支操作

```shell
# 查看本地与远程分支
git branch -a

# 推送本地分支到远程仓库
git push [远程仓库名] [分支名]

# 删除远程分支(本地分支保留)
git push [远程仓库名] -d [分支名]

# 拉取远程指定分支并在本地创建分支
git checkout -b [本地分支名] [远程仓库名/远程分支名]
```

## 标签管理

```shell
# 查看所有标签
git tag

# 新建标签，默认位置为HEAD
git tag [标签名]

# 新建标签，并指定位置
git tag [标签名] [提交记录的hash]

# 添加标签到指定位置并指定标签描述信息
git tag -a [标签名] -m [描述信息] [提交记录的hash]

# 推送本地标签到远程
git push [远程仓库名] [标签名]

# 推送全部未推送的标签到远程
git push [远程仓库名] --tags

# 删除一个本地标签
git tag -d [标签名]

# 删除一个远程标签
git push [远程仓库名] [:refs/tages/标签名]
```
