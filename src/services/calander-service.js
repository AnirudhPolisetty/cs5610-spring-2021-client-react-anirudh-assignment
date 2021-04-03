const CALANDER_URL = "https://calendarific.com/api/v2/holidays?api_key=544d21b7893c329ae2f31e27228d5a5f179e6ae6&country=US&year=2021";

export const findAllHolidaysForCountry_Year = () =>
    //fetch(`${CALANDER_URL}&${country}&${year}`)
    fetch(`${CALANDER_URL}`)
        .then(response => response.json())
        .then(data => data.response.holidays)
/*
export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const findCourseById = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`)
        .then(response => response.json())

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateCourse = (courseId, course) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
*/
export default {
    findAllHolidaysForCountry_Year
}