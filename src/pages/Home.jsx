import { useEffect, useState } from "react";
import TodoContainer from "../components/TodoContainer";
import "./Home.css";
import { getTodoList, saveTodoList } from '../SessionStorage';

function Home() {
  const [todoList, setTodoList] = useState([]);

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
  },[]);
 
 
  function handleChange(event){
    let updatedValue = event.target.value;
  
    setFormData((preState)=>({
      ...preState,
      [event.target.id]: updatedValue
  }));
  }

  function addTodo(){
    setTodoList([...todoList,formData]);
    saveTodoList([...todoList,formData]);
  }

  function removeTodo(index){
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    saveTodoList(newTodoList);
  }

  function removeSelectTodos(index){
    setTodoList([]);
  }

  function handleSubmit(event){
    event.preventDefault();
    addTodo();
    console.log("new",todoList);
    
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
          onClick={() => removeSelectTodos()} 
        >Delete Selected</button>
        <table>
          <tr>
            <input 
            type="checkbox" 
            disabled
            />
            <th>Description</th>
            <th>Category</th>
            <th>Operate</th>
          </tr>
          
            {todoList.map((todo,index)=>(
                <TodoContainer 
                  todo={todo}
                  index={index}
                  removeTodo={removeTodo}
                /> 
            ))}
            
          
        
        </table>
        
      </div>
      
    </div>
  )
}

export default Home;

