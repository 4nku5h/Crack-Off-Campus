import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
const custom_style = { backgroundColor: "#fafafa" };

function InformationComponent(props) {
    return (
        <div className="Information">
            <Card style={{ borderRadius: "10px" , padding:"20px"}}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>Information </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                {props.information_announcement.map((curr)=>{
                    return <p>{curr.infoText}</p>
                })}
                </ListGroup>
            </Card>
        </div>
    )
}

export default InformationComponent;