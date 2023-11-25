# Параметры локальной LLM

можно задавать в OogaBoga

- Max New Tokens: Это числовое значение, которое ограничивает количество новых токенов, которые генерируются LLM. Это может использоваться для контроля длины ответа или для предотвращения переполнения памяти модели.

- Temperature: Это параметр, который влияет на случайность генерированных LLM. Более высокая температура приводит к более непредсказуемому и креативному ответу, в то время как более низкая температура приводит к более предскаazuемому и точному ответу.

- Top P: Это значение, которое определяет вероятность выбора наиболее вероятного ответа из нескольких вариантов. Если значение Top P равно 1, LLM будет выбирать только наиболее вероятный ответ; если значение- Top P меньше 1, LLM будет учитывать другие менее вероятные ответы.

- Min P: Это значение, которое определяет минимальную вероятность, которую должна иметь каждый ответ, чтобы быть принятым LLM. Это позволяет фильтровать ответы с низкой вероятностью и гарантировать, что все ответы будут достаточно уверенными.

- Top K: Это значение ограничивает колличество лучших предложений, которые модель сможет использовать для создания ответа. Это позволяет контролировать разнообразие ответа и предотвращать переполнение памяти модели.

- Repetition Penalty: Этот параметр уменьшает вероятность того, что модель будет повторять предыдущие слова или фразы в ответе. Это позволяет создавать более разнообразный и неповторяющийся ответ.

- Presence Penalty: Этот параметр уменьшает вероятность того, что модель будет повторять слова или фразы из исходного текста. Это позволяет создавать более оригинальный ответ и избегать прямой цитаты из исходного текста.

- Frequency Penalty: Этот параметр уменьшает вероятность того, что модель будет использовать часто встречающиеся слова или фразы в ответе. Это позволяет создавать более интересный и нестандартный ответ, используя менее распространенные слова или фразы.

- Repetition Penalty Range: Это значение определяет диапазон значений для Repetition Penalty, который контролирует, насколько сильно модель должна уменьшать вероятность повторения предыдущих слов или фраз в ответе. Меньшее значение означает большую чувствительность к повторам, а большее значение означает меньшую чувствительность.

- Typical P: Это значение представляет собой среднее значение вероятности для выбора ответа из множества альтернатив. Если значение Typical P равно 1, это означает, что модель будет предпочитать более предсказуемые и стандартные ответы; если значениеTypical P меньше 1, это означает, что модель будет предпочитать более креативные и рискованные ответы.

- TFS (Term Frequency - Inverse Document Frequency): Это статистический метод, который используется для оценки значимости слов в документах. Он учитывает частоту использования слова в документе (терм-частота) и отношение этого значения к общему количеству документов, в которых данное слово встречается (обратная документная частота). Таким образом, TF-IDF помогает определить, насколько важное слово для понимания контекста документа.
Top A: Это значение определяет долю лучших предложений, которые модель сможет использовать для создания ответа. Это позволяет контролировать разнообразие ответа и обеспечивать более точный результат.
Epsilon Cutoff: Это параметр, который контролирует точность генерированных ответов. Если значение Epsilon Cutoff достаточно мало, модель стремится найти более точный ответ; если значение Epsilon Cutoff больше, модель становится более гибкой и может принимать менее точные, но более креативные ответы.
Eta Cutoff: Это параметр, который контролирует длину ответа. Если значение Eta Cutoff мало, модель генерирует более короткие ответы; если значение Eta Cutoff больше, модель генерирует более длинные ответы