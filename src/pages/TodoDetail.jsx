import styled from "styled-components";

const Container = styled.div``

const Span = styled.span``
const Text = styled.p``

function TodoDetail({description, category, content}) {
  return (
    <Container>
        <Span>Description:</Span>
        <Text>{description}</Text>
        <Span>Category:</Span>
        <Text>{category}</Text>
        <Span>Content:</Span>
        <Text>{content}</Text>
    </Container>
  )
}

export default TodoDetail;