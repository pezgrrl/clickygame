import React from "react";
import "./QueenCard.css";

const QueenCard = props => (
  <div className="card">
  <div className="img-container">
      <a onClick={() => props.selectQueen(props.queenName)} 
          className={props.currentScore === 0 ? "imgStyle imgStylePrevious" : "imgStyle"}>
          <img className="cusImg" alt={props.queenName} src={props.image} />
      </a>
  </div>
</div>
);

export default QueenCard;