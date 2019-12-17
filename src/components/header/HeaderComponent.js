import React from 'react';
import { string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import BackgroundImg from '../../assets/landing.jpg';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '80px',
        lineHeight: '98px',
        letterSpacing: 0.3,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    subtitle: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '37px',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    landingPicture: {
        minWidth: "100%",
        maxWidth: "100vw",
        height: "auto",
    }
});

function HeaderComponent(props) {
    const { logo, title, subtitle, ...otherProps } = props;
    // var {width} = Dimensions.get('window');
    return (
        <Row className={css(styles.container)}>
            <div>
                <img
                    className={css(styles.landingPicture)}
                    src= {BackgroundImg}
                    resizeMode = 'cover'
                />
                <Column>
                    <span className={css(styles.title)}>{title}</span>
                    <span className={css(styles.subtitle)}>{subtitle}</span>
                </Column>        
            </div>
            
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
