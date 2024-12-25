# Запуск фронта в WebView

## Android

1. AndroidManifest - чтобы открыть ссылки локалхоста

```xml
 <application
...
        android:usesCleartextTraffic="true"
```

2. Подключить телефон к той же WiFi сети

3. Узнать IP компьютера с фронтом в той же сети, к примеру
```
192.168.0.104
```

4. Запусть на компе фронт к пример с адресом `localhost:3001`

5. В мобильном коде вызвать вебвью с адресом компа и портом локалхоста

```
'http://192.168.0.104:3001/'
```

6. Все

## iOS 

Запуск локалхоста на телефоне через IP работает и на iOS

Но можно еще соединить iPhone и Mac, в Mac в настройках сети назвать компьютер 'localhost.local' - и набирать в браузере на телефоне и `localhost.local:3001`


Набери в консоли Safari для iPad/iPhone
`window.location.href='http://localhost.local:3000'`


## Установить на iPad/iPhone другую версию

Скачасть ipsw файл, к примеру тут
https://ipsw.me/install/iPad13,2/21G101

Plug your iPad Air 4 (Cellular) in to your Mac.
Navigate to your iPad Air 4 (Cellular) in Finder.
Hold the Option or Alt key on your keyboard, and press "Restore".
Select the iPad_Fall_2020_17.6.1_21G101_Restore.ipsw file that you downloaded.
Wait for the restore to complete, and the iPad Air 4 (Cellular) to reboot.