import React from 'react';
import { Column, Row } from 'simple-flexbox';
import styles from './header.css';

function HeaderComponent(props) {
    return (
        <Row horizontal="spaced" className="NavbarStyle">
            <a href="x" style={{paddingLeft: "24px"}} 
                        className="NavbarLinks">  </a>
            <Row horizontal="spaced" style={{paddingRight: "24px"}}>
                <a href="x" className="NavbarLinks"> About </a>
                <a href="x" className="NavbarLinks"> Blog </a>
            </Row>
        </Row>
    );
}

export default HeaderComponent;