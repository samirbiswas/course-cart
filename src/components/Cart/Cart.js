import React from 'react';
import './Cart.css';
import { Card, ListGroup } from 'react-bootstrap';

const Cart = (props) => {

    const cart =props.cart;
    const totalPrice= cart.reduce((total,b)=> total += b.price,0);

    return (
        <div className="position">

            <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>মোট কোর্স : {cart.length}</ListGroup.Item>
                <ListGroup.Item>মোট খরচ  : {totalPrice} টাকা</ListGroup.Item>
            </ListGroup>
            </Card>
           
        </div>
    );
};

export default Cart;