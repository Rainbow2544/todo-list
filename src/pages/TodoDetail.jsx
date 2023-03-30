import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getTodoList } from '../SessionStorage';

const Container = styled.div`
`
const TextContainer = styled.div`
  margin-left: 40px;
`
const Row = styled.div`
  display: flex;
`

const Span = styled.span`
  font-weight: 600;
  margin-right: 5px;
`
const Text = styled.p``

function TodoDetail() {
  const params = useParams();
  const navigate = useNavigate();

  const index = params.todoId;
  const todoList = getTodoList();
  const todo = todoList[index];
  return (
    <Container>
      <TextContainer>
        <Row>
          <Span>Description: </Span>
          <Text>{todo.description}</Text>
        </Row>
        <Row>
          <Span>Category: </Span>
          <Text>{todo.category}</Text>
        </Row>
          
        <Row>
          <Span>Content: </Span>
          <Text>{todo.content}</Text>
        </Row>
      </TextContainer>
      <button 
        className="btn"
        onClick={() => navigate("/todo")}
      >Back</button>
      
        
    </Container>
  )
}

export default TodoDetail;