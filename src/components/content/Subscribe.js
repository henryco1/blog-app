import React from 'react';
import { string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';

function Subscribe(props) {
    return (
        <Column horizontal="center" alignSelf="center">
            <h2>
                Subscribe to Get the Latest Updates from Dan's Blog
            </h2>
            <p>
                We will send you the latest posts to your inbox to keep you updated with new posts from Dan
            </p>
            <input type="text" value="Email"></input>
            <div>
                <span>
                    Sign Up
                </span>
            </div>
        </Column>
    ); 
} 

export default Subscribe;