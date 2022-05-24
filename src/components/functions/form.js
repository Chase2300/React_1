// функциональное программирование на реакте
// импоритруем хуки(читаем в документации)

import { useState } from "react" // это функция, которая возвращает 2 элемента - значение нашего state, а второе - функция, которая будет менять наше значение

import style from "./form.module.css" // импорт именного стиля для его дальнейшего применения. Создаются с припиской module, чтобы webpack понимал где модульные стили, а где обычные. Разница в том, что он преписывает дополнительный префикс в атрибуте, чтобы не было коллизии одинаковых наименований стилей. К примеру, он прописывает название класса Form_background__Z34AS. Таким образом не переписываются стили и не конфликтуют друг с другом

export const Form = () => {
    const [count, setCount] = useState(0); // возвращается массив, в скобках дефолтное значение
    const [name, setName] = useState("GB"); // возвращается массив, в скобках дефолтное значение

    const click = () => {
        setCount(count + 1)


    }
    const change = (event) => {
        setName(event.target.value)
    }
    return <>
        <div className={style.background}>hello, {count}
        </div>
        <button onClick={click}>Click me</button>
        <p style={{backgroundColor: "green"}}>Name: {name}</p> {/* inline styles */}
        <input type="text" onChange={change} value={name} />
    </>
}