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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  /**
   * Create a method that, when the "Gen" button is clicked, chooses one of the
   * memes from our `allMemeImgs` array at random and makes it so that is the
   * meme image that shows up in the bottom portion of our meme generator site (`.url`)
   */

  handleSubmit(event) {
    event.preventDefault();
    
    // get a random int (index in the array which represents the image)
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);

    // get the meme from that index
    const randMemeImg = this.state.allMemeImgs[randNum].url;

    // set `randomImg` to the `.url` of the random item I grabbed
    this.setState({ randomImage: randMemeImg });
  }

  render() {
    return (
      <div>
        <form action="" className="meme-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="topText"
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            placeholder="bottomText"
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
