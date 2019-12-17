import React from 'react';
import cover_photo from './assets/cover_photo.png';
import search_button_img from './assets/search.png';
import menu_button_img from './assets/menu.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="landing_picture">
          <img src={cover_photo} className="cover_photo" alt="cover_photo" /> 
          <div className="landing_title">
              Dan's Blog
          </div>
          <div className="landing_subtitle">
              My thoughts on the stock market and other cool things
          </div>
        </div>

        <div className="landing_nav_bar">
          <div className="nav_menu_button">
            <img src={menu_button_img} className="menu_button" alt="menu_button" />
          </div>
          <div className="nav_about_button"> about
          </div>
          <div className="nav_search_button">
            <img src={search_button_img} className="search_button" alt="search_button" />
          </div>
          <div className="nav_logo"> bahia verge logo
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;


      // <header className="App-header">
      //   // <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>