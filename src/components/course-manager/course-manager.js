import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import {Route, Switch} from "react-router-dom";
import courseService, {findAllCourses, findCourseById} from "../../services/course-service";
import './course-manager.css'
import UniversityTable from "../university-table/university-table";
import Quizzes from "../quizzes/quizzes-list";


class CourseManager extends React.Component {
    state = {
        courses: [],
        qwe: 123,
        sdf: 456,
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }

    updateCourse = (course) => {
        //console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    componentDidMount = () => {
        findAllCourses()
            .then(courses => this.setState({courses}))

       /* findAllHolidaysForCountry_Year()
            .then(holidays =>
                this.setState({holidays}))*/

    }
/*
    findCourseById = (courseToFind) => {
        courseService.findCourseById(courseToFind._id)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === courseToFind._id ? courseToFind : c)
            })))
    }
*/
    addCourse = () => {
        const newCourse = {
            title: this.state.input,
            owner: "New Owner",
            lastModified: "02/24/2021"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
        this.setState({input: ""})
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return(
            <div>
                <div className="row wbdv-sticky-top wbdv-padding-5px">
                    <div className="col-1">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                    <div className="col-2 d-none d-lg-block d-xl-block">
                        <h4>Course Manager</h4>
                    </div>
                    <div className="col-8">
                        <input className="form-control" onChange={this.handleChange} placeholder="New Course Title"
                        value={this.state.input}/>
                    </div>
                    <div className="col-1">
                        {/*<Link to="/">*/}
                            <i onClick={this.addCourse} className="fa fa-plus-circle fa-2x float-right"></i>
                        {/*</Link>*/}
                    </div>
                </div>
                <div>
                    <i onClick={this.addCourse} className="fa fa-plus-circle fa-2x plus-icon-fixed"></i>
                </div>
                    <Route path="/courses/table" exact={true}>
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>

                    <Route path="/courses/grid" exact={true}>
                        <CourseGrid
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>
            </div>
        )
    }
}

export default CourseManager