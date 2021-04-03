import React, {useState} from 'react'

const ImageWidget = (
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
    const handleImageURL = (url) => {
            setItemCache(
                itemCache => ({...itemCache, url: url}))
            setEditingWidget(
                widget => ({...widget, url: url}))
    }
    const handleImageWidth = (width) => {
        setItemCache(
            itemCache => ({...itemCache, width: width}))
        setEditingWidget(
            widget => ({...widget, width: width}))
    }
    const handleImageHeight = (height) => {
        setItemCache(
            itemCache => ({...itemCache, height: height}))
        setEditingWidget(
            widget => ({...widget, height: height}))
    }

    return (
        <div>
            {
                !editing &&
                <>
                    <img width={widget.width} height={widget.height} src={widget.url} alt={widget.url}/>
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
                        <div className="form-group">
                            <label>Image URL</label>
                            <input type="url"
                                   className="form-control block"
                                   value={itemCache.url}
                                   onChange={(event) => handleImageURL(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Image Width</label>
                            <input type="number"
                                   className="form-control"
                                   value={itemCache.width}
                                   onChange={(event) => handleImageWidth(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Image Height</label>
                            <input type="number"
                                   className="form-control"
                                   value={itemCache.height}
                                   onChange={(event) => handleImageHeight(event.target.value)}/>
                        </div>
                    </>
            }
        </div>
    );
}

export default ImageWidget