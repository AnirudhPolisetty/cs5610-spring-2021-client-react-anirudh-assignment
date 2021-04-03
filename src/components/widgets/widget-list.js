import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from '../../services/widget-service';
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets=[],
        createWidget,
        deleteWidget,
        updateWidget,
        findAllWidgetsForTopic,
        reset
    }) => {
    const {topicId} = useParams()
    const [editingWidget, setEditingWidget] = useState(false)
    //const [widgets, setWidgets] = useState([])
    //const [widget, setWidget] = useState({})
    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findAllWidgetsForTopic(topicId);
        } else {
            reset()
        }
    }, [findAllWidgetsForTopic, topicId]);

    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h4>Widget List</h4>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li key={widget.id} className="list-group-item">
                            {
                                editingWidget.id !== widget.id &&
                                <i onClick={() => {
                                    setEditingWidget(widget)
                                }} className="fas fa-cog float-right"></i>
                            }
                            {
                                editingWidget.id === widget.id &&
                                <div>
                                    <i onClick={() => {
                                        updateWidget(widget.id, editingWidget)
                                        setEditingWidget(false)
                                    }} className="fas fa-check float-right"></i>

                                    <i onClick={() => {
                                        deleteWidget(widget.id)
                                    }} className="fas fa-times float-right"></i>
                                </div>
                            }
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    widget={widget}
                                    editing={editingWidget.id === widget.id}
                                    setEditingWidget={setEditingWidget}
                                />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    widget={widget}
                                    editing={editingWidget.id === widget.id}
                                    setEditingWidget={setEditingWidget}
                                />
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    widget={widget}
                                    editing={editingWidget.id === widget.id}
                                    setEditingWidget={setEditingWidget}
                                />
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    widget={widget}
                                    editing={editingWidget.id === widget.id}
                                    setEditingWidget={setEditingWidget}
                                />
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidget: (topicId) => {
        widgetService.createWidget(topicId,
            {type: "HEADING", size: 1, text: "New Widget"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            }));
    },
    findAllWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets
            }));
    },
    deleteWidget: (widgetId) => {
        widgetService.deleteWidget(widgetId)
            .then(() => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: widgetId
            }))
    },
    updateWidget: (widgetId, widget) => {
        widgetService.updateWidget(widgetId, widget)
            .then(() => dispatch({
                type: "UPDATE_WIDGET",
                widgetToUpdate: widget
            }))
    },
    reset: () => {
        dispatch({
            type: "CLEAR_WIDGET",
        })
    }
})

export default connect(stpm, dtpm)(WidgetList)