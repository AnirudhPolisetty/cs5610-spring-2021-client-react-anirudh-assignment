const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001029510/lessons";
const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/001029510/topics";

export const createTopicForLesson = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())

export const updateTopicForLesson = (topicId, topic) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteTopicForLesson = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: 'DELETE'
    }).then(response => response.json());

export default {
    findTopicsForLesson, createTopicForLesson, updateTopicForLesson, deleteTopicForLesson
}