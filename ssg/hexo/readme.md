# Hexo

Генератор блогов с хорошим набор тем, на NPM.

```cmd
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
```

[Создавать посты](https://hexo.io/ru/docs/writing.html)

## Создать посты

Создать из консоли новый пост - `hexo new [layout] <title>`

Вообще можно просто заполнять папку source MD файлами. В каждом файле можно задавать категории и теги, и система автоматически их будет линковать, показывая соответствующие теги.

Пример шапки поста

```md
---
title: HelloWorld
layout: config.default_layout
date: 2020-12-13 15:30:46
updated: 2020-12-13 15:30:52
comments: false
permalink: hello11
categories:
  - Sports
  - Baseball
tags:
  - Injury
  - Fight
  - Shocking
---
```
