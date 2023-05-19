import React from "react";
import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "react-bootstrap"
import '../App.css'
import { useNavigate } from "react-router-dom";
const MOVIE_API='https://api.themoviedb.org/3/movie/popular?api_key=c7061ec042afaea1d22209cdb5360294&language=en-US&page=1'
const IMAGE_API='https://image.tmdb.org/t/p/w500'


function Home(){
    const [movies,setMovies]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(MOVIE_API).then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results)
        })

    },[])

    useEffect(()=>{
        const user=localStorage.getItem('userEmail');
        if(!user){
          navigate('/')
        }
      })

    
    return(
        <div className="cards" style={{padding:20}}>
            {movies.map(movie=>{   
            return(
                <div key={movie.id}>
                {/* <Card onClick={()=>handleClick(movie.id)} style={{width:'22rem',padding:20,height:250,overflow:'hidden',margin:10}}> */}
                <Card onClick={()=>navigate(`/movie/${movie.id}`,{state:movie})} style={{width:'22rem',margin:'0.5rem',padding:20,height:'auto',overflow:'hidden'}}>
                   <Card.Img src={IMAGE_API+movie.poster_path}  width={100}></Card.Img>
                   <Card.Text>{movie.title}</Card.Text>
                </Card>
                </div>
            )
            })}
            

        </div>


        
    )
}
export default Home;



