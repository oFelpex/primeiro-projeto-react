import React from "react";

class App extends React.Component {
  render() {
    return (
      <header>
        <nav id="navBar">
          <div className="nav-brand">
            <img src="" alt="" />
            <h1>Space Flight News</h1>
          </div>
          <ul className="navList">
            <li><a href="#">Home</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
    )
  };
}

export default App;
