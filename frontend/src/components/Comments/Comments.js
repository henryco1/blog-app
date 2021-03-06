import React from "react";

import Comment from "./Comment/Comment";
import HR from "../UI/HR/HR";
import Aux from "../../hoc/Aux/Aux";

const comments = props => {
    return props.commentsList.map(comment => (
        <Aux>
            <Comment
                name={comment.name}
                website={comment.website}
                body={comment.body}
                publishedOn={comment.published_on}
            />
        </Aux>
    ));
};

export default comments;