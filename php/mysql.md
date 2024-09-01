# MySQL

Локальный пароль по дефолту root

Запуск через brew -  `brew services start mysql@5.7`

Вход админом - `mysql -u root -p`  - далее ввод `root` на Macbook или Enter на чистом

Создать юзера
`CREATE USER IF NOT EXISTS 'test'@'localhost' IDENTIFIED BY 'Password' PASSWORD EXPIRE;`

Удалить
`DROP USER 'test'@'localhost';`

Просмотреть всех
`select User from mysql. user;`

Создать базу
`CREATE DATABASE db_name;`

Дать права юзеру на базу
`GRANT ALL PRIVILEGES ON db_name.* TO 'test'@'localhost';`

`GRANT ALL PRIVILEGES ON h5p_01.* TO 'h5p'@'localhost';`