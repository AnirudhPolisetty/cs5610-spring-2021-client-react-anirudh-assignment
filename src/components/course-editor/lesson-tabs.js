import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'

const LessonTabs = (
    {
        lessons=[
            //{_id: "123", title: "Lesson A"},
            //{_id: "123", title: "Lesson B"},
            //{_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule,
        createLessonForModule,
        updateLessonForModule,
        deleteLessonForModule,
        reset
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        //reset()
        //console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        } else  {
            reset()
        }
    }, [moduleId])
    return(
        <div>
            <h2>Lessons</h2>
            <ul className="nav nav-pills">
                {
                    lessons.map(lesson =>
                            <li className="nav-item" key={lesson._id}>
                                <EditableItem
                                    //key={lesson._id}
                                    active={lesson._id === lessonId}
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                    item={lesson}
                                    updateItem={updateLessonForModule}
                                    deleteItem={deleteLessonForModule}
                                />
                            </li>
                        )
                    }
                    <li>
                        <i onClick={() => createLessonForModule(moduleId)} className="nav-item fas fa-plus"></i>
                    </li>
                </ul>
        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        //console.log("LOAD LESSONS FOR MODULE:")
        //console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({type: "FIND_LESSONS", lessons}))
    },
    createLessonForModule: (moduleId) => {
        //console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService
            .createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({type: "CREATE_LESSON", lesson}))
    },
    updateLessonForModule: (newItem) => {
        lessonService.updateLessonForModule(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_LESSON", updateLesson: newItem}))
    },
    deleteLessonForModule: (lessonToDelete) => {
        lessonService.deleteLessonForModule(lessonToDelete._id)
            .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
    },
    reset : () => {
        dispatch({
            type: "CLEAR_LESSONS",
        })
    }
})

export default connect(stpm, dtpm)(LessonTabs)