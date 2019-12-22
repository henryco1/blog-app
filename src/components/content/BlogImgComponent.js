import React from 'react';
import { string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import BlogImg from '../../assets/blogImg.png';

function BlogImgComponent(props) {
    return (
        <img
            src={BlogImg}
        >
        </img>
    ); 
} 

export default BlogImgComponent;