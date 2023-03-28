import styled from 'styled-components'
import { BrowserRouter as  Route, Link } from 'react-router-dom';

const Container = styled.div`
padding: 5px; 
   display: flex;
   color: #000000;
   background-color: #94ff76;
   height: 45px;
   border-bottom: 2px solid #000000;
   align-items:center;
   font-weight:bold;
   justify-content: center;
`
const NavbarLink = styled(Link)`
font-size: 2vh;
align-items: center;
margin: 20px;
text-decoration: none;
cursor: pointer;
&:visited {
  color: #000000;
}
`;
const Navbar = () => {
    return (
      <>
        <Container>
          <NavbarLink to="/">FŐOLDAL </NavbarLink> 
          <NavbarLink to="/tapasztalat"> TAPASZTALAT </NavbarLink> 
          <NavbarLink to="/idopont"> IDŐPONT </NavbarLink>
        </Container>
      </>
    )
  }
  
  export default Navbar
  