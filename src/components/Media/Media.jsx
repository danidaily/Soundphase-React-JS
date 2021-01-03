import React from 'react';
import {Card, Container, Col, Row, ListGroup} from "react-bootstrap";
import logo from "../Header/sound.png"
import s from "./Media.module.css"

const Media = (props) => {
    return (

        <div><img className={s.image}
                  src={"https://memegenerator.net/img/instances/69382201/confused-screaming.jpg"}
                  alt={"AAAAAAAAA"}/>
        </div>
        /*<Container>
            <Row>
                <Col md="9">
                    <Media className="m-5">
                        <img width={150}
                             className="mr-3"
                             src={logo}
                             alt={"Nene"}/>

                        <Media.Body>
                            <h5> Post</h5>
                            <p> lalalaaaaaAAALALALALALALALALALAL</p>
                        </Media.Body>
                    </Media>
                    <Media className="m-5">
                        <img width={150}
                             className={"mr-3"}
                             src={logo}
                             alt={"Nene"}/>

                        <Media.Body>
                            <h5> Post</h5>
                            <p> lalalaaaaaAAALALALALALALALALALAL</p>
                        </Media.Body>
                    </Media>
                    <Media className="m-5">
                        <img width={150}
                             className={"mr-3"}
                             src={logo}
                             alt={"Nene"}/>

                        <Media.Body>
                            <h5> Post</h5>
                            <p> lalalaaaaaAAALALALALALALALALALAL</p>
                        </Media.Body>
                    </Media>
                </Col>
                <Col md="3">
                    <h5 className={"text-center mt-5"}> Categories</h5>
                    <Card>
                        <ListGroup variant="flush">

                            <ListGroup.Item> Art</ListGroup.Item>
                            <ListGroup.Item> Films</ListGroup.Item>
                            <ListGroup.Item> Music</ListGroup.Item>
                            <ListGroup.Item> Street</ListGroup.Item>
                            <ListGroup.Item> House</ListGroup.Item>

                        </ListGroup>
                    </Card>
                    <Card className ="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>
                                Side widget
                            </Card.Title>
                            <Card.Text>
                                LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>*/
    );

}
export default Media;

