import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

const Notfound = () => {
        return(
            <>
                <section className="section section-contact clearfix">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <div className="content">
                                    <h1>Oops!! Page Not Found..</h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
}

export default Notfound;