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
      question: "새학기 자기소개 시간에 나는",
      type: "EI",
      answer1: "E 오늘 나의 매력을 보여주겠어!",
      answer2: "I 무사히 내 차례가 넘어갔으면 좋겠다...",
    },
    {
      qNum: 2,
      question: "친구와의 약속이 파토가 났을 때 나는",
      type: "EI",
      answer1: "E 다른 친구 불러서 놀아야지!",
      answer2: "I 무야~호~",
    },
    {
      qNum: 3,
      question:
        "어쩌다 낯선 곳에 도착했는데 길을 잃었다. 핸드폰도 가지고 있지 않은 난처한 상황",
      type: "EI",
      answer1: "E 아무렇지 않게 다가가 지나가는 사람에게 길을 묻는다.",
      answer2:
        "I 시뮬레이션 다섯번 정도 돌려보고 지나가는 사람에게 길을 묻는다.",
    },
    /*수정필요*/
    {
      qNum: 5,
      question: "이전 질문에 대해 나는",
      type: "SN",
      answer1: "S 내가 핸드폰도 없이 낯선 곳에서 길을 잃을 수 있나..?",
      answer2: "N 오 내가 낯선 곳에 도착했나보다.",
    },
    {
      qNum: 6,
      question: "잠에 들기 전에 나는",
      type: "SN",
      answer1: "S 걱정 또는 현실적인 상상을 하다가 잠에 든다.",
      answer2: "N 현실에서 절대 일어날 일이 없는 상상을 하곤 한다.",
    },
    {
      qNum: 4,
      question: '"어제 본 드라마 어땠어?"라는 질문에 나는',
      type: "SN",
      answer1:
        '"어제 주석경이 천서진 사무실에서 지뢰찾기를 하는데..."구체적으로 대답한다.',
      answer2: '"N 어제 엄청 재밌었어" 단순하게 대답한다.',
    },
    {
      qNum: 7,
      question: '누군가 당신에게 "이러면 아무도 너 안좋아해"라고 말한다면',
      type: "TF",
      answer1: "T 어쩌라고",
      answer2: "F 어쩌라고ㅠㅠㅠㅠㅠㅠㅠㅠ",
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
      question:
        '"나 아팠는데도 꾹 참고 알바해서 아이패드 샀어"라는 말에 나의 질문은',
      type: "TF",
      answer1: "T 헐 아이패드 어때? 좋아?",
      answer2: "F 헐 어디 아팠어? 지금은 괜찮아?",
    },
    {
      qNum: 10,
      question: "당신이 여행을 간다면",
      type: "JP",
      answer1: "J 당연히 맛집부터 시간까지 루트를 다 계획해놔야지",
      answer2: "P 내 발걸음이 닿는 곳이 내 여행길!",
    },
    {
      qNum: 11,
      question: "개인 발표 과제를 받은 나는",
      type: "JP",
      answer1:
        "J 이 날은 자료조사 하고, 저 날은 ppt만들어야겠다. 계획을 짜야 틀이 잡히지",
      answer2: "P 과제 좀 해볼까? 자료조사부터 해보면서 틀을 잡아가야겠다. ",
    },
    {
      qNum: 12,
      question: "다음을 고르시오3",
      type: "JP",
      answer1: "J",
      answer2: "P",
    },
  ];

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
    var result = "";
    mbti["EI"] >= 2 ? (result += "E") : (result += "I");
    mbti["SN"] >= 2 ? (result += "S") : (result += "N");
    mbti["TF"] >= 2 ? (result += "T") : (result += "F");
    mbti["JP"] >= 2 ? (result += "J") : (result += "P");

    return <Result id={result} />;
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
