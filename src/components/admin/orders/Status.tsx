import React from "react";

type StatusProps = {
    status: boolean
}

const Status: React.FC<StatusProps> = (props) => {

    const {status} = props;

    return (
        <div className={status ? "badge-success":"badge-warning"}>{status ? "Completed" : "Pending"}</div>
    )
}

export default Status;