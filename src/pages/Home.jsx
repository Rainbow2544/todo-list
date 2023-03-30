import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 50px;
`
const Form = styled.form`
  flex: 1;
  height: 50px;
  margin-left: 40px;
`

const Description = styled.p``

const DescriptionContainer = styled.div`
  display: flex;
`

const DescriptionInput = styled.input`
  min-width: 50%;
  
`

const CategoryContainer = styled.div`
  display: flex;
  margin-top: 20px;
`

const Category = styled.p`
  margin-right: 13px;
`
const CategorySelect = styled.select`
  min-width: 15%;
`

const CategoryOption = styled.option``

const ContentContainer = styled.div`
  display: flex;
  margin-top: 20px;
`
const Content = styled.p`
  margin-right: 23px;
`


const ContentTextarea = styled.textarea`
  min-width: 60%;
`
const FormButtonArea = styled.div`
  margin-top: 30px;
  margin-left: -20px;
`

const Button = styled.button`
  background: #0099ff;
  color: white;
  padding: 5px;
  cursor: pointer;
  &:hover{
    color: gray;
  }
`

const TableContainer = styled.div`
  flex: 3;
`
const Table = styled.table`
  margin-top: 20px;
  width:60%;
  border: 1px solid;
`
const Row = styled.tr`
  display: flex;
  justify-content: space-around;
`

const Checkbox = styled.input``

const Th = styled.th``

const Td = styled.td``



function Home() {
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
 
  function handleChange(event){
    let updatedValue = event.target.value;
  
    setFormData((preState)=>({
      ...preState,
      [event.target.id]: updatedValue
  }));
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("event.target.value",formData);
    
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <DescriptionContainer>
          <Description>Description:</Description>
          <DescriptionInput 
            type="text"
            id="description"
            value={description}
            onChange={handleChange}
            required
          />
          
        </DescriptionContainer>

        <CategoryContainer>
          <Category>Category:</Category>
          <CategorySelect
            
            id="category"
            value={category}
            onChange={handleChange}
            required
          >
            <CategoryOption></CategoryOption>
            <CategoryOption>CSS</CategoryOption>
          </CategorySelect>
        </CategoryContainer>

        <ContentContainer>
            <Content>Content:</Content>
            <ContentTextarea 
              type="text"
              id="content"
              value={content}
              onChange={handleChange}
              required
            />
        </ContentContainer>
        <FormButtonArea>
          <Button onSubmit={handleSubmit} 
          >Submit</Button>
        </FormButtonArea>
        
      </Form>
      <TableContainer>
        <Button>Delete Selected</Button>
        <Table>
          <Row>
            <Checkbox type="checkbox"></Checkbox>
            <Th>Description</Th>
            <Th>Category</Th>
            <Th>Operate</Th>
          </Row>
          <Row>
            <Checkbox type="checkbox"></Checkbox>
            <Td>Description</Td>
            <Td>Category</Td>
            <Td>Content</Td>
          </Row>
        </Table>

      </TableContainer>
        
    </Container>
  )
}

export default Home;