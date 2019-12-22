import React from 'react';
import { string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import BackgroundImgXLarge from '../../assets/landingXLarge.jpg';
import BackgroundImgLarge from '../../assets/landingLarge.jpg';
import BackgroundImgMedium from '../../assets/landingMedium.jpg';
import BackgroundImgSmall from '../../assets/landingSmall.jpg';
import About from './AboutComponent';
import Logo from './LogoComponent';
import Menu from './MenuComponent';
import Search from './SearchComponent';
import styles from './header.css';

                    // <a href="e" className='Logo'>Logo</a>
function HeaderComponent(props) {
    const { logo, title, subtitle, ...otherProps } = props;
    // var {width} = Dimensions.get('window');
    return (
        <Row>
            <header className='header'>
                <div className='navbar'>
                    <ul className='navlinks'>
                        <li className='leftnav'><a href="ab">Logo</a></li>
                        <li className='rightnav'><a href="ab">Home</a></li>
                        <li className='rightnav'><a href="c">About</a></li>
                        <li className='rightnav'><a href="d">Blog</a></li>
                    </ul>
                </div>
                <img 
                    src={BackgroundImgSmall} 
                    srcSet={
                        `${BackgroundImgSmall} 300w, ${BackgroundImgMedium} 768w, ${BackgroundImgLarge} 1280w, ${BackgroundImgXLarge} 3200w`
                    }
                />
                <Column className='headerText'>
                    <span 
                        className='title'
                    >{title}</span>
                    <span 
                        className='subtitle'
                    >{subtitle}</span>
                </Column>  
            </header>
        </Row>
    );
}



HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
