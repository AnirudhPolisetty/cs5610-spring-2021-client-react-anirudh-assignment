import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './course-card.css'

const CourseCard = ({
                        deleteCourse,
                        updateCourse,
                        course,
                        title
                    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        //console.log(newCourse);
        updateCourse(newCourse)
    }
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 full-card">
            <div className="card">
                <div>
                    <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top" alt="..."/>
                    {
                        editing &&
                        <i onClick={() => {deleteCourse(course);
                            setEditing(false)}} className="fas fa-times float-right">
                        </i>
                    }
                    {editing && <i onClick={() => saveTitle()} className="fas fa-check float-right"></i>}
                </div>
                <div className="card-body">
                    {!editing && <h5 className="card-title">{course.title}</h5>}
                    {
                        editing &&
                        <input
                            onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="card-title"/>
                    }
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's
                        content.</p>
                    <img src={``}/>
                    <Link to="/courses/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                </div>
                <div>
                    {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>}
                </div>
            </div>
        </div>
    )
}


export default CourseCard