import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import MainBlogPostComponent from '../content/MainBlogPostComponent';
import SideBlogPostComponent from '../content/SideBlogPostComponent';
import HeaderComponent from '../header/HeaderComponent';
import HeaderImgComponent from '../header/HeaderImgComponent';
import BlogInfoComponent from '../content/BlogInfoComponent';
import BlogImg from '../../assets/blogImg.png';
import './Home.css';

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
    position: 'fixed',
    top: 0,
    overflow: 'hidden',
    width: '100%',
    zIndex: 1000,
}

class Home extends React.Component {

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
                <div style={{ height: 24,}} ></div>
                <HeaderComponent/>
                <HeaderImgComponent 
                  logo={logo}
                  title={title} 
                  subtitle={subtitle}
                />
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

export default Home;