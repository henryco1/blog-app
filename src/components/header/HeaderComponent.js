import React from 'react';
import { string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import styles from './header.css';

const navbarStyle = {
    paddingTop: '8px',
    paddingBottom: '8px',
    maxHeight: 24,
    position: 'fixed',
    top: 0,
    overflow: 'hidden',
    width: '100%',
    zIndex: 1000,
    backgroundColor: "black",
}

function HeaderComponent(props) {
    return (
        <Row horizontal="spaced" style={navbarStyle}>
            <a href="x" style={{paddingLeft: "24px"}} 
                        className="NavbarLinks"> Logo </a>
            <Row horizontal="spaced" style={{paddingRight: "24px"}}>
                <a href="x" className="NavbarLinks"> About </a>
                <a href="x" className="NavbarLinks"> Blog </a>
            </Row>
        </Row>
    );
}



HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;