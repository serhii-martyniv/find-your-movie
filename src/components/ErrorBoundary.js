import React from "react";

export default (props) => {
    const ErrorText = () => <h1>Error, something went wrong</h1>

    let isEverythingOk = true

    return <>{isEverythingOk ? props.children : <ErrorText/>}</>
}