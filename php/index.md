# PHP

Переход старых проектов с версии 5 на версию 7 - требует переписывания многих скриптов или обновления Wordpress (если таковой используется). Поэтому без надобности не следует просто так щелкать переключателем версии туда-сюда.

#Virtual Host

1. Правим - /usr/local/etc/httpd/extra/httpd-vhosts.conf
2. добавляем 127.0.0.1   site.new в /etc/hosts
3. `brew services restart httpd`

Внимание!
Символическая ссылка
Оригинал - /Users/sergeytokarev/work/sitenet/repo/sitenet_api/src 
Ссылка - /Users/sergeytokarev/www_local/parser/www
Локальный домен - parser.my



## Local PHP && MySQL Server on Mac 2020

https://github.com/ForkKvisaz/macOS-Local-Development-Setup

Ставим менеджер зависимостей Brew - https://brew.sh/

Затем ставим все через него

`brew install httpd`
`brew install php@8.1`
`brew install mysql@5.7`
`brew install phpmyadmin` // для управления базами
`brew install mysql-client` // для команд из строки

И всегда смотри что они пишут и добавляй нужные опции


Узнать версию php в Brew
`brew info php`

### Команды для работы

`brew services restart httpd`
`brew services restart mysql@5.7`

посмотреть запущенное

`brew services list`

Остановить

`brew services stop -all`

PhpMyAdmin и Php прописываются как опции серверов и запуска не требуют

### Apache web server in MacOS

Он там есть, но рекомендуют ставить через brew `brew install httpd`

- `brew services start httpd`
- `brew services stop httpd`
- `brew services restart httpd`

Настройка сервера в VS Code.

Ctrl + o - `/usr/local/etc/httpd/httpd.conf`

и делаем такие изменения

```conf
#php setup
LoadModule php_module /usr/local/opt/php/lib/httpd/modules/libphp.so
<FilesMatch \.php$>
        SetHandler application/x-httpd-php
</FilesMatch>

# current project src dir with index.php
DocumentRoot "/Users/sergeytokarev/work/sitenet/repo/sitenet_api/src"
<Directory "/Users/sergeytokarev/work/sitenet/repo/sitenet_api/src">
```

в строчку DirectoryIndex пишем так
`DirectoryIndex index.php index.html`

под <DirectoryDirectory> пишем
`AllowOverride All`

и снимаем коммент со строчки
`LoadModule rewrite_module lib/httpd/modules/mod_rewrite.so`

### MySQL in MacOS

- `brew services restart mysql@5.7`
- `brew services stop mysql@5.7`

To enable phpMyAdmin in Apache, add the following to httpd.conf and
restart Apache:
```conf
Alias /phpmyadmin /usr/local/share/phpmyadmin
<Directory /usr/local/share/phpmyadmin/>
    Options Indexes FollowSymLinks MultiViews
    AllowOverride All
    <IfModule mod_authz_core.c>
        Require all granted
    </IfModule>
    <IfModule !mod_authz_core.c>
        Order allow,deny
        Allow from all
    </IfModule>
</Directory>
```

The configuration file is /usr/local/etc/phpmyadmin.config.inc.php
     
Then open http://localhost/phpmyadmin

