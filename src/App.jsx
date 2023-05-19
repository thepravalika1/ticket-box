import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar } from 'react-bootstrap';
import Login from './components/Login';
import Img from './assets/2.png'
import './App.css'
import Signup from './components/Signup';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import Seat from './components/Seat';
import Finalpage from './components/Finalpage';
import { Button } from 'react-bootstrap';



function App() {

  const[user,setUser]=useState('');
  const navigate=useNavigate()


  useEffect(()=>{
    const userEmail=localStorage.getItem('userEmail')
    if(userEmail){
      setUser(userEmail)
    }
  },[user])

 

  const handleLogOut=()=>{
    localStorage.removeItem('userEmail')
  setUser(null)
    navigate('/')
  }
  return (
    
      <div>
        <Navbar bg="light" variant="light" style={{position:'sticky'}}>
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={Img}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Ticket Box
            </Navbar.Brand>
           {user && <Button onClick={()=>handleLogOut()} className='logout'>Logout</Button>}
          </Container>
        </Navbar>
        <Routes>
        
        <Route path="/" element={<Login setUser={setUser} />}/>
        <Route path="/signup" element={<Signup setUser={setUser} />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/movie/:id" element={<Movie />}/>
        <Route path="/select" element={<Seat />}/>
        <Route path="/final" element={<Finalpage />}/>
        </Routes>
        
        
      </div>
  )
}

export default App

