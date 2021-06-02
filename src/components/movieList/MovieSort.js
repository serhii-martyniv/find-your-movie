import React from "react"

export default (props) => {
    return (
        <div className="filterWrapper">
            <span>sort by</span>
            <select onChange={props.onChangeSort}>
                <option value="genre">Genre</option>
                <option value="year">Release date</option>
                <option value="title">Title</option>
            </select>
        </div>
    )
}