import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedArr: [],
    topScore: 0,
    score: 0,
    message: ""
  };

  clickPicture = id => {

    var shuffledArr = this.shuffleArr(this.state.friends);

    this.setState({friends: shuffledArr});

    if (this.state.clickedArr.includes(id)) {

      this.setState({
        score: 0,
        clickedArr: [],
        message: "you lost - game over"
      });

      } else {

        this.addClick(id)
        this.setState({
          score: this.state.score +1,
          message: ""
        }, () => this.checkHighScore());
      }
    }

  checkHighScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score});
    }
  }

  addClick =(id) => {
    this.setState({clickedArr: [...this.state.clickedArr, id]})
  }

  shuffleArr = function(friends) {
    for (let i = friends.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
    }
    return friends;
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">

        <Title>Friends List</Title>

        <p className = "score">
            Score: {this.state.score} -- Top Score: {this.state.topScore}
        </p>

        <p className="message">
          {this.state.message}
        </p>

        <Wrapper>

          {this.state.friends.map(picture => (
            <FriendCard
              clickPicture={this.clickPicture}
              id={picture.id}
              key={picture.id}
              name={picture.name}
              image={picture.image}
            />
          ))}
          
        </Wrapper>

      </div>

    );
  }
}

export default App;
