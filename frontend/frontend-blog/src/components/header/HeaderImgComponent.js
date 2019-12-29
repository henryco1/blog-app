import React from 'react';
import { string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import BackgroundImgXLarge from '../../assets/landingXLarge.jpg';
import BackgroundImgLarge from '../../assets/landingLarge.jpg';
import BackgroundImgMedium from '../../assets/landingMedium.jpg';
import BackgroundImgSmall from '../../assets/landingSmall.jpg';
import styles from './headerImg.css';

function HeaderComponent(props) {
    const { title, subtitle, ...otherProps } = props;
    return (
        <Row>
            <header className='header'>
                <img 
                    src={BackgroundImgXLarge} 
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