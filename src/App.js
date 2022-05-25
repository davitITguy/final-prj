import "./App.css";
import Stater from "./components/Stater";
import Header from "./components/Header";
import { Component } from "react";

class App extends Component {
  state = {
    id: 0,
    data: [
      {
        id: 1,
        img: "assets/images/ghoul.jpeg",
        title: "ghoul",
      },
      {
        id: 2,
        img: "assets/images/baruto.jpg",
        title: "baruto",
      },
      {
        id: 3,
        img: "assets/images/naruto.webp",
        title: "naruto",
      },
    ],
  };

  incrementId = id => {
    this.setState(prev => {
      console.log("state", prev);
      return { ...prev, id: prev.id + 1 };
    });
  };

  render() {
    console.log(this.state.id);
    return (
      <div className="App">
        <Header name={this.state.data[this.state.id].title} />
        <Stater image={this.state.data[this.state.id].img} incrementId={this.incrementId} />
      </div>
    );
  }
}

export default App;
