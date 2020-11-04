import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

import {Row, Col,ListGroup} from "react-bootstrap";
import axios from "axios";

const DishDetails = () => {
    const{ id }= useParams()
    const [dish, setDish]=useState({})
    useEffect(()=> {
        axios.get(`http:/api/dishes/${id}`).then(({data}) =>setDish(data))

    }, [id])
    return (
        <Row>
            <Col lg={7}>
                <img src={dish.image} alt="pic" className="w-100"/>

            </Col>
            <Col lg={5}>
                <ListGroup variant="flush">
                    <ListGroup.Item><h2>{dish.name}</h2></ListGroup.Item>
                    <ListGroup.Item><h5>Description:</h5>{dish.description}</ListGroup.Item>
                    <ListGroup.Item><h5>Price:</h5>{dish.price}</ListGroup.Item>

                </ListGroup>
            </Col>

        </Row>
    );
};

export default DishDetails;