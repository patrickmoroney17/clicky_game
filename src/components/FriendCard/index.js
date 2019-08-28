import React from "react";
import "./style.css";

function FriendCard(props) {
  return (

    <div className="card">

      <div className="img-container">

        <img className="image"
          alt={props.name} 
          src={props.image}
          onClick={() => props.clickPicture(props.id)}/>

      </div>

    </div>

  );
}

export default FriendCard;