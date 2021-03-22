const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch(action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_WIDGETS":
            return {
                ...state,
                widgets: action.widgets
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if (widget.id !== action.widgetToDelete) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widgetToUpdate.id) {
                        return action.widgetToUpdate
                    } else {
                        return widget
                    }
                })
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CLEAR_WIDGET":
            return {
                ...state,
                widgets: []
            }
        default:
            return state
    }
}

export default widgetReducer