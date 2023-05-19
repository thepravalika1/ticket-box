import React from "react"
import { Container,Row,Col } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { Form,Button } from "react-bootstrap"
import { useState } from "react"
import LoginImg from '../assets/1.png'
import { Link } from "react-router-dom"
import '../App.css'
import { useNavigate } from "react-router-dom"



export default function Signup({setUser}){
    const navigate=useNavigate()
    const [email,setEmail]=useState('pravalika123@gmail.com')
    
    const handle=()=>{
        let e=localStorage.getItem('userEmail')
        localStorage.setItem('userEmail',email)
        setUser(email)
        if(e<=0){
            alert('please register')
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
                        <Card style={{width:'22rem',padding:7}}>
                            <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control value='12345' type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control value='12345' type="password" placeholder="Confirm Password" />
                                </Form.Group>
      
                                <Button variant="primary" type="submit" className="login-btn" onClick={()=>{
                                    handle()
                                    handleSubmit()} }>
                                 Sign up
                                </Button>
                            </Form>
                            <div style={{display:'flex',marginTop:25,justifyContent:'center'}}>Already have an account? Please <Link to='/' style={{marginLeft:'5px'}}>login</Link> </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            

        </div>
    )
}