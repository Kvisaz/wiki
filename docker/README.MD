# Docker

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

