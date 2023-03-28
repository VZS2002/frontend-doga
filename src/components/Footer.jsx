import styled from 'styled-components'

const Container = styled.div`
    text-align:center;
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 15x;
    background-color:white;
    height:25px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
   
`

const Footer = () => {
    return (
      <>
        <Container> Készítette: <b>Varga Zsigmond</b> </Container>
      </>
    )
  }
  
  export default Footer