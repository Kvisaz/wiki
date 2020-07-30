# Роутинг в React - react-router

[<------------ Индекс ](README.md)

[Сайт react-router](https://reactrouter.com/web/guides/quick-start)

Добавить к проекту (уже созданному через create-react-app)

```bash
npm i react-router-dom
```

## TypeScript

Надо добавить типы
```bash
npm i -D @types/react-router-dom
```

## Настройка сервера и редиректа

Не нужна. Главное, чтобы был http-server, то есть React-приложение работало.

Манипуляция с .htaccess не нужно. Но они могут понадобиться, конечно, если на сервере уже есть какие-то редиректы )


## Основные элементы
Роутер предоставляет компонент `<Router>`, внутри которого можно вставлять ссылки `<Link to='/link'>Текст ссылки</Link>` и условный рендер через `<Switch>`, внутри которого вложены роуты типа 

```tsx
<Route path='/link'>
    Компоненты и любой контент
</Route>
```

## Route

Атрибут `path` отвечает за неточное совпадение. Если нужно точное - нужно добавить атрибут `exact`.

```tsx
<Route exact path='/'>Home</Route>
```

А еще подобный корневой роут можно поместить самым последним в switch - тогда он будет показывать все ссылки, не попавшие в предыдущие совпадения. 


## Пример - базовый роутинг

Пишем в App компонент Router. Внутри вкладываем ссылки, и свич роутов. Пример

```tsx
<Router>
  <div>
    <nav>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/users">Users</Link> </li>
      </ul>
    </nav>

    {/* <Switch> рендерит первый <Route> подходящий текущему URL. */}
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/users"><Users /></Route>
      <Route path="/">404 - ничего не найдено</Route>
    </Switch>
  </div>
</Router>
```

[<------------ Индекс ](README.md)