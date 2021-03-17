import React, { useState } from "react";
import QuestionDetail from "./QuestionDetail";
import Result from "./Result";
const Question = () => {
  const [id, setId] = useState(0);
  const [mbti, setMbti] = useState({
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
  });

  const questions = [
    {
      qNum: 1,
      question: "다음을 고르시오",
      type: "EI",
      answer1: "E",
      answer2: "I",
    },
    {
      qNum: 2,
      question: "다음을 고르시오2",
      type: "EI",
      answer1: "E",
      answer2: "I",
    },
    {
      qNum: 3,
      question: "다음을 고르시오3",
      type: "EI",
      answer1: "E",
      answer2: "I",
    },
    {
      qNum: 4,
      question: "다음을 고르시오",
      type: "SN",
      answer1: "S",
      answer2: "N",
    },
    {
      qNum: 5,
      question: "다음을 고르시오2",
      type: "SN",
      answer1: "S",
      answer2: "N",
    },
    {
      qNum: 6,
      question: "다음을 고르시오3",
      type: "SN",
      answer1: "S",
      answer2: "N",
    },
    {
      qNum: 7,
      question: "다음을 고르시오",
      type: "TF",
      answer1: "T",
      answer2: "F",
    },
    {
      qNum: 8,
      question: "다음을 고르시오2",
      type: "TF",
      answer1: "T",
      answer2: "F",
    },
    {
      qNum: 9,
      question: "다음을 고르시오3",
      type: "TF",
      answer1: "T",
      answer2: "F",
    },
    {
      qNum: 10,
      question: "다음을 고르시오",
      type: "JP",
      answer1: "J",
      answer2: "P",
    },
    {
      qNum: 11,
      question: "다음을 고르시오2",
      type: "JP",
      answer1: "J",
      answer2: "P",
    },
    {
      qNum: 12,
      question: "다음을 고르시오3",
      type: "JP",
      answer1: "J",
      answer2: "P",
    },
  ];
  //여기서부터 막힘 엇박자로 실행 됨
  const onClick = (type) => {
    setMbti({
      ...mbti,
      [type]: mbti[type] + 1,
    });
    next();
  };

  const next = () => {
    setId(id + 1);
  };

  if (id > 11) {
    var str = "";
    mbti["EI"] >= 2 ? (str += "E") : (str += "I");
    mbti["SN"] >= 2 ? (str += "S") : (str += "N");
    mbti["TF"] >= 2 ? (str += "T") : (str += "F");
    mbti["JP"] >= 2 ? (str += "J") : (str += "P");
    console.log(str);
    console.log(mbti);
    return <Result question={str} />;
  }
  return (
    <div className="question__container">
      <QuestionDetail
        qNum={questions[id].qNum}
        question={questions[id].question}
        type={questions[id].type}
        answer1={questions[id].answer1}
        answer2={questions[id].answer2}
        onClick={onClick}
        next={next}
      />
    </div>
  );
};

export default Question;
