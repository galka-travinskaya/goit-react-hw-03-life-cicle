# goit-react-hw-03-life-cicle

1. npx create-react-app . --use-npm
2. npm i prop-types
3. линтинг npm install --save-dev prettier husky lint-staged
4. Проверяем настройки VSCode(autoSeve - onFocusChange; formatOnSave - вкл;
   codeActionsOnSave - all)
5. Добавляем настройки в
   проект(https://github.com/goitacademy/react-lint-config)
6. настраиваем абсолютные импорты
   (https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
   (создаем файл jsconfig.json,вставляем... после чего можно писать import
   Button from 'components/Button'; без ../../../)

7. 02.00 Монтирование ComponentDidMount
8. 03.00 Обновление ComponentDidUpdate
9. 05.20 Размонтирование ComponentWillUnmount
10. 06.30 getDerivedStateFormProps shouldComponentUpdate getSnapshotBeforeUpdate
11. 09.00 Сохранение колекции заметок в localStorege (componentDidUpdate)
12. 0.17 Но если у нас в state пустой [], то пишем еще и в сomponentDidMount
13. 22.30 Modal window
14. 31.00 Modal window alternative of z-index (portals)
15. 35.20 Close modal on Esc
16. 40.00 componentWillUnmount снимает слушателя
17. Закрываем модалку при клике на бекдроп
18. 0.48 Таймер и утечка памяти с setState() без componentWillUnmount
19. 0.55 shouldComponentUpdate
20. 1.04 Альтернатива shouldComponentUpdate => PureComponent(очень часто используется)
21. 1.09 Рефакторим заметки, выносим Туду в отдельный компонент
22. 1.14 Кнопки-иконки
23. 1.31 Для чего в propTypes стоит 'aria-label' в IconButtons
24. 1.38 [https://codesandbox.io/] - React-прибамбасы :)
