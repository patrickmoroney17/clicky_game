import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

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
    // Create ShuffleArr variable array and make that equal the result of calling shuffle function with
    // friends being passed to the function

    // set the friends imageArr = to the shuffledArr variable

    // use setState to cause a re-render
    // per documentation - setState() will always lead to a re-rendered  

    // register picture clicks and add them to the clickedArr
    
    // if click already in the clickArr (loss condition),
    // reset score to 0
    // reinitialize clickedArr
    // update message tell user they lost

    // else
    // increment score by 1
    // call shuffleArr and reshuffle friends

    // if score gt the topscore
    // update topscore  with this.score
    
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
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(picture => (
          <FriendCard
            clickPicture={this.clickPicture}
            id={picture.id}
            key={picture.id} // to get rid of unique key prop warning
            name={picture.name}
            image={picture.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
