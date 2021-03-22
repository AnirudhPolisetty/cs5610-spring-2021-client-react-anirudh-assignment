import React, {useState} from 'react';


const ParagraphWidget = ({widget, editing, setEditingWidget}) => {
    const [itemCache, setItemCache] = useState(widget)
    const handleTextareaChange = (text) => {
        setItemCache(
            itemCache => ({...itemCache, text: text}))
        setEditingWidget(
            widget => ({...widget, text: text}))
    }
    const handleTypeChange = (type) => {
        setItemCache(
            itemCache => ({...itemCache, type: type}))
        setEditingWidget(
            widget => ({...widget, type: type}))
    }
    return (
        <div>
            {
                !editing && <p>{itemCache.text}</p>
            }
            {
                editing &&
                    <>
                        <select
                            onChange={(event) =>
                                handleTypeChange(event.target.value)} value={itemCache.type}
                            className="form-control">
                            <option value={"HEADING"}>HEADING</option>
                            <option value={"PARAGRAPH"}>PARAGRAPH</option>
                        </select>
                        <textarea
                            onChange={(event) =>
                                handleTextareaChange(event.target.value)} value={itemCache.text}
                            className="form-control"
                            rows={7}
                        />
                    </>
            }
        </div>
    );
}

export default ParagraphWidget