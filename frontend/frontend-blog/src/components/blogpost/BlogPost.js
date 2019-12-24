import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderComponent from '../header/HeaderComponent';
import Subscribe from '../content/Subscribe';
import Comment from '../comments/Comment';
import PostComment from '../comments/PostComment';

class BlogPost extends React.Component {

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        return (
            <Row vertical="spaced">
                <HeaderComponent/>
                <Column flexGrow={1} horizontal="center" style={{margin: "100px"}}>
                    <div style={{ height: 24,}} ></div>
                    <h1>
                        Blog Post Title
                    </h1>
                    <p>
                        Latin is a classical language belonging to the Italic branch of the Indo-European languages. The Latin alphabet is derived from the Etruscan and Greek alphabets and ultimately from the Phoenician alphabet. Latin was originally spoken in the area around Rome, known as Latium.
                    </p>
                    <Subscribe/>
                    <Comment/>
                    <PostComment/>
                </Column>
            </Row>
        );
    }
}

export default BlogPost;