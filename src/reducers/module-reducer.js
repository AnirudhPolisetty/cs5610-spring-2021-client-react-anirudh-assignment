const initialState = {
    modules: [
        //{title: 'CS5610', _id: '123'},
        //{title: 'CS3200', _id: '234'},
        //{title: 'CS5200', _id: '345'},
    ],
    asfg: 123,
    dahsg: 456
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            // const newModule = {
            //     title: "New Module",
            //     _id: (new Date()).getTime()
            // }
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case "DELETE_MODULE":
            return {
                ...state,
                modules: state.modules.filter(module => {
                    if(module._id !== action.moduleToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(module => {
                    if(module._id === action.updateModule._id) {
                        return action.updateModule
                    } else {
                        return module
                    }
                })
            }
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        default:
            return state
    }
}

export default moduleReducer