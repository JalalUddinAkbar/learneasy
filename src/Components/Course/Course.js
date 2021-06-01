import React from 'react';
import "./Course.css";

const Course = (props) => {
    const { name, price, photo, provider } = props.course;
    
    return (
        <div className="courses shadow p-3 mb-5 bg-body rounded ">
            <img src={photo} className="mw-100" alt="" />
            <div className = "d-flex ">
                <div>
                    <h2>{name}</h2>
                    <p>{provider}</p>
                    <h3>Price: ${price}</h3>
                </div>
                <div>
                    <button onClick={()=> props.addToCart(props.course)} className="btn btn-success justify-content-end">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;