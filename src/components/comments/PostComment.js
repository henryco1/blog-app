import React from 'react';
import { string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';

function PostComment(props) {
    return (
        <Column horizontal="center" alignSelf="left">
            <input type="text" value="Your Name"></input>
            <input type="text" value="Email"></input>
            <input type="text" value="Comment"></input>
        </Column>
    ); 
} 

export default PostComment;