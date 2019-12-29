import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Home from "./components/home/Home";
import About from "./components/about/About";
import BlogPost from "./components/blogpost/BlogPost";
import './App.css';

class App extends React.Component {

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        return (
            <div>
                <Home/>
            </div>
        );
    }
}

export default App; 