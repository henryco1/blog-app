import React from "react";

import Post from "./Post/Post";

const posts = props => {
    const postList = props.postList.map(post => (
        <Post
            key={post.id}
            title={post.title}
            datePublished={post.published_on}
            totalComments={post.total_comments}
            author={post.author}
        />
    ));
    return <div>{postList}</div>;
};

export default posts;