import React from 'react';
import fakeData from '../../fakeData/fakeData';
import { useState } from 'react';
import './Course.css';
import CourseDetail from '../CourseDetail/CourseDetail';
import Cart from '../Cart/Cart';

const Course = () => {
    const [courses, setCourses] = useState(fakeData);
    const [cart,setCart] = useState([]);
    const handleAddCourse =(course)=>{
        console.log("clicked",course)
        const newCart = [...cart,course];
        setCart(newCart);
    }
    return (
        <div className="course-container d-flex">
            <div className="course">
                <h1 className="text-center">The Courses We Provide</h1>
                {
                    courses.map(course => <CourseDetail courses={course} handleAddCourse={handleAddCourse}></CourseDetail>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Course;