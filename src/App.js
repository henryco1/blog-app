import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import MainBlogPostComponent from './components/content/MainBlogPostComponent';
import SideBlogPostComponent from './components/content/SideBlogPostComponent';
import HeaderComponent from './components/header/HeaderComponent';
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
                    <Column horizontal="center">
                        <h1> Content 1 </h1>
                        <span> Content 2 </span>
                    </Column>
                </Row>
                <Row vertical="center">
                    <Column flexGrow={1} horizontal="center"> 
                        <h2> MainBlog 1 </h2>
                        <span> MainBlogContent </span>
                    </Column>
                </Row>
                <Row vertical="center">
                    <Column flexGrow={1} horizontal="center"> 
                        <h3> SubBlog 1 </h3>
                        <span> SubBlogContent </span>
                    </Column>
                    <Column flexGrow={1} horizontal="center"> 
                        <h3> SubBlog 1 </h3>
                        <span> SubBlogContent </span>
                    </Column>
                    <Column flexGrow={1} horizontal="center"> 
                        <h3> SubBlog 1 </h3>
                        <span> SubBlogContent </span>
                    </Column>
                    <Column flexGrow={1} horizontal="center"> 
                        <h3> SubBlog 1 </h3>
                        <span> SubBlogContent </span>
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