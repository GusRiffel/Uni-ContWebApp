import "../main.scss";
import img1 from "../assets/top-left-elips.png";
import img2 from "../assets/bottom-right-elips.png";
import todos from "./todos";
import squareNumber from "./squareNumber";
console.log(todos);

const  render = () => {
    console.log("ready");
}

console.log(`The square number of 36 is ${squareNumber(36)}`);

window.addEventListener('DOMContentLoaded',render);