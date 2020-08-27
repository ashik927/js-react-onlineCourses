import React from 'react';
import { useState } from 'react';
import './CourseList.css'
import fakeData from '../../fakeData';
import CourseShow from '../CourseShow/CourseShow';
import Cart from '../Cart/Cart';

const CourseList = () => {
    // fakeData call
     const first10=fakeData.slice(0,15);
     const [courses , setCourses] = useState(first10);
     const [ cart , setCart]=useState([]);

     const handleAddProduct = (list) =>{
        const newCart=[...cart , list];
        setCart(newCart);
    }
     
    return (
        <div className="shop-container">
            <div className="product-container flex-container">
                {
                    courses.map(list => <CourseShow 
                        handleAddProduct={handleAddProduct}
                        list = {list}></CourseShow>)
                }
            </div> 
            
            <div className="cart-container">
                 <Cart cart={cart}></Cart>
            </div> 
             
        </div>
    );
};

export default CourseList;