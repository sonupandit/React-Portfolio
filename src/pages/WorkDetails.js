import React, { Component } from 'react';
import axios from "axios";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

class WorkDetails extends Component{
    state = {
        wdetails: {}
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        var $this = this;
        axios.get(`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`)
        .then(function (response) {
            let $wdetails = response.data;
            $this.setState({
                wdetails: $wdetails
            });
          console.log($wdetails);
        })
        .catch(function (error) {
            $this.props.history.push("/Notfound")
            // handle error
           console.log($this.props);
        })
    }

    render(){
        const details = this.state.wdetails;
        return(
            <>
                <section className="section section-home clearfix">
                    <Container>
                        <Row>
                            <Col xs="12" md="6">
                                <div className="content">
                                    <h1>{details["title"]}</h1>
                                    <img src={details["url"]} alt=""/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default WorkDetails;