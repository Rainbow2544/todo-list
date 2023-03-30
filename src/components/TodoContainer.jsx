import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Row = styled.tr`
    display: flex;
    justify-content: space-around;
    text-align: center;
    background: ${(props)=> 
      props.index % 2 === 0 && "yellow"
      };

`

const Checkbox = styled.input`
  margin: 0px 20px;
`
const Td = styled.td`
  
  margin: 0px 30px;
`

const DeleteButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 17px;
  color: red;
  background: none;
`

function TodoContainer({ todo, index, removeTodo}) {
  const navigate = useNavigate();
  console.log("you",index,index % 2);
  return (
 
    <Row key={index} index={index}>
      <Checkbox type="checkbox"/>
      <Td
        onClick={() => navigate(`/todo/${index}`)}
      >{todo.description}</Td>
      <Td
        onClick={() => navigate(`/todo/${index}`)}
      >{todo.category}</Td>
      <DeleteButton
        onClick={() => removeTodo(index)}
      >Delete</DeleteButton>
    </Row>  
  )
}

export default TodoContainer;