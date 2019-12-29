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
      subtitle: "My thoughts on the stock market and other cool things",
      side_blog_list: []
    };

    async componentDidMount() {
        window.addEventListener('resize', this.resize);
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const side_blog_list = await res.json();
            this.setState({
                side_blog_list
            });
            for (var i=0; i<side_blog_list.length; i++) {
                // console.log(side_blog_list[i])
            }
        } catch (e) {
            console.log(e);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    getBlogComponent(blogs) {
        var side_blog_output = [];
        var side_blog_section = [];
        for (var i=0; i<blogs.length; i++) {
            if (side_blog_section.length > 1) {
                side_blog_output.push(
                    <Row flexGrow={1} flexDirection="column" alignSelf="center"
                        breakpoints={{
                        880: {
                                flexDirection: "column"
                            },
                        }}
                    >
                    <SideBlogPostComponent
                        title={side_blog_section[0].title}
                        description={side_blog_section[0].short_description}
                    />
                    <SideBlogPostComponent
                        title={side_blog_section[1].title}
                        description={side_blog_section[1].short_description}
                    />
                    </Row>
                );
                side_blog_section = [];
            }
            side_blog_section.push(blogs[i]);

            // This conditional handles the last element of the blogs array
            if (blogs.length % 2 == 1 && i == blogs.length - 1) {
                side_blog_output.push(
                    <Row flexGrow={1} flexDirection="column" alignSelf="center">
                     <SideBlogPostComponent
                        title={blogs[i].title}
                        description={blogs[i].short_description}
                    />
                    </Row>          
                )
                side_blog_section = []
            }
        }
        return side_blog_output
    }

    resize = () => this.forceUpdate();

    render() {
        const { title, subtitle, side_blog_list } = this.state;
        return (
            <Column vertical="spaced">
                <div name="divider" style={{ height: 24,}} ></div>
                <HeaderComponent/>
                <HeaderImgComponent 
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
                            payaya payaya payaya payaya 
                        </p>
                    </Column>
                </Row>
                <Column horizontal="center" alignSelf="center"> 
                    <div className="DividerLine"/>
                    <div className="DividerNoLine"/>
                </Column>
                <Column flexGrow={1} alignSelf="center" className="SideBlogComponent" 
                    breakpoints={{
                    880: {
                            flexDirection: "column"
                        },
                    }}
                >
                    {this.getBlogComponent(side_blog_list)}
                </Column>
            </Column>
        );
    }
}

export default Home;

                    // {this.state.side_blog_list.map(blog_data => {
                    //     console.log('asyayay')
                    //     // console.log(typeof blog_data)
                    //         // this.getBlogComponent(blog_data)
                    // })}}

                    // <div name="SideBlogContainer">
                        // {this.loadAllBlogButtons()}
                    // </div>

                // {this.state.side_blog_list.map(blog_data => (
                //     <SideBlogPostComponent
                //         title = {blog_data.title}
                //         description = {blog_data.short_description}
                //     />
                // ))}

                    // <Row>
                    //  <SideBlogPostComponent
                    //     title="ayaya"
                    //     description="ayaya"
                    // />
                    //  <SideBlogPostComponent
                    //     title="ayaya"
                    //     description="ayaya"
                    // />
                    // </Row>     
                    // <Row>
                    //  <SideBlogPostComponent
                    //     title="ayaya"
                    //     description="ayaya"
                    // />
                    //  <SideBlogPostComponent
                    //     title="ayaya"
                    //     description="ayaya"
                    // />
                    // </Row>                