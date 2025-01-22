import React,{Fragment,useState} from 'react';
import {Button, Card, Container,Row,Col} from 'react-bootstrap';
const Contact=(props)=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [number,setNumber]=useState('');
    const ExecuteName=(event)=>{
        setName(event.target.value)
    }
    const ExecuteEmail=(event)=>{
        setEmail(event.target.value)
    }
    const ExecuteNumber=(event)=>{
        setNumber(event.target.value)
    }
    const EventHandler=(event)=>{
        event.preventDefault();
        const expenceData={
            Name:name,
            Email:email,
            numbers:number
        }
        props.onAddDetails(expenceData);
    }
    return(
        <Fragment>
            <Container>
                <Row>
                    <Col xs='9'>
                    <Card>
                        <Card.Body>
                           <form onSubmit={EventHandler}>
                             <div>
                                <label>Name</label>
                                <input type='text' onChange={ExecuteName} value={name}/>
                                <br/>
                                &nbsp;
                                </div>
                               <div>
                                <label>Email</label>
                                <input type='email' onChange={ExecuteEmail} value={email}/><br/>
                                &nbsp;
                                </div>
                                <label>phone-no</label>
                                <input type='number' onChange={ExecuteNumber} value={number}/><br/>
                                <button type='submit'>Submit</button>
                            </form> 
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </Fragment>

    )

}
export default Contact;