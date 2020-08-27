import React from 'react';
import './ShowCourse.css'

const ShowCourse = (props) => {
    const {courseName,price,img} = props.course;

    return (
        
        <div className="coures-description">
            <div className="image-position">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="course-details">
                <h4>{courseName}</h4>
                <h5>কোর্স ফিঃ {price}</h5>
                <button
                onClick={()=>props.clickHandler(props.course)}
                >Enroll Now</button>
            </div>
        </div>
        </div>
        
    );
};

export default ShowCourse;