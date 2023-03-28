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
const Textarea = styled.textarea`
 margin-bottom: -13px;
 margin-left: 7px;

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
            <label>Név</label>
            <Input type="text" placeholder="" name="name" required/>
            <label>Rendezvény dátuma</label>
            <Input type="date" placeholder="Rendezvény dátuma" name="date" required/>
            <label>Leírás</label>
            <Textarea placeholder="" cols="40" rows="2" required />
            <Button type="submit" required>Elküld</Button>
        </Form>
        {message && <Uzenet>{message}</Uzenet>}
        <Footer></Footer>
      </>
    )
  }
  
  export default Idopont