# Docker

## Настройка и запуск LAMP

1. Пишем в директории Dockerfile

```docker
FROM mattrayner/lamp:latest-1804
```

2. Билдим в директории из консоли MacOS, указывая имя образа lamp

```zsh
docker build . -t lamp
```

3. Запускаем образ

```zsh
docker run lamp

```

## Инструкции для репозитория бэкенда Яндекс, не годится в широком смысле

Скачал настроенный репозиторий? Настрой контейнер

```sh
make run
```

Настроил контейнер? Запускай его

```sh
make start
```

Остановить сервер

```
make stop
```

## Docker Windows 8.1

Все под правами админа.

Установи [docker-toolbox](https://github.com/docker/toolbox/releases)

Запусти терминал Docker Quickstart Terminal

```
"C:\Program Files\Git\bin\bash.exe" --login -i "C:\Program Files\Docker Toolbox\start.sh"
```

Зайди в папку с репозиторием

Запусти

```sh
docker-compose up
```

Сервер откроется на [http://192.168.99.100:3000/](http://192.168.99.100:3000/)
localhost не будет

апгрейдься на Win10
