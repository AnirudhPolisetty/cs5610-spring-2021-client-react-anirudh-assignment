import React from 'react'
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import CourseTable from "./course-table/course-table";
import CourseManager from "./course-manager/course-manager";


const Home = () => {
    return (
    <>
        <h1>Home</h1>
        <div className="list-group">
            <Link to="/courses/grid" className="list-group-item">
                Course Grid
            </Link>
            <Link to="/courses/table" className="list-group-item">
                Course Table
            </Link>
            <Link to="/courses/calander" className="list-group-item">
                Course Calandar
            </Link>
        </div>
    </>
    )}


export default Home