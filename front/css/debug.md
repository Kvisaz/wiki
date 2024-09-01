# Отладка CSS в Chrome

How to test CSS selector in Chrome:

1. Open console in any page where you want to test CSS rule
2. type to test
```document.querySelectorAll('#CSS_SELECTOR#').forEach (e=> { e.style.border='12px solid red'; })``` 
3. type to reset
```document.querySelectorAll('#CSS_SELECTOR#').forEach (e=> { e.style.border=null; })``` 

It is very useful for parser