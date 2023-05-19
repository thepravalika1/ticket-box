import React from "react"
import successImg from '../assets/3.png'
import rightImg from '../assets/4.png'
import { Row,Col } from "react-bootstrap"

function Finalpage(){
    return(
        <div>
            <Row>
                <Col>
                <div style={{padding:48,justifyContent:'center',alignItems:'center',display:'flex'}}>
                    <div>
                        <img src={successImg} height={300}/>
                    </div>
                
                    <div>
                        <h5>Tickets Confirmed</h5>
                        <h6>Enjoy Your Movie</h6>
                    </div>
                </div>
                
                </Col>
                <Col>
                <div style={{padding:48,justifyContent:'center',alignItems:'center',display:'flex'}}>
                    <img src={rightImg} height={250}/>
                </div>
                
                </Col>
            </Row>
        </div>
    )
}

export default Finalpage