import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import  { useState } from 'react';

const Form = styled.form`
   margin:20px;
   text-align: center;
`
const Input = styled.input`
    padding: 8px; 
    margin: 10px;
`

const Uzenet = styled.p`
    margin:10px;
    text-align: center;
   
`

const Button = styled.button`
padding:8px;
margin:10px;
`
const Idopont = () => {
const [message, setMessage] = useState('');
const handleSubmit = (event) => {
event.preventDefault();
setMessage('Köszönjük a megkeresését!');
}
    return (
      <>
      <Navbar></Navbar>
        <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Név" name="name" required/>
            <Input type="date" placeholder="Rendezvény dátuma" name="date" required/>
            <Input type="text" placeholder="Leírás" name="info" required/>
            <textarea placeholder="Leírás" cols="40" rows="2" required ></textarea>
            <Button type="submit" required>Elküld</Button>
        </Form>
        {message && <Uzenet>{message}</Uzenet>}
        <Footer></Footer>
      </>
    )
  }
  
  export default Idopont