import React from 'react';
import { string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';

function Comment(props) {
    return (
        <Column horizontal="center" alignSelf="center">
            <div>
                <h4>
                    Username
                </h4>
                <p>
                    This is a test comment. This is a test comment. This is a test comment. This is a test comment. 
                </p>
                <h4>
                    Date
                </h4>
            </div>
        </Column>
    ); 
} 

export default Comment;