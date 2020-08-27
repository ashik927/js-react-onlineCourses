import React from 'react';
import './CourseShow.css';
// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// fontawesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';

const CourseShow = (props) => {
    const { name, price, img, description, sector } = props.list;
    return (
    <Container>
       <Row>
       <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Department : {sector}</ListGroupItem>
                <ListGroupItem> Price : ${price}</ListGroupItem>
                
            </ListGroup>
            <Card.Body>
            <Button variant="primary" onClick={() => props.handleAddProduct(props.list)}><FontAwesomeIcon icon={faSignInAlt} /> Enroll Now</Button>
            </Card.Body>
        </Card>
        
    </Row>
</Container>
 
    );
};

export default CourseShow;