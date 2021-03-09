# Сниппеты Python

## Строки

Первое слово из строки - оптимизированный, на больших строках быстрее

```python
# Этот способ якобы быстрее, чем сплиттинг
def first_word(text):
    index = text.find(" ")
    return text[:index] if index != -1 else text
```

Первое слово из строки - как бы решал я

```python
def first_word(text: str) -> str:
    parts = text.split(' ')
    return parts[0] if len(parts)>1 else text
```

Первое слово из строки - еще более быстрый вариант. Что не удивительно, так как не использует работу с массивами.

```python
def first_word_3(text):
    try:
        index = text.index(" ")     # ищем первое вхождение пробела
        return text[:index]         # возвращаем строку до нужного индекса
        # text[index:] # строка после индекса
        # text[index] # строка по индексу
    except ValueError:
        return text
```
