## Template 1

```js
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
  <div class="list">
  </div>
  <!-- /.list -->
</div>
<!-- /.todolist -->
</div>
<!-- /.wrapper -->`
```


# Template 2

```js

const todos = [
  {
    text: "Complete My Assessment",
    created: "Wed Jan 22 2020 07:02:0",
    completed: false
  },
  {
    text: "Complete My Assessment",
    created: "Wed Jan 22 2020 07:03:0",
    completed: false
  }
];

export default todos;

````
