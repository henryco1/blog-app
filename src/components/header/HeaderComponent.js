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

const styles = StyleSheet.create({
    header: {
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    },
    headerText: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '40px',
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
    title: {
        fontSize: '40px',
        lineHeight: '98px',
        letterSpacing: 0.3,
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: '19px',
        lineHeight: '37px',
        color: '#FFFFFF',
    },
    responsiveHeader: {
        backgroundImage: `${BackgroundImgSmall}`,
        width: 'auto',
        maxHeight: '30%'
    }

});

function HeaderComponent(props) {
    const { logo, title, subtitle, ...otherProps } = props;
    // var {width} = Dimensions.get('window');
    return (
        <Row>
            <header className={css(styles.header)}>
                <div className={css(styles.navbar)}>
                    <Logo/>
                    <ul >
                        <About/>
                        <Menu/>
                        <Search/>
                    </ul>
                </div>
                <img 
                    src={BackgroundImgSmall} 
                    srcSet={
                        `${BackgroundImgSmall} 300w, ${BackgroundImgMedium} 768w, ${BackgroundImgLarge} 1280w, ${BackgroundImgXLarge} 3200w`
                    }
                />
                <Column className={css(styles.headerText)}>
                    <span 
                        className={css(styles.title)}
                    >{title}</span>
                    <span 
                        className={css(styles.subtitle)}
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
