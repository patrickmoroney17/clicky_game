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

    var ShuffledArr = this.shuffleArr(friends);

    // use setState to cause a re-render
    // per documentation - setState() will always lead to a re-render
    // set friends array to the shuffedArr

    this.setState({friends: ShuffledArr});

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
        this.setState({
          clickedArr: this.state.clickedArr.push([id]), 
          score: this.state.score +1,
        });
      }

    // if score gt the topscore
    // update topscore  with this.score
    // use setState to re-render

    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.topScore});
    }
    
  }


  shuffleArr = function(imagesArr) {

    console.log(imagesArr);

    for (let i = imagesArr.length - 1; i > 0; i--) {

        // console.log("i: " + i);

        let j = Math.floor(Math.random() * (i + 1));

        [imagesArr[i], imagesArr[j]] = [imagesArr[j], imagesArr[i]];

        // console.log("j: " + j)
        // console.log("------")

    }

    return imagesArr;

  }

  render() {
    return (
      <div className="container">

        <Title>Friends List</Title>

        <p className = "score">
            Score: {this.state.score} -- TopScore: {this.state.topScore}
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
