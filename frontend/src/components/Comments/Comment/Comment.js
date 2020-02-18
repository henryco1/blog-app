import React from "react";

import cssClass from "./Comment.css";

const comment = props => {
    return (
        <div>
            <p> {props.name} </p>
            <p> {props.email} </p>
            <p> {props.body} </p>
        </div>
    );
};

export default comment;