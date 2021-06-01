import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;

    }
    return (
        <div className="d-flex row alert alert-success cart">
            <div className="col-4">
                <h3 className ="text-left">Course Purchased: <span className="badge badge-success">{cart.length}</span></h3>
                <h4 className ="text-left">Total Price: ${total}</h4>
            </div>
            <div className="ml-auto col-8">
                <h4 className ="text-left">Your Courses:</h4>
                <div className ="overflow-auto pannel">
                    {
                        cart.map(course =>
                            <div>
                                <p>{course.name} <strong> Price: </strong>${course.price}</p>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Cart;