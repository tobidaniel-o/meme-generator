import React, { Component } from "react";

/** */

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  render() {
    return (
      <div>
        <form action="" className="meme-form">
          {
            // <input type="text" name="topText"/>
            // <input type="text" name="bottomText"/>
          }
          <button>Gen</button>
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
