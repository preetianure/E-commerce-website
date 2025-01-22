import React,{Fragment,useContext} from 'react';
import { Card, Container,Row,Col,Figure, Button } from 'react-bootstrap';
import CartContext from './store/CartContext';
import { Link } from 'react-router-dom';
import AddCart from './AddCart';
import Cart from './Cart'
import ProductDetails from './Router/ProductDetails';
let productsArr=[
    {

        title:'Album 1',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity:1,
        
        id:"s1"
        },
        
        {
        
        title: 'Album 2',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity:1,
        id:"s2"
        },
        
        {
        
        title: 'Album 3',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity:1,
       id:"s3"
        },
        
        {
        
        title: 'Album 4',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
       
        quantity:1,
        
        id:"s4"
        }
]
const Products=(props)=>{
    const Cartcntx=useContext(CartContext)
    
    let List=productsArr.map(item=><li key={item.id} >
        <Container>
                <Row>
                    <Col xs={7}>
                        <Card>
                            <Card.Body><h2>
                                <Link to={`/home/${item.id}`}>{item.title}</Link>
                            </h2>
    <h6 style={{textAlign:'revert'}}>${item.price}</h6><Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={item.imageUrl}
      />
      </Figure>
      <AddCart item={item}/>
      </Card.Body>
      
                        </Card>
                    </Col>
                </Row>
            </Container>
    </li>)
        return(
       <Fragment>
        
            <h2 style={{textAlign:"center"}}>Music</h2>   
           <div>{List}</div>
        </Fragment>
    ) 
}
export default Products;