import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import fir from "../Assets/1.jpg"
import sec from "../Assets/2.jpg"
import thr from "../Assets/3.jpg"
import fou from "../Assets/4.jpg"
import fiv from "../Assets/5.jpg"

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"
                         src={fir}
                         alt="Wild"/>
                    <Carousel.Caption>
                        <h3> Wild nature</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                         src={sec}
                         alt="Wild"/>
                    <Carousel.Caption>
                        <h3> Wild nature</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                         src={thr}
                         alt="Wild"/>
                    <Carousel.Caption>
                        <h3> Wild nature</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                         src={fou}
                         alt="Wild"/>
                    <Carousel.Caption>
                        <h3> Wild nature</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                         src={fiv}
                         alt="Wild"/>
                    <Carousel.Caption>
                        <h3> Wild nature</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        );
    }
}

export default CarouselBox;