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

  };


  shuffleArr = (imagesArr) => {

    console.log(imagesArr);

    for (let i = imagesArr.length - 1; i > 0; i--) {

        console.log("i: " + i);

        let j = Math.floor(Math.random() * (i + 1));

        [imagesArr[i], imagesArr[j]] = [imagesArr[j], imagesArr[i]];

        console.log("j: " + j)
        console.log("------")

    }

    return imagesArr;

}

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
