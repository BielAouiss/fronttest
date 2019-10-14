import React, { Component } from 'react'
import { Card, Row, Container, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';


function Panier() {
    const allHotelsReducer = useSelector(state => state.allHotelsReducer);
    return (
        <div className="container grey-container">
             <p> <b>Panier : </b></p>
            {allHotelsReducer.map((hotel) =>
                <Container
                key={hotel.id}
                >
                   
                    <Card 
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
                             
                        </Card.Body></Col></Row>
                </Card></Container> 
            )}

        

        </div>


    )
}


export default Panier
