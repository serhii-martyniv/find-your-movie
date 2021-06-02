import React from "react"

export default (props) => {
    return (
        <>
            <h1>Delete movie</h1>

            <label>
                Are you sure you want to delete this movie?
            </label>

            <div className="actions">
                <div className="save" onClick={props.onDeleteMovie}>Confirm</div>
            </div>
        </>
    )
}