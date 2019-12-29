import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import BlogInfoComponent from '../content/BlogInfoComponent';
import BlogImg from '../../assets/blogImg.png';

const sideBlogStyle = {
    minWidth: 250,
    maxWidth: 400,
    padding: 12,
    margin: '20px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

function SideBlogPostComponent(props) {
    const { title, description, ...otherProps } = props;
    return (
        <Column flexGrow={1} style={sideBlogStyle}> 
            <img 
                src={BlogImg}
                className="SideBlogImg"
            />
            <div > 
                <h4> {title} </h4>
                <span> {description} </span>
            </div>
        </Column>
    ); 
}
// class SideBlogPostComponent extends React.Component {

//     // state = {
//     //     title: "Greedy Algorithms In Python",
//     //     description: "Greedy algorithms aim to make the optimal choice at that given moment. Each step it chooses the optimal choice, without knowing the future. It attempts to find the globally optimal way to solve the entire problem using this method."
//     // };

//     componentWillUnmount() {
//         window.removeEventListener('resize', this.resize);
//     }

//     resize = () => this.forceUpdate();

//     render() {
//         const { title, description } = props;
//         return (
//             <Column flexGrow={1} style={sideBlogStyle}> 
//                 <img 
//                     src={BlogImg}
//                     className="SideBlogImg"
//                 />
//                 <div > 
//                     <h4> {title} </h4>
//                     <span> {description} </span>
//                 </div>
//             </Column>
//         ); 
//     }
// } 

export default SideBlogPostComponent;
                // <div style={sideBlogText}>
                //     <h4> {title} </h4>
                //     <span> {description} </span>
                // </div>