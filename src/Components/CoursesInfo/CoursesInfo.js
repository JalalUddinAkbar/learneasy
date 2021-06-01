import React, { useState } from 'react';

import fakedata from '../../fakedata/fake';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import Header from '../Header/Header';
import "./CoursesInfo.css";

const CoursesInfo = () => {
    const [courses, setCourses] = useState(fakedata)
    const [cart, setCart] = useState([])


    const addToCart = (courses) => {
        const newCart =[...cart, courses];
        setCart(newCart);
        
    }
    return (
        <div className="container">
            <h1 className = "text-center">Explore our schools to find your perfect program</h1>
            <div className="d-flex row row-cols-auto justify-content-center">
                {
                    courses.map(course => <Course course ={course} addToCart = {addToCart} key = {course.id}></Course>)
                }
            </div>

            <div className="cart-container">
                <Cart cart = {cart} key = {courses.id}></Cart>
                <Header badge = {cart.length} key = {courses.id}></Header>
            </div>
        </div>

        
    );
};

export default CoursesInfo;