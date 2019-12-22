import React from 'react';
import { string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import BlogImg from './BlogImgComponent';
import BlogInfo from './BlogInfoComponent';
import styles from './MainBlogPostComponent.css'

function MainBlogPostComponent(props) {
    const { logo, title, subtitle, ...otherProps } = props;
    return (
        <Column>
            <ul className='mainBlogComponent'>
                <li className='blogImg'>
                    <BlogImg/>
                </li>
                <li className='blogInfo'>
                    <BlogInfo/>
                </li>
            </ul>
        </Column>
    );
}



MainBlogPostComponent.propTypes = {
    title: string
};

export default MainBlogPostComponent;


                    // <ul className='navlinks'>
                    //     <li className='leftnav'><a href="ab">Logo</a></li>
                    //     <li className='rightnav'><a href="d">Blog</a></li>
                    //     <li className='rightnav'><a href="c">About</a></li>
                    //     <li className='rightnav'><a href="ab">Home</a></li>
                    // </ul>