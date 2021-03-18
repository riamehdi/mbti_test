import React from "react";
import AddThis from "./AddThis";
const Result = ({ result, description }) => {
  return (
    <div className="home__container">
      <h3 className="home__title">MBTI test</h3>
      <div className="result__container">
        <h4>{result}</h4>
        <p>{description}</p>
        <AddThis />
      </div>
    </div>
  );
};

export default Result;
