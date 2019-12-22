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
        color: '#FFFFFF',
      }
});

function AboutComponent(props) {

    return (
        <Row>
          <span className = {css(styles.text)}>
            About
          </span>
        </Row>
    );
}

export default AboutComponent;
