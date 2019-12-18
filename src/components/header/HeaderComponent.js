import React from 'react';
import { string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import BackgroundImgXLarge from '../../assets/landingXLarge.jpg';
import BackgroundImgLarge from '../../assets/landingLarge.jpg';
import BackgroundImgMedium from '../../assets/landingMedium.jpg';
import BackgroundImgSmall from '../../assets/landingSmall.jpg';

const styles = StyleSheet.create({
    header: {
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',

        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '40px',
        lineHeight: '98px',
        letterSpacing: 0.3,
        color: '#FFFFFF',

        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    subtitle: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '37px',
        color: '#FFFFFF',

        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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
                <img 
                    src={BackgroundImgSmall} 
                    srcSet={
                        `${BackgroundImgSmall} 300w, ${BackgroundImgMedium} 768w, ${BackgroundImgLarge} 1280w, ${BackgroundImgXLarge} 3200w`
                    }
                />
                <Column>
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
