//const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/001029510/topics";
//const WIDGETS_URL = "http://localhost:8080/api"
const WIDGETS_URL = "https://polar-beach-60782.herokuapp.com/api"

export const createWidget = (tid, widget) =>
    fetch(`${WIDGETS_URL}/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
export const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGETS_URL}/topics/${tid}/widgets`)
        .then(response => response.json());

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_URL}/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/widgets/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json());

export default {
    createWidget, findWidgetsForTopic, updateWidget, deleteWidget
}