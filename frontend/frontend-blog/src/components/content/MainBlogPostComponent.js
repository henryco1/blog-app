import React from 'react';
import { string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
// import BlogImg from './BlogImgComponent';
import BlogInfo from './BlogInfoComponent';
import styles from './MainBlogPostComponent.css'
import BlogImg from '../../assets/blogImg.png';

function MainBlogPostComponent(props) {
    const { logo, title, subtitle, ...otherProps } = props;
    return (
        <div className='mainBlogCard'>
            <img
                src={BlogImg}
                className='blogImg'
            >
            </img>            
                <span
                className='blogInfo'  
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus quam vitae dictum 
                volutpat. Quisque quis ante a sem ullamcorper cursus quis id felis. Quisque tellus eros, 
                egestas vel rutrum nec, molestie non ipsum. Suspendisse imperdiet placerat lacus et 
                efficitur. Donec nisl ligula, eleifend non felis a, porta vestibulum libero. Cras efficitur 
                ipsum nec neque viverra, in suscipit metus hendrerit. Aliquam in iaculis est. Praesent 
                placerat tristique neque, vel egestas lectus tincidunt a. Nunc maximus enim ligula, 
                fringilla tempor felis dictum non. Duis placerat vehicula magna sit amet consequat.
                </span>
        </div>
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
        // <Column className='mainBlogCard'>
        //     <div className='container'>
        //             <BlogImg
        //                 className='blogImg'
        //             />
        //             <BlogInfo className='blogInfo'/>
        //     </div>
        // </Column>