import React from 'react';
import './ShowCourse.css'

const ShowCourse = (props) => {
    const {courseName,price,img,courseDuration} = props.course;

    return (
        
        <div className="coures-description">
            <div className="image-position">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="course-details">
                <h4>{courseName}</h4>
                <p>কোর্স এর সময়কালঃ {courseDuration}</p>
                <h5>কোর্স ফিঃ {price} টাকা</h5>
                <button
                onClick={()=>props.clickHandler(props.course)}
                >Enroll Now</button>
            </div>
        </div>
        </div>
        
    );
};

export default ShowCourse;