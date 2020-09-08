# Сертификаты и подписи в XCode

Для сборки iOS проекта нужно иметь подписанные сертификаты.

1. XCode -> настройки Preferences ->  свой AppleId -> Sertificates 

Добавляем `iOS development sertificate`

Эти сертификаты будут добавлены в Apple Console автоматически.

2. Открываем учетную запись в Apple Console -  создаем новый profile под  iOS development,
добавляем сертификаты из п.1,  добавляем нужные устройства (для теста - adhoc)

3. XCode->Runner->Signing в profiles ищем и загружаем созданный profile