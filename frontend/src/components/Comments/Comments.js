import React from "react";

import Comment from "./Comment/Comment";
import HR from "../UI/HR/HR";
import Aux from "../../hoc/Aux/Aux";

const comments = props => {
    return (
        <div>
            <p> {props.name} </p>
            <p> {props.email} </p>
            <p> {props.body} </p>
        </div>
    );
};

export default comments;