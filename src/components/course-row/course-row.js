import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './course-row.css'

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <tr className= "row-css">
            <td>
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}>
                        <i className="fas fa-file"></i>
                    </Link>
                }
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}>
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td className="d-none d-sm-table-cell">{owner}</td>
            <td className="d-none d-md-table-cell">{lastModified}</td>
            <td>
                <Link to={`/courses/${course._id}/quizzes`}>Quizzes</Link>
            </td>
            <td>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>}
                {editing && <i onClick={() => {deleteCourse(course); setEditing(false)}} className="fas fa-times float-right"></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check float-right"></i>}
            </td>
        </tr>
    )
}
export default CourseRow