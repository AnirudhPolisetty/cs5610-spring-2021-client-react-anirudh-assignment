import React, {useEffect, useState} from "react";
import {connect} from "react-redux"
import EditableItem from "./editable-item";
import topicService from '../../services/topic-service'
import {Link, useParams} from "react-router-dom";
//import lessonService from "../../services/lesson-service";

const TopicPills = (
    {
        topics=[
            //{_id: "123", title: "Lesson A"},
            //{_id: "123", title: "Lesson B"},
            //{_id: "123", title: "Lesson C"}
        ],
        findTopicsForLesson,
        createTopicForLesson,
        updateTopicForLesson,
        deleteTopicForLesson,
        clearTopics
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined" && moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findTopicsForLesson(lessonId);
        }
        else {
            clearTopics()
        }
    },[moduleId, lessonId]);
    return(
        <div>
            <h2>Topics</h2>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <li className="nav-link" key={topic._id}>
                            <EditableItem
                                //key={topic._id}
                                active={topic._id === topicId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                item={topic}
                                updateItem={updateTopicForLesson}
                                deleteItem={deleteTopicForLesson}
                            />
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    clearTopics: () => {
        dispatch({
            type: "CLEAR_TOPICS",
        })
    },
    findTopicsForLesson: (lessonId) => {
        //console.log("LOAD TOPICS FOR LESSON:")
        //console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_LESSONS",
                topics
            }))
    },
    createTopicForLesson: (lessonId) => {
        //console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        topicService.createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    updateTopicForLesson: (newItem) => {
        topicService.updateTopicForLesson(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
    },
    deleteTopicForLesson: (topicToDelete) => {
        topicService.deleteTopicForLesson(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    }
})

export default connect(stpm, dtpm)(TopicPills)