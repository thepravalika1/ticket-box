

import React from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { Row,Col, Button } from "react-bootstrap"

const IMAGE_API='https://image.tmdb.org/t/p/w500'

const TIMINGS=['10:30 AM',"12:00 PM","3:30 PM","9:00 PM"]
function Movie(){
    const location=useLocation()
    const {title,overview,poster_path}=location.state
    const navigate=useNavigate()
    const [latLng,setLatLng]=useState({})
    const[theatres,setTheatres]=useState([])

    useEffect(()=>{
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position)=>{
               setLatLng({
                    lat:position.coords.latitude,
                    lng:position.coords.longitude
                })
            })
        }
    },[]);

    useEffect(()=>{
       if(Object.keys(latLng).length>0){
        
    
      const geoAPI=`https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:78.46950846249842,17.36355237982859,100000&bias=proximity:78.46950846249842,17.36355237982859&limit=20&apiKey=b0d8882cd0f14370bcc4312cd51c99e3`
      
      axios.get(geoAPI).then(res=>{
        const featuresArray=res.data.features;
        const names=[];
        featuresArray.map((feature)=>names.push(feature.properties.name))
        setTheatres(names)
        console.log(names)

      } 
        
    )}
    
    },[latLng]);
    
    return(
        <div>
            <Row>
                <Col style={{position:'sticky'}} >
                <div style={{padding:70,position:'static'}}>
                   <img style={{borderRadius:8,marginBottom:24}} src={IMAGE_API+poster_path} height={200} width={200}></img>
                     <h4>{title}</h4>
                
                    <div>
                    {overview}
                    </div>
                </div>
                </Col>
                <Col style={{marginLeft:'10rem'}}>
                   <div>
                   {theatres.map((theatre,index)=>{
                    return(
                        <div key={index} style={{marginBottom:20}} >
                            <div style={{marginBottom:20}}>
                                <h5>{theatre}</h5>
                               </div>
                               {TIMINGS.map((time)=>{
                                return<Button onClick={()=>{navigate('/select',{state:{title:title}})}} key={time} style={{marginRight:7}}>{time}</Button>
                               })} 
                        </div>
                    )
                   })}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Movie