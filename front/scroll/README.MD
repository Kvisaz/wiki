## DOM Scroll

Если нужно продетектировать прокрутку скроллящегося элемента до конца, используй этот сниппет

```typescript
function isFullScrolled(element: HTMLElement) {
  const { scrollHeight, scrollTop, clientHeight } = element;
  const gap = 0.1 * clientHeight; // запас при котором начать подкачку
  // сколько осталось внизу, внимание, может быть отрицательным при приближении
  const lastScrollHeight = scrollHeight - scrollTop - clientHeight;

  // когда останется gap - значит прокрутилось до момента, что под скроллом остался gap
  return lastScrollHeight <= gap;
}
```