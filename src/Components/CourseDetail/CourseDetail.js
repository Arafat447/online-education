import React from 'react';
import './CourseDetail.css'
const courseDetail = (props) => {
    const { name, price, teacher,img } = props.courses;
    return (
        <div className="courses">
            <div className="detail-container">
                <img src={img} alt=""/>
                <h6>{name}</h6>
                <p><small>Created by: {teacher}</small></p>
                <p>Price :${price}</p>
                <button onClick={()=>props.handleAddCourse(props.courses)} className="fancy-button">Enroll Now</button>
            </div>
        </div>
    );
};

export default courseDetail;