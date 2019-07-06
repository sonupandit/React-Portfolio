import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

class About extends Component{
    state = {

    }

    render(){
        return(
            <>
                <section className="section section-about clearfix">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <div className="content">
                                    <h1>This is About Page</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat autem corrupti aspernatur commodi, magni odit nemo natus omnis quaerat voluptatum.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default About;