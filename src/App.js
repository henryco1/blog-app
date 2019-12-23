import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import MainBlogPostComponent from './components/content/MainBlogPostComponent';
import SideBlogPostComponent from './components/content/SideBlogPostComponent';
import HeaderComponent from './components/header/HeaderComponent';
import BlogImg from './assets/blogImg.png';
import BlogInfoComponent from './components/content/BlogInfoComponent';

import './App.css';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh',
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

const mainBlogStyle = {
    backgroundColor: "#5CAB7D",
    minWidth: 250,
    maxWidth: 500,
    padding: 12
}

const sideBlogStyle = {
    backgroundColor: "#8DBC8E",
    minWidth: 100,
    maxWidth: 200,
    padding: 12,
    borderStyle: 'dotted'
}

class App extends React.Component {

    state = { 
      logo: "Bahia Verge",
      title: "Dan's Blog",
      subtitle: "My thoughts on the stock market and other cool things"
    };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const { width, height, logo, title, subtitle } = this.state;
        return (
            <Column vertical="spaced">
                <Row horizontal="spaced">
                    <span> Logo </span>
                    <Row horizontal="spaced">
                        <span> About </span>
                        <span> Blog </span>
                    </Row>
                </Row>
                <Row flexGrow={1} horizontal="center">
                    <Column flexGrow={1}>
                        <HeaderComponent 
                          logo={logo}
                          title={title} 
                          subtitle={subtitle}
                        />
                    </Column>
                </Row>
                <Row alignSelf="center" className="MainBlogComponent">
                    <Column flexGrow={1} horizontal="center" style={mainBlogStyle}>
                        <img 
                            src={BlogImg}
                            className="MainBlogImg"
                        />
                    </Column>
                    <Column flexGrow={1} horizontal="center" style={mainBlogStyle}> 
                        <p className="MainBlogInfo">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec faucibus quam vitae dictum volutpat. 
                            Quisque quis ante a sem ullamcorper cursus quis id felis. 
                            Quisque tellus eros, egestas vel rutrum nec, molestie non ipsum. 
                        </p>
                    </Column>
                </Row>
                <Row alignSelf="center" className="SideBlogComponent">
                    <Column flexGrow={1} horizontal="center" style={sideBlogStyle}> 
                        <img 
                            src={BlogImg}
                            className="SideBlogImg"
                        />
                        <span> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec faucibus quam vitae dictum volutpat.  
                        </span>
                    </Column>
                    <Column flexGrow={1} horizontal="center" style={sideBlogStyle}> 
                        <img 
                            src={BlogImg}
                            className="SideBlogImg"
                        />
                        <span> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec faucibus quam vitae dictum volutpat.  
                        </span>
                    </Column>
                    <Column flexGrow={1} horizontal="center" style={sideBlogStyle}> 
                        <img 
                            src={BlogImg}
                            className="SideBlogImg"
                        />
                        <span> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec faucibus quam vitae dictum volutpat.  
                        </span>
                    </Column>
                    <Column flexGrow={1} horizontal="center" style={sideBlogStyle}> 
                        <img 
                            src={BlogImg}
                            className="SideBlogImg"
                        />
                        <span> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec faucibus quam vitae dictum volutpat.  
                        </span>
                    </Column>
                </Row>
            </Column>
        );
    }
}

export default App;

            // <Column className={css(styles.container)}>
            //         <HeaderComponent 
            //           logo={logo}
            //           title={title} 
            //           subtitle={subtitle}
            //         />
            //         <MainBlogPostComponent
            //         />
            // </Column>