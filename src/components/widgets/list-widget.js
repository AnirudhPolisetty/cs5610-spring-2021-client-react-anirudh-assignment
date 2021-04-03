import React, {useState} from 'react'

const ListWidget = (
    {
        widget,
        editing,
        setEditingWidget
    }) => {
    const [itemCache, setItemCache] = useState(widget)
    const handleTypeChange = (type) => {
        setItemCache(
            itemCache => ({...itemCache, type: type}))
        setEditingWidget(
            widget => ({...widget, type: type}))
    }
    const handleTextareaChange = (text) => {
        setItemCache(
            itemCache => ({...itemCache, text: text}))
        setEditingWidget(
            widget => ({...widget, text: text}))
    }

    return (
        <div>
            {
                !editing &&
                <>
                    {
                        itemCache.ordered &&
                        <ol>{itemCache.text.split("\n").map((item) => <li key={Math.random()}>{item}</li>)}</ol>
                    }
                    {
                        !itemCache.ordered &&
                        <ul>{itemCache.text.split("\n").map((item) => <li key={Math.random()}>{item}</li>)}</ul>
                    }
                </>
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
                        <option value={"LIST"}>LIST</option>
                        <option value={"IMAGE"}>IMAGE</option>
                    </select>
                    <br/>
                    <div>
                        <label>
                            Ordered <br/>
                            <input type="checkbox"
                                   name="Ordered"
                                   checked={itemCache.ordered}
                                   onChange={(event) => {
                                       setItemCache(
                                           itemCache => ({...itemCache, ordered: !itemCache.ordered}))
                                       setEditingWidget(
                                           widget => ({...widget, ordered: !widget.ordered}))
                                   }}/>
                        </label>
                        <br/>
                        <label>List Items</label>
                        <textarea
                            value={itemCache.text}
                            rows={7}
                            className="form-control"
                            onChange={(event) =>
                                handleTextareaChange(event.target.value)}/>
                    </div>
                </>
            }
        </div>
    );
}

export default ListWidget