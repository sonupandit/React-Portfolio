import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

class Home extends Component{
    state = {

    }

    render(){
        return(
            <>
                <section className="section section-home clearfix">
                    <Container>
                        <Row className="justify-content-end">
                            <Col xs="12" md="6">
                                <div className="content">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat autem corrupti aspernatur commodi, magni odit nemo natus omnis quaerat voluptatum.</p>
                                    <Link to="/work">WORK</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default Home;