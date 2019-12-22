import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import menuImg from '../../assets/menu.png';

const styles = StyleSheet.create({
    menu: {
        color: '#FFFFFF',
    }
});

function MenuComponent(props) {

    return (
        <Row>
            <img 
                className={css(styles.menu)}
                src={menuImg}
            />
        </Row>
    );
}

export default MenuComponent;
