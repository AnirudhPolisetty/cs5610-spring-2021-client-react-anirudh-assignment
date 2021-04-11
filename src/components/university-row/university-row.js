import React from 'react'

const UniversityRow = (
    {
        university,
        name,
        country
    }) => {
    return (
        <tr className= "row-css">
            <td onClick={()=> window.open(university.web_pages, "_blank")}
                className="d-none d-sm-table-cell">
                <i className="fa fa-file"></i>
                {name}</td>
            <td className="d-none d-md-table-cell">{country}</td>
            <td className="d-none d-md-table-cell">{university.alpha_two_code}</td>
        </tr>
    )
}
export default UniversityRow