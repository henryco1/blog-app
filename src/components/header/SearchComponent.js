import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import searchImg from '../../assets/search.png';

const styles = StyleSheet.create({
    menu: {
        color: '#FFFFFF',
    }
});

function SearchComponent(props) {

    return (
        <Row>
            <img 
                className={css(styles.menu)}
                src={searchImg}
            />
        </Row>
    );
}

export default SearchComponent;
