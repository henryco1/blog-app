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
    minWidth: 250,
    maxWidth: 500,
    padding: 12
}

const sideBlogStyle = {
    minWidth: 150,
    maxWidth: 250,
    padding: 12,
    margin: '20px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

const navbarStyle = {
    paddingTop: '8px',
    paddingBottom: '8px',
    maxHeight: 24,
    // backgroundColor: 'black',
    position: 'fixed',
    top: 0,
    overflow: 'hidden',
    width: '100%',
    zIndex: 1000,
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
                <Row horizontal="spaced" style={navbarStyle}>
                    <a href="x" style={{paddingLeft: "24px"}} 
                                className="NavbarLinks"> Logo </a>
                    <Row horizontal="spaced" style={{paddingRight: "24px"}}>
                        <a href="x" className="NavbarLinks"> About </a>
                        <a href="x" className="NavbarLinks"> Blog </a>
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
                <Row alignSelf="center" className="MainBlogComponent"
                    breakpoints={{
                        900: {
                            flexDirection: "column"
                        },
                    }}
                >
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
                <Column horizontal="center" alignSelf="center"> 
                    <div className="DividerLine"/>
                    <div className="DividerNoLine"/>
                </Column>
                <Row alignSelf="center" className="SideBlogComponent" 
                    breakpoints={{
                    880: {
                            flexDirection: "column-reverse"
                        },
                    }}
                >
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