import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
const image = require("../images/petrik.jpg")
const Tartalom = styled.div`
    display:block;
    margin:10px;
    font-size: 2vh;
    text-shadow: 0px 0px 1px black;
    text-align: justify;
`
const Kep = styled.img`

  float: right;
  margin: 20px;
  width: 20%;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 0px 4px 8px black;
`
const Tapasztalat = () => {
    return (
      <>
      <Navbar/>
      <Kep src={image}></Kep>
      <Tartalom>
        Pro-bono bulik
        <ul>
            <li>Csibeavató, 2021. 08. 31.</li>
            <li>Karácsonyi bál, 2021. 12. 22.</li>
            <li>Farsangi mulatság, 2022. 02. 20.</li>
        </ul>
        Professzionális bulik
        <ul>
            <li>Tanárkarácsony, 2021. 12. 20.</li>
            <li>Ballagás, 2022. 04. 30.</li>
        </ul>
        </Tartalom>
  

      <Footer/>
      </>
    )
  }
  
  export default Tapasztalat