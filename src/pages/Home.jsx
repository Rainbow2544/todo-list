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
  width: 50%;
`

const CategoryContainer = styled.div`
  display: flex;
  margin-top: 20px;
`

const Category = styled.p`
  margin-right: 13px;
`
const CategorySelect = styled.select`
  width: 15%;
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
  width: 60%;
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
  return (
    <Container>
      <Form>
        <DescriptionContainer>
          <Description>Description :</Description>
          <DescriptionInput></DescriptionInput>
        </DescriptionContainer>
        
        <CategoryContainer>
          <Category>Category :</Category>
          <CategorySelect>
            <CategoryOption></CategoryOption>
            <CategoryOption>CSS</CategoryOption>
          </CategorySelect>
        </CategoryContainer>

        <ContentContainer>
            <Content>Content :</Content>
            <ContentTextarea />
        </ContentContainer>
        <FormButtonArea>
          <Button>Submit</Button>
        </FormButtonArea>
        
      </Form>
      <TableContainer>
        <Button>Delete Selected</Button>
        <Table>
          <Row>
            <Checkbox type="checkbox"></Checkbox>
            <Th>Description</Th>
            <Th>Category</Th>
            <Th>Content</Th>
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