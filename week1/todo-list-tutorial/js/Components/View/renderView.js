import img1 from "../../../assets/top-left-elips.png";
import img2 from "../../../assets/bottom-right-elips.png";

const renderView = () => {
    const div = document.getElementById("app");
    div.innerHTML = view;
}

const view = ` <img
src="${img1}"
id="background-left"
alt="background"
/>
<img
src="${img2}"
id="background-right"
alt="background"
/>

<div class="wrapper">
<div class="todolist">
  <h1>WEB DESIGN STUDENT TO DO LIST</h1>
  <input type="text" id="todoInput" placeholder="What do you need to do today...." />
  <div id="todoBtn">
  <button id="createTodoBtn">Create To do</button>
  </div>
  <div class="list">
  </div>
  <!-- /.list -->
</div>
<!-- /.todolist -->
</div>
<!-- /.wrapper -->`;

export default renderView;