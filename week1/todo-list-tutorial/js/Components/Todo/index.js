const Todo = (text, id) => `<div class="outer-item" id="outer-item-${id}" >
  <div class="to-do-item">
  <p> ${text} </p>
  <span class="close" data-outer-item="${id}" >  X </span>
  </div>
  <!-- /.to-do-item -->
  </div>
  <!-- /.outer-item -->`;
export default Todo;