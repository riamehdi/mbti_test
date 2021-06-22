import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
const QuestionDetail = ({
  qNum,
  question,
  type,
  answer1,
  answer2,
  onClick,
  next,
}) => {
  return (
    <div>
      <h3 className="home__title">Test MBTI Snoopy</h3>
      <ProgressBar variant="warning" now={(100 / 12) * qNum} />
      <div className="question__number"> {qNum} / 12</div>
      <div className="question__text">{question}</div>
      <div className="button_container">
        <button className="select_button" onClick={() => onClick(type)}>
          {answer1}
        </button>
        <button className="select_button" onClick={next}>
          {answer2}
        </button>
      </div>
    </div>
  );
};
export default QuestionDetail;
