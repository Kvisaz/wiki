# Text - Текстовый виджет Flutter

Просто текст.

## Ссылки в тексте

Используй TextSpan с особым цветом и реакцией на onTap.

## Красивый текст - TextSpan

Используй TextSpan 
- ([StackOverFlow](https://stackoverflow.com/questions/43583411/how-to-create-a-hyperlink-in-flutter-widget))
- [Официальная документашка](https://api.flutter.dev/flutter/painting/TextSpan-class.html)

TextSpan - это текст с визуальным стилем. Он может содержать как текст, так и детей (children) - другие виджеты TextSpan.

Чтобы TextSpan работал - используй его внутри RichText.

```dart
RichText(
          text: TextSpan(
            children: [
              TextSpan(
                style: bodyTextStyle,
                text: seeSourceFirst,
              ),
              TextSpan(
                style: bodyTextStyle.copyWith(
                  color: colorScheme.primary,
                ),
                text: repoText,
                recognizer: TapGestureRecognizer()
                  ..onTap = () async {
                    final url = 'https://github.com/flutter/gallery/';
                    if (await canLaunch(url)) {
                      await launch(
                        url,
                        forceSafariVC: false,
                      );
                    }
                  },
              ),
              TextSpan(
                style: bodyTextStyle,
                text: seeSourceSecond,
              ),
            ],
          ),
```
