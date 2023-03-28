import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
const image = require("../images/dj.jpg")
const Tartalom = styled.div`

    margin:10px;
    font-size: 2vh;
    text-align: center;
    text-shadow: 0px 0px 1px black;
`

const Kep = styled.img`

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 0px 4px 8px black;
`
const Fooldal = () => {
    return (
      <>
      <Navbar/>
      <Tartalom> Üdvözöllek DJ Petrik weboldalán! Válassz a fenti lehetőségek közül!  </Tartalom>
      <Kep src={image}/>
         
       

      <Footer/>
      </>
    
    )
  }
  
  export default Fooldal