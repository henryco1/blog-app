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
        backgroundColor: '#000000'
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
            <Column className={css(styles.container)}>
                    <HeaderComponent 
                      logo={logo}
                      title={title} 
                      subtitle={subtitle}
                    />
                    <MainBlogPostComponent
                    />
            </Column>
        );
    }
}

export default App;
