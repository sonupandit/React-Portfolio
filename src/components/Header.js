import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

class Header extends Component {
    state = {  }
    render() {
        return (
            <>
                <div className="header-main">
                    <Container>
                        <Row className="flex-nowrap align-items-center">
                            <Col xs="auto">
                                <Link to="" className="brand">
                                    <h3>Logo</h3>
                                </Link>
                            </Col>
                            <Col>
                                <nav className="main-nav">
                                    <ul className="list-unstyled nav justify-content-end">
                                        <li>
                                            <Link className="nav-link" to="/work">Work</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
         );
    }
}

export default Header;