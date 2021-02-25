import React from 'react'
import CourseRow from "../course-row/course-row";
import {Link} from "react-router-dom";
import './course-table.css'

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>Title</td>
                        <td className="d-none d-sm-table-cell">Owned by</td>
                        <td className="d-none d-md-table-cell">Last modified</td>
                        <td>
                            <Link to="/courses/grid">
                                <i className="fa fa-th float-right"></i>
                            </Link>
                            <i className="fa fa-sort-alpha-up float-right"></i>
                            <i className="fa fa-folder float-right"></i>
                        </td>
                    </tr>
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
