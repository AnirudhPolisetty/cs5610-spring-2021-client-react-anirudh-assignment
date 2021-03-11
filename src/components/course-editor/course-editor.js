import React, {useState,useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import moduleService from "../../services/module-service";
import './course-editor.css'

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})
const store = createStore(reducer)


const CourseEditor = ({history, course}) => {
    const [courseTitle, setCourseTitle] = useState('')
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        moduleService.findCourseById(courseId).then((response) => {
            setCourseTitle(response.title);
        })
    }, [courseId])
    return(
        <Provider store={store}>
            <>
            <h4>
                <Link to={`/courses/${layout}`}>
                    <i className="fas fa-arrow-left"></i>
                </Link>
                {courseTitle}
                <i className="fas fa-times float-right"
                   onClick={() => history.goBack()}></i>
            </h4>
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    {
                        moduleId && <LessonTabs/>
                    }
                    <br/>
                    {
                        lessonId && <TopicPills/>
                    }
                </div>
            </div>
            </>
        </Provider>)
}

export default CourseEditor