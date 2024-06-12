import React from "react";
import './styles/App.css';
import { NavBar } from "./components/NavBar/NavBar";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";
import article1Img from './assets/images/article1.png';
import article2Img from './assets/images/article2.png';
import article3Img from './assets/images/article3.png';


class App extends React.Component {
  render() {
    return (
      
      <>
        <NavBar />
        <Counter />
        {/* <section id="articles">
          <Article title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1Img}
          />
          <Article title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, adipisci in inventore omnis quibusdam, quasi nam magni quae suscipit impedit aut beatae eum doloribus rem consequatur enim, cumque dolorum itaque!"
            thumbnail={article2Img}
          />
          <Article title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Amet consectetur adipisicing elit. Quisquam alias neque quo hic, expedita voluptate modi rerum quod doloremque ipsum accusamus ducimus id saepe labore iusto error omnis nulla sed animi voluptas. Odio, expedita."
            thumbnail={article3Img}
          />
          <Article title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1Img}
          />
        </section> */}
      </>
    )
  };
}

export default App;
