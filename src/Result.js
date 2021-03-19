import React from "react";
import AddThis from "./AddThis";
import loading from "./img/loading.png";

const Result = ({ id }) => {
  const MBTI = {
    INTJ: {
      text: "Schroeder(슈로더)",
      description: "",
      phrase: "",
    },
    INTP: {
      text: "Marcie(마시)",
      description: "",
      phrase: "",
    },
    ENTJ: {
      text: "Rucy(루시)",
      description: "",
      phrase: "",
    },
    ENTP: {
      text: "Snoopy(스누피)",
      description: "",
      phrase: "",
    },
    INFJ: {
      text: "Linus(라이너스)",
      description: "",
      phrase: "",
    },
    INFP: {
      text: "Rerun",
      description: "",
      phrase: "",
    },
    ENFJ: {
      text: "Frieda(프리다)",
      description: "",
      phrase: "",
    },
    ENFP: {
      text: "Franklin(프랭클린)",
      description: "",
      phrase: "",
    },
    ISTJ: {
      text: "Sheremy(쉐르미)",
      description: "",
      phrase: "",
    },
    ISFJ: {
      text: "Charile Brown(찰리 브라운)",
      description: "",
      phrase: "",
    },
    ESTJ: {
      text: "Voilet(바이올렛)",
      description: "",
      phrase: "",
    },
    ESFJ: {
      text: "Patty(패티)",
      description: "",
      phrase: "",
    },
    ISTP: {
      text: "Pigpen(픽펜)",
      description: "",
      phrase: "",
    },
    ISFP: {
      text: "Woodstock(우드스톡)",
      description: "",
      phrase: "",
    },
    ESTP: {
      text: "Peppermint Patty(페퍼민트 패티)",
      description: "",
      phrase: "",
    },
    ESFP: {
      text: "Sally(샐리)",
      description: "",
      phrase: "",
    },
  };
  const photo = require(`./img/${id}.png`).default;
  return (
    <div className="home__container">
      <h3 className="home__title">스누피 MBTI 테스트</h3>
      <div>당신은...</div>

      <div className="result__container">
        <h4 className="result__title">
          {id}
          <br />
          {MBTI[id].text}
        </h4>
        <img src={photo} width="150px" alt={id} />
        <p className="result__description">{MBTI[id].description}</p>
        <div className="result__phrase">{MBTI[id].phrase}</div>
        <AddThis />
        <button
          onClick={() => {
            window.location.replace("/");
          }}
        >
          테스트 다시하기
        </button>
      </div>
      <div className="splash-screen">결과 분석중...</div>
    </div>
  );
};

export default Result;
