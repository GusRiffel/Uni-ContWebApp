import "../main.scss";
import todos from "./todos";
import squareNumber from "./squareNumber";
import Todo from "./Components/Todo";
import renderView from "./Components/View/renderView";

window.addEventListener('DOMContentLoaded',render(todos));
let id = 4;

function render(todos) {
    const tds = [...todos];
    const handleCloseClick = (e) => {
        render(tds.filter((c) => e.target.dataset.outerItem !== c.id));
    };

    const createTodo = () => {
        const dateConfig = {weekday: "short", month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"};
        const date = new Date();
        const todoValue = document.querySelector("#todoInput").value;

        if (!todoValue) {
            alert("To do cannot be empty");
            return;
        }
        const newTodo = {
            id: String(id),
            text: todoValue,
            created: String(date.toLocaleString("en-US", dateConfig)),
            completed: false,
        }
        tds.push(newTodo);
        console.log(tds)
        id++;
        document.querySelector("#todoInput").value = " ";
        render(tds);
    }

    renderView();
    let htmlList = todos.map((item) => Todo(item.text, item.id));
    document.querySelector(".list").innerHTML = htmlList.join(" ");
    document
        .querySelectorAll(".close")
        .forEach((e) => e.addEventListener("click", handleCloseClick));

    const createTodoBtn = document.querySelector("#createTodoBtn");
    createTodoBtn.addEventListener("click", createTodo);
}


console.log(`The square root of 36 is ${squareNumber(36)}`);



