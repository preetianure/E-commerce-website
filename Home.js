import React, { Fragment } from 'react';
import {Row,Container,Col,Button} from 'react-bootstrap';
const Home=()=>{
    return(
    <Fragment>
        <h1 style={{textAlign:'center'}}>Tours</h1>
        <Container>
      <Row style={{backgroundColor:'GrayText'}}>
        <Col>JuL16</Col>
        <Col>Charminar</Col>
        <Col>Hyderabad</Col>
        <Col>
        <button type="button" class="btn btn-success">BuyTickects</button>
        </Col>
      </Row>
      <Row style={{backgroundColor:"ButtonShadow"}}>
        <Col>july8</Col>
        <Col>tajMahal</Col>
        <Col>Delhi</Col>
        <Col>
        <button type="button" class="btn btn-Light">BuyTickets</button>
        </Col>
      </Row>
      <Row style={{backgroundColor:'GrayText'}}>
        <Col>june</Col>
        <Col>Golconda</Col>
        <Col>Hyderabad</Col>
        <Col>
        <button type="button" class="btn btn-success">BuyTickects</button>
        </Col>
      </Row>
      <Row style={{backgroundColor:"ButtonShadow"}}>
        <Col>may19</Col>
        <Col>thirupathi</Col>
        <Col>Andhra Pradesh</Col>
        <Col>
        <button type="button" class="btn btn-light">BuyTickets</button>
        </Col>
      </Row>
      <Row style={{backgroundColor:"GrayText"}}>
        <Col>may19</Col>
        <Col>Badrachalam</Col>
        <Col>Yadadri</Col>
        <Col>
        <button type="button" class="btn btn-success">BuyTickets</button>
        </Col>
      </Row>
    </Container>
    </Fragment>
    )
}
export default Home;