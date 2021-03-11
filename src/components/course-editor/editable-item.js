import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return (
        <>
            {
                !editing &&
                <div className="row">
                    <div className="col-6">
                        <Link className={`nav-link ${active ? 'active' : ''}`} to={to} exact={true}>
                            {item.title}
                        </Link>
                    </div>
                    <div className="col-6">
                        <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                    </div>
                </div>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>

                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }} className="fas fa-check"></i>
                    <i onClick={() => {
                        setEditing(false)
                        deleteItem(item)
                    }} className="fas fa-times"></i>


                </>
            }
        </>
    )
}


export default EditableItem