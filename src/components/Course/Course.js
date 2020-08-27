import React from 'react';
import Data from '../../FakePerson'
import { useState } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import './Course.css';
import ShowCourse from '../ShowCourse/ShowCourse';
import Cart from '../Cart/Cart';

const Course = () => {
    const [courses]= useState(Data);
    const [cart, setCart] =useState([])
    //console.log(courses);

    const clickHandler=(allcourse)=>{
        const newCart =[...cart,allcourse];
        setCart(newCart)

    }
    
    return (
        <div className="course">

            <div className="course-info">
               
                {
                    courses.map(cr=> <ShowCourse key={cr.id}
                        clickHandler ={clickHandler}
                        course={cr}></ShowCourse>)
                }

            </div>
           <div className="course">
               <Cart cart ={cart}></Cart>
           </div>
        </div>
    );
};

export default Course;