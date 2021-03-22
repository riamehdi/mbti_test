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
      answer1: "오늘 나의 매력을 보여주겠어!",
      answer2: "무사히 내 차례 넘어갔으면 좋겠다...",
    },
    {
      qNum: 2,
      question: "동네에서 범죄가 발생했다 나의 반응은",
      type: "SN",
      answer1: "당분간 조심해야겠다",
      answer2: "어떻게 된 일일까?",
    },
    {
      qNum: 3,
      question: [
        "버스를 타고 내려야 하는 상황,",
        <br />,
        "벨을 눌렀는데 버스가 멈추지 않는다면",
      ],
      type: "EI",
      answer1: "기사님 저 내려요!",
      answer2: ["운동할 겸 다음 정거장에 내려서", <br />, "걸어가야겠다ㅎㅎ"],
    },
    {
      qNum: 4,
      question: "개인 발표 과제를 받은 나는",
      type: "JP",
      answer1: [
        "이 날은 자료조사 하고, 저 날은",
        <br />,
        "ppt만들어야겠다. 계획을 짜야 틀이 잡히지",
      ],
      answer2: [
        "과제 좀 해볼까? 자료조사부터 해보면서",
        <br />,
        "틀을 잡아가야겠다. ",
      ],
    },
    {
      qNum: 5,
      question: "여행을 간다면 ",
      type: "JP",
      answer1: "맛집부터 루트까지 다 계획해놔야지",
      answer2: "내 발걸음이 닿는 곳이 내 여행길!",
    },
    {
      qNum: 6,
      question: "친구와의 약속이 파토가 났을 때 나는",
      type: "EI",
      answer1: "다른 친구 불러서 놀아야지!",
      answer2: "무야~호~",
    },
    {
      qNum: 7,
      question: ['"어제 본 드라마 어땠어?"라는 질문에', <br />, "나는"],
      type: "SN",
      answer1:
        '"어제 주석경 연기 미쳤어" 줄거리, 연기 등 구체적인 사실을 얘기한다',
      answer2: [
        '"완전 소름 돋았어..." 내가 느낀 감정에',
        <br />,
        "대해 얘기한다",
      ],
    },
    {
      qNum: 8,
      question: "멍 때린다는 것은 내게",
      type: "SN",
      answer1: "아무런 생각을 하지 않는 것이다",
      answer2: "깊은 생각에 빠지는 것이다",
    },
    {
      qNum: 9,
      question: '누군가 "이러면 아무도 너 안좋아해"라고 말한다면',
      type: "TF",
      answer1: "어쩌라고",
      answer2: "어쩌라고(ㅠㅠㅠㅠㅠㅠㅠㅠ)",
    },
    {
      qNum: 10,
      question: [
        "친구가 약속에 30분 늦은 상황,",
        <br />,
        "내가 더 듣고 싶은 사과는",
      ],
      type: "TF",
      answer1: "이러이러해서 늦었어 미안해",
      answer2: [
        "진짜 진짜 미안해... 나는 죄인이야...",
        <br />,
        "앞으로 약속 잘 지킬게",
      ],
    },
    {
      qNum: 11,
      question:
        '"나 아팠는데도 꾹 참고 알바해서 아이패드 샀어"라는 말에 나의 반응은',
      type: "TF",
      answer1: "헐 아이패드 어떤거? 좋아?",
      answer2: "어디 아팠어? 지금은 괜찮아?",
    },
    {
      qNum: 12,
      question: "길을 가다가 마음에 드는 옷을 발견했을 때 나는",
      type: "JP",
      answer1: "나중에 더 찾아보고 사든가 말든가 해야겠다",
      answer2: "가격도 나름 괜찮은 것 같은데 바로 사야지",
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
