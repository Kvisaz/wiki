# Localhost на мобилке

Ситуация - запускаем localhost на компьютере. Надо открыть его на мобилке

## iOS

1. ipconfig - смотрим адрес в локальной сети

2. набираем на телефоне этот адрес с портом

`http://192.168.99.1:8080`

## iOS 2 - with MacBook

1. Connect iPhone to Mac - IPhone must be visible in Finder
2. Open Settings -> Sharing (общий доступ)
3. edit name of computer as 'localhost.local'
4. Use 'localhost.local:3000/kid-phaser/login' for login open in iPhone

Этот вариант может быть удобнее, так как позволяет через Safari открывать консоль подключенного iPhone
и менять сложные URL через window.location

Пример:
`window.location=http://localhost:1234/games/games/?userId=14625&studentId=5827&hash=3BuM9PeCQwKZz5Q-ZlOwYA`