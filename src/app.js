import { Form } from "./components/classes/form";
import { Form as Form2 } from "./components/functions/form"; // если одинаковые имена, можно переименовывать и подключать потом 2ое Имя As Form2 - например
import { useState } from "react";
import "./index.css";


export const App = () => {
    const [toggle, setToggle] = useState(true);

    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);

    return (<>
        <Form arr={arr} name="geekbrains" /> {/* добавляем наш с массив с данными в нашу форму */}
        <hr />
        <button onClick={() => setToggle(!toggle)}>{toggle ? "hide" : "show"}</button> {/* на кнопку событие при клике, куда закидываем нашу функцию setToggle, если будет true, то станет false и наоборот. Сам текст будет браться из нашей переменной toggle, куда передаем значением с помощью тернарного оператора ? : что будет конкретно после нажатия на кнопку. {} - означает JS в реакте */}
        {toggle && <Form2 name="JS" />} {/* если будет значение true, то вернет Form2, если будет false, то false, то есть не отрисует элементы даже в DOM - дереве */}

        <ul className="header"> {/* className - для выбора нужного класса */}
            {arr.map(item => <li>{item}</li>)
            } {/* отрисовка сразу нескольких значений в массиве */}
        </ul>

    </>);
}