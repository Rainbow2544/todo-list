import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Row = styled.tr`
    min-height: 40px;
    background: ${(props)=> 
      props.index % 2 === 0 && "yellow"
      };
`

const Checkbox = styled.input`
  margin-top: 10px; 
`
const Td = styled.td``

const DeleteButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 17px;
  color: red;
  background: none;
`

function TodoContainer({ todo, index, removeTodo,selectedCheckboxes,setSelectedCheckboxes}) {
  const navigate = useNavigate();
  
  return (
    <Row key={index} index={index}>
      <Td>
        <Checkbox type="checkbox"
          checked={selectedCheckboxes[index] || false}
          onChange={(event) => {
            const isChecked = event.target.checked;
            setSelectedCheckboxes((prevState) => ({
              ...prevState,
              [index]: isChecked,
            }));
          }}
        />
      </Td>
      <Td
        onClick={() => navigate(`/todo/${index}`)}
      >{todo.description}</Td>
      <Td
        onClick={() => navigate(`/todo/${index}`)}
      >{todo.category}</Td>
      <Td>
        <DeleteButton
          onClick={() => removeTodo(index)}
        >Delete</DeleteButton>
      </Td>
      
    </Row>  
  )
}

export default TodoContainer;