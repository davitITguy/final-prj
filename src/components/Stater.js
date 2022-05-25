import React, { Component } from "react";

export class Stater extends Component {
  render() {
    console.log(this.props.setState);
    console.log(this.image);
    return (
      <div>
        <img style={imageStyle} src={this.props.image} alt="img"></img>
        <button onClick={() => this.props.incrementId()}>Next</button>
      </div>
    );
  }
}
const imageStyle = {
  width: "300px",
  height: "300px",
};
export default Stater;
