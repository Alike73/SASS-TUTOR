# Функция getStyle

Цель данной функции - вернуть строку для атрибута `className` из всех переданных аргументов при вызове.

## 1) Вызов функции getStyle – строка 17, на примере компонента Stack (компонент, позиционирующий элементы на странице)

![Code snippet-1](./src/assets/images/sass-1.png)

## 2) Описание функции
- **Параметры:**
  - `style` – базовый/общий класс компонента;
  - `additional` – массив дополнительных классов – передаваемые пропсом от родительского компонента для уникальной стилизации под дизайн систему и UI;
  - `mode` – стиль, который применяется только, если его состояние `true`.

![Code snippet-3](./src/assets/images/sass-2.png)

## 3) Посмотрим в консоли, что из себя представляют переменные `mode` и `additional`:

![Code snippet-3](./src/assets/images/sass-3.png)

## 4) Посмотрим в консоли, что такое `styles`:

![Code snippet-4](./src/assets/images/sass-4.png)

Это объект со значением:
  - `key` – название стиля в CSS;
  - `value` – его сгенерированное значение модульным CSS.

![Code snippet-5](./src/assets/images/sass-5.png)

Данные для формирования объекта берутся из документа SCSS, где название класса является `key` объекта `styles`.

![Code snippet-6](./src/assets/images/sass-6.png)

## 5) Еще раз посмотрим на синтаксис переменных `mode` и `additional`:

![Code snippet-7](./src/assets/images/sass-7.png)

### 5.1) `const additional`
Подробнее о синтаксисе вы можете ознакомиться здесь: [Объекты (javascript.ru)](https://learn.javascript.ru/object)

Чтобы получить значение по какому-либо свойству, мы можем написать так:

![Code snippet-8](./src/assets/images/sass-8.png)

И увидим в консоли следующее – `value` по `key`:

![Code snippet-9](./src/assets/images/sass-9.png)

Но мы также можем писать `key` в квадратных скобках, когда ключ состоит из двух слов или это строка.

В данном случае, мы записываем `styles[justify]`, потому что пропс из родительского компонента мы передаем в виде строки.

Пример – пропсом мы передаем значение `justify`, как `‘justifyCenter’`.

![Code snippet-10](./src/assets/images/sass-10.png)

![Code snippet-11](./src/assets/images/sass-11.png)

![Code snippet-12](./src/assets/images/sass-12.png)

В таком случае наша запись на строке 12 будет выглядеть как `styles['justifyCenter']`, что тоже самое что и `styles.justifyCenter`, и мы получим нужное значение объекта `styles`.

![Code snippet-13](./src/assets/images/sass-13.png)

### 5.2) `const mode`
Представляет собой объект со свойствами `key` – сгенерированное модульным SCSS значением, здесь `value` `true/false`.

![Code snippet-14](./src/assets/images/sass-14.png)

![Code snippet-15](./src/assets/images/sass-15.png)

![Code snippet-16](./src/assets/images/sass-16.png)

## 6) Результат выполнения функции:

![Code snippet-17](./src/assets/images/sass-17.png)

Мы получим данную строку:

![Code snippet-18](./src/assets/images/sass-18.png)

При монтировании компонента в DOM-дерево, в процессе рендера страницы, нужные данные из SCSS подтянутся из объекта `styles`, и мы увидим результат.

![Code snippet-19](./src/assets/images/sass-19.png)

![Code snippet-20](./src/assets/images/sass-20.png)
