import React, { Component } from 'react'
import { Card, Row,Container ,Col, Button } from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';

class Hotel extends Component {
  
    constructor(props) {
        super(props)
       

        this.state = {
                 
        }
    }

     allhotels=useSelector(state => state.allHotelsReducer);


    render() {
      
        return (
          <div>
          {
            allhotels.map((hotel)=>
            <div>
            
                     
<Container><Card ><Row><Col sm={4}>
                    <Card.Img variant="top" src={hotel.imageUrl}/>
                </Col><Col sm={8}>
                        <Card.Body>
                            <Card.Title>{hotel.name}</Card.Title>
                            <Card.Text>
                            {hotel.description}
                         </Card.Text>
                            <Button onClick={this.showModal} variant="primary">Reserve</Button>
                        </Card.Body></Col></Row>
                </Card></Container>
                </div>

          )}
          </div>  
        )
    }
}

export default Hotel
