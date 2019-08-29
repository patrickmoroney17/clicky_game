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

    // Pseudo-code
    // Create new ShuffledArr variable array and make that equal the result of calling shuffle function
    // with friends being passed to the function

    var shuffledArr = this.shuffleArr(this.state.friends);

    // use setState to cause a re-render
    // per documentation - setState() will always lead to a re-render
    // set friends array to the shuffedArr

    this.setState({friends: shuffledArr});

    // if click already in the clickArr (loss condition),
    // reset score to 0
    // reinitialize clickedArr
    // update message tell user they lost

    if (this.state.clickedArr.includes(id)) {

      this.setState({
        score: 0,
        clickedArr: [],
        message: "you lost - game over"
      });

    // else
    // use setState to re-render
    // push id that was clicked onto clickedArr
    // with score incremented by 1

      } else {

        this.addClick(id)
        this.setState({
          score: this.state.score +1
        }, () => this.checkHighScore());
      }
    }

    // if score gt the topscore
    // update topscore  with this.score
    // use setState to re-render

  checkHighScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score});
    }
  }

    // adds clicks to the clickArr

  addClick =(id) => {
    this.setState({clickedArr: [...this.state.clickedArr, id]})
  }

  // I got this shuffle routine from Stack Overflow
  // I did not come up with this code

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
