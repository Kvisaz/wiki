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

Можно кидать посты в подпапки source, и это может даже отражаться в URL поста, через %title

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

## Пермалинк

Открываем config.yaml в корне и в поле permalink пишем

```
permalink: :category/:title.html
```

Это дает вывод категорий и папок, а затем title файла. Примеры

`:year/:month/:day/:title/` -> 2013/07/14/hello-world/

`:year-:month-:day-:title.html` -> 2013-07-14-hello-world.html

`:category/:title/` -> foo/bar/hello-world/

`:title-:hash/` -> hello-world-a2c8ac003b43/

Категории, если их несколько, добавляются друг за другом в пермалинк.

Если файл в source лежит в подпапках - подпапки добавляются в пермалинк, если используется title
