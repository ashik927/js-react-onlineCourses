import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CourseList from './components/Courses/CourseList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        {/* Header.js call */}
        <Header></Header>
        {/* CourseList.js call */}
        <CourseList></CourseList>
        
    </div>
  );
}

export default App;
