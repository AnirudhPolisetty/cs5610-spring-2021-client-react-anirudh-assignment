const initialState = {
    lessons: [
        //{title: 'Lesson 1', _id: '123'},
        //{title: 'Lesson 2', _id: '234'},
        //{title: 'Lesson 3', _id: '345'},
    ]
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.lessons
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id !== action.lessonToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    //console.log(action.updateLesson)
                    if(lesson._id === action.updateLesson._id) {
                        return action.updateLesson
                    } else {
                        return lesson
                    }
                })
            }
        case "CLEAR_LESSON":
            return {
                ...state,
                lessons: []
            }
        default:
            return state
    }
}

export default lessonReducer