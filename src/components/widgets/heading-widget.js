import React, {useState} from 'react';

const HeadingWidget = ({widget, editing, setEditingWidget}) => {
    const [itemCache, setItemCache] = useState(widget)
    const handleSizeChange = (size) => {
        setItemCache(
            itemCache => ({...itemCache, size: parseInt(size)}))
        setEditingWidget(
            widget => ({...widget, size: parseInt(size)}))
    }
    const handleTextChange = (text) => {
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
                !editing &&
                <>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </>
            }
            {
                editing &&
                <>
                    <select
                        onChange={(event) => handleTypeChange(event.target.value)}
                        value={itemCache.type}
                        className="form-control">
                        <option value={"HEADING"}>HEADING</option>
                        <option value={"PARAGRAPH"}>PARAGRAPH</option>
                    </select>
                    <input
                        onChange={(event) => handleTextChange(event.target.value)}
                        value={itemCache.text}
                        className="form-control"/>
                    <select
                        onChange={(event) => handleSizeChange(event.target.value)}
                        value={itemCache.size}
                        className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </>
            }
        </div>
    )
}

export default HeadingWidget