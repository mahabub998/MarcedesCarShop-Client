import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./EventShow.css";
import { Link } from 'react-router-dom';

const EventsShow = (props) => {
  const { imageUrl, name, price,_id } = props.event;

  //  const deleteEvent = id => {

  //  }
  return (
    <div className="col-md-4 d-flex justify-content-around">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Mercedes-Benz offers a full range of passenger, light commercial
              and heavy commercial equipment.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <div>
                <h4> {price}</h4>
              </div>
              <div>
             <Link to={`/events/${_id}`}><Button variant="primary">Go somewhere</Button></Link>   
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default EventsShow;
