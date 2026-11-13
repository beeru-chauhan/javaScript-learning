const todoList=[{
  name:'make dinner',
dueDate:'2026-11-13'},
{
  name: 'watch tv',
dueDate:'2026-11-14'}];
rendertodo();
function rendertodo()
{
let todoListHTML='';
for(let index=0; index<todoList.length; index++)
{
  const todoObject=todoList[index];
  const name=todoObject.name;
  const dueDate =todoObject.dueDate;
  todoListHTML+=`<p>
  ${name}  ${dueDate}
  <button onclick="
  todoList.splice(${index},1);
  rendertodo();
  ">delete</button>
  </p>`;

}
console.log(todoListHTML);
document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}
function addTodo()
{
const inputElement=document.querySelector(".js-name-input");
const name=inputElement.value;
const dateInputElement=document.querySelector('.js-due-date-input');
const date=dateInputElement.value;
todoList.push(
  {name,
  dueDate});
console.log(todoList);
inputElement.value="";
rendertodo();
}