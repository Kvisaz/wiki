# Hot Reload

Если приложение запущено на подключенном к компу телефоне или эмуляторе - изменения в коде могут моментально отражаться на экране. Это Hot Reload.

(Хорошая статья)[https://medium.com/podiihq/understanding-hot-reload-in-flutter-2dc28b317036]


## Не работает в Stateless Widget
Он не работает в Stateless Widget. (Ссылка)[https://github.com/flutter/flutter/issues/13192].

Stateless Widget не меняется в runtime компиляции. 

## Не работает при смене Stateful ->  Stateless и обратно

Будет ошибка. Нужен рестар приложения.


## Изменения в UI могут не отслеживаться

Если изменения в коде не исполняются в случае перестройки дерева виджетов.

Code changes might not be visible in the refreshed UI. This is usually common after making changes to the apps main method.

If the modified code is downstream of the root widget’s build method, then hot reload behaves as expected. However, if the modified code won’t be re-executed as a result of rebuilding the widget tree, then you won’t see its effects after hot reload.