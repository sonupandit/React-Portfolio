import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

class Work extends Component{
    state = {
        workdata: []
    }

    componentDidMount(){
        console.log(this.props.match.url);
        var $this = this;
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(function (response) {
            let $workData = response.data.slice(0, 10);
            $this.setState({
                workdata: $workData
            });
            console.log($workData);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {

        });
    }

    render(){
        const {workdata} = this.state;
        return(
            <>
                <section className="section section-home clearfix">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <div className="content">
                                    <h1>This is Work Page</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat autem corrupti aspernatur commodi, magni odit nemo natus omnis quaerat voluptatum.</p>
                                </div>
                            </Col>
                        </Row>

                        <div className="clearfix title">
                            <h2>Lorem Projects</h2>
                        </div>
                        <Row className="">
                            {
                                workdata.map((data)=>(
                                    <Col key={data.id} xs="12" md="3">
                                        <div className="projectbox">
                                            <Link to={`${this.props.match.url}/${data.id}`}>
                                                <img className="img-fluid" src={data.thumbnailUrl}/>
                                            </Link>
                                            <div className="project-$(target).insertBefore(selector);">
                                                <h6>{data.title}</h6>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }

                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default Work;