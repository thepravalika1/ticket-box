import React, { useState } from "react"
import { Container,Row,Col } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { Form,Button } from "react-bootstrap"
import LoginImg from '../assets/1.png'
import { Link,useNavigate } from "react-router-dom"


import '../App.css'
 

function Login({setUser}){
    const[email,setEmail]=useState('pravalika@123.com')
 const navigate=useNavigate();

 
 const handleLogin=()=>{
    localStorage.setItem('userEmail',email)
    let e=email.length
    setUser(email)
    if(e<=0){
        alert('please enter email and password')
        navigate('/')
    }
    else{
    navigate('/home')
    }
 }
 


    return(
        <div className='auth-container'>
            <Container>
                <Row>
                    <Col className="auth-inner-container">
                        <img src={LoginImg} height={500} width={300} />
                    </Col>
                    <Col className="auth-inner-container">
                        <Card style={{width:'22rem',padding:10}}>
                            <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control  type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control value="12345" type="password" placeholder="Password" />
                                </Form.Group>
      
                                <Button  variant="primary" type="submit" className="login-btn" onClick={()=>{
                                    
                                    handleLogin()}}>
                                 Login
                                </Button>
                            </Form>
                            <div style={{display:'flex',marginTop:25,justifyContent:'center'}}>New here? Please <Link to='/signup' style={{marginLeft:8}}>signup</Link></div>


                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
            

        </div>
    )
}
export default Login;