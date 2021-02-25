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
            <Link to="/courses/manager" className="list-group-item">
                Course Manager
            </Link>
            <Link to="/courses/grid" className="list-group-item">
                Course Grid
            </Link>
            <Link to="/courses/table" className="list-group-item">
                Course Table
            </Link>
            <Link to="/courses/editor" className="list-group-item">
                Course Editor
            </Link>
        </div>
        <div>
            <Switch>
            <Route path="/courses/manager" component={CourseManager} />
            <Route path="/courses/table" component={CourseTable} />
            <Route path="/courses/grid" component={CourseGrid} />
            <Route path="/courses/editor" component={CourseEditor} />
            </Switch>
        </div>
    </>
    )}


export default Home