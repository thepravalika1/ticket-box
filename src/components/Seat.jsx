import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Row,Col, Button } from "react-bootstrap";

export default function Seat(){
const location=useLocation();
const {title}=location.state
const[seatsMatrix,setSeatsMatrix]=useState([])
const[selectedSeats,setSelectedSeats]=useState([])
const navigate=useNavigate()

const handleSelectedSeats=(newSeat)=>{
    setSelectedSeats([...selectedSeats,newSeat])
}

const createSeats=()=>{
    let totalRows=5;
    let numberOfSeatsInRow=8;
    let tempSeats=[];
    let row=0;
    let ch='A'
    while(row<totalRows){
        let col=1;
        let rowArr=[];
        while(col<numberOfSeatsInRow){
            rowArr.push(ch+col)
            col++;
        }
        tempSeats.push(rowArr)
        row++;
        ch=String.fromCharCode(ch.charCodeAt(0)+1);
    }
    setSeatsMatrix(tempSeats)
}

useEffect(()=>{
    createSeats();
},[])

    return(
        <div style={{padding:40}}>
           <div>
            <h3 className="d-inline-block">{title}</h3>
            <div style={{marginLeft:100}} className="d-inline-block">Screen this side</div>
           </div>
           <div style={{marginTop:40}}>
              {seatsMatrix.map((seatArray)=>{
                return(
                    <Row style={{marginBottom:20}}>
                        {seatArray.map((seat)=>{
                            let seatIsSelected=selectedSeats.indexOf(seat)>-1
                            return <Col>
                                        <Button  style={{backgroundColor:seatIsSelected?'green':'red',border:'none'}} onClick={()=>handleSelectedSeats(seat)}>{seat}</Button>
                                        
                                    </Col>
                            })
                        }
                    </Row>
                    
                )
               
                
              })}
            
           </div>
           <div style={{marginTop:50}}>
            {
                selectedSeats.length>0?
                <div>
                    {selectedSeats.map((seat,index)=>{
                        return <span key={index} style={{marginRight:5}}>{seat}</span>
                    })}
                    Seats Selected
                    <div>
                        <h4>Total: Rs.{selectedSeats.length*200}.00</h4>
                        <Button onClick={()=>navigate('/final')}>CheckOut</Button>
                    </div>
                </div>
                
                :<div>No Seats Selected</div>
            }

           </div>
        </div>
    )
}