import { useEffect, useState } from "react";
import TodoContainer from "../components/TodoContainer";
import "./Home.css";
import { getTodoList, saveTodoList } from '../SessionStorage';

function Home() {
  const todosFromLocal = getTodoList();
  const [todoList, setTodoList] = useState(todosFromLocal);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  

  const [formData, setFormData] = useState({
    description:"",
    category:"",
    content:""
  });

  const {
    description,
    category,
    content,
  } = formData;

  useEffect(() =>{
    const todos = getTodoList();
    setTodoList(todos);
    updatedSelectedCheckboxes()
  },[]);

  function updatedSelectedCheckboxes(){
    const newSelectedCheckboxes = {};
    todoList.forEach((todo, index) => {
      newSelectedCheckboxes[index] = false;
    });
    setSelectedCheckboxes(newSelectedCheckboxes);
  }
 
 
  function handleChange(event){
    let updatedValue = event.target.value;
  
    setFormData((preState)=>({
      ...preState,
      [event.target.id]: updatedValue
  }));
  }
 
  function removeTodo(index){
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    saveTodoList(newTodoList);
    updatedSelectedCheckboxes()
  }

  function selectedAllChangeHandle(event){
    const isChecked = event.target.checked;
    const newSelectedCheckboxes = {};
    todoList.forEach((todo, index) => {
      newSelectedCheckboxes[index] = isChecked;
    });
    setSelectedCheckboxes(newSelectedCheckboxes);
  }

  function removeSelectTodos(){
    const todoKeepArr = todoList.filter((todo, index) => {
      return !selectedCheckboxes[index];
    });
    setTodoList(todoKeepArr);
    saveTodoList(todoKeepArr);
    updatedSelectedCheckboxes();
  }

  function handleSubmit(event){
    event.preventDefault();
    //add todo
    const newTodoList = [...todoList, formData];
    setTodoList(newTodoList);
    saveTodoList(newTodoList);
    updatedSelectedCheckboxes();
    
  }
  
  return (
    <div className="container">
      <form id="todoForm" onSubmit={handleSubmit}>
        <div id="desContainer">
          <p>Description:</p>
          <input  
            type="text"
            id="description"
            value={description}
            onChange={handleChange}
            required
          />
        </div>

        <div id="categoryContainer">
          <p id="categoryText">Category:</p>
          <select
            id="category"
            value={category}
            onChange={handleChange}
            required
          >
            <option></option>
            <option>css</option>
          </select>
        </div>

        <div id="contentContainer">
            <p id="contentText">Content:</p>
            <textarea 
              type="text"
              id="content"
              value={content}
              onChange={handleChange}
              required
            />
        </div>
        <div id="formButtonArea">
          <button className="btn" onSubmit={handleSubmit} 
          >Submit</button>
        </div>
      </form>

      <div id="tableContainer">
        <button className="btn"
          onClick={removeSelectTodos} 
        >Delete Selected</button>
        <table cellSpacing="0" cellPadding="0">
          <tr id="headerRow">
            <th>
              <input 
                className="selectedCheckBox"
                type="checkbox" 
                onChange={selectedAllChangeHandle}
              />
            </th>
            <th>Description</th>
            <th>Category</th>
            <th>Operate</th>
          </tr>
          
            {todoList.map((todo,index)=>(
                <TodoContainer 
                  todo={todo}
                  index={index}
                  removeTodo={removeTodo}
                  selectedCheckboxes={selectedCheckboxes} 
                  setSelectedCheckboxes={setSelectedCheckboxes}
                /> 
            ))}
        </table>  
      </div>  
    </div>
  )
}

export default Home;

