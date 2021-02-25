import React from 'react'
import CourseCard from "../course-card/course-card";
import {Link} from "react-router-dom";
import './course-grid.css'

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
    <>
        <div className="row title">
            <div className="col-4 d-none d-sm-block">Recent Documents</div>
            <div className="col-4 d-none d-sm-block">
                Owned by me
                <i className="fa fa-sort-down"></i>
            </div>
            <div className="col-4 icon-div">
            <Link to="/courses/table">
                <i className="fas fa-list float-right"></i>
            </Link>
            <i className="fa fa-sort-alpha-up float-right"></i>
            <i className="fa fa-folder float-right"></i>
            </div>
            {/*<h2>Course Grid {courses.length}</h2> */}
        </div>

        <div>
            <div className="row">
                {
                    courses.map((course, ndx) =>
                        <CourseCard
                            updateCourse={updateCourse}
                            deleteCourse={deleteCourse}
                            key={ndx}
                            course={course}
                            title={course.title}
                            owner={course.owner}
                            lastModified={course.lastModified}
                        />)
                }
            </div>
        </div>
    </>

export default CourseGrid