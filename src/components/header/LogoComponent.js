import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        lineHeight: '18px',
        textAlign: 'center',
        color: '#FFFFFF',
    }
});

function LogoComponent(props) {

    return (
        <Row className = {css(styles.text)}>
          Bahia Verge
        </Row>
    );
}

export default LogoComponent;
