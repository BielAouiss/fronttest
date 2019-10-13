import React, { Component,useState } from 'react'
import { Card, Row, Container, Col, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';


 function handleReserver(id){
    console.log(id)
} 

function Hotel() {

     
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const allHotelsReducer = useSelector(state => state.allHotelsReducer);
    return (
        <div className="container grey-container">
            {allHotelsReducer.map((hotel) =>
                <Container
                key={hotel.id}
                ><Card 
                    key="{ hotel.id }"
                    className="hotel-element"
                ><Row><Col sm={4}>
                    <Card.Img variant="top" src={hotel.imageUrl} />
                </Col><Col sm={8}>
                        <Card.Body>
                            <div className="details">
                                <Card.Title className="hotel-name">{hotel.name}</Card.Title>
                                <span className="hotel-price"> {hotel.price} </span>
                            </div>
                            <Card.Text className="hotel-description">
                                {hotel.description}
                            </Card.Text>
                        
                            <Button variant="primary" onClick={handleShow}>Reserve</Button>
          
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
                        </Card.Body></Col></Row>
                </Card></Container> 
            )}

        

        </div>


    )
}


function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


 
export default Hotel
