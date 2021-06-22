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
      question: "Dans le cours Intercuturel et Communication, ",
      type: "EI",
      answer1: "je vais vous montrer comment bien présenter aujourd'hui!",
      answer2: "j'espère que mon tour se passera sans encombre...",
    },
    {
      qNum: 2,
      question: "Il y a eu un crime dans le quartier. Ma réaction a été",
      type: "SN",
      answer1: "Je vais devoir faire attention pendant un moment.",
      answer2: "Que s'est-il passé?",
    },
    {
      qNum: 3,
      question: "Si tu sonnes et que le bus ne s'arrête pas",
      type: "EI",
      answer1: "Hein, l'arrêt!",
      answer2: ["Descendre au prochain arrêt pour faire de l'exercice", <br />, "Je dois marcher"],
    },
    {
      qNum: 4,
      question: "Je dois faire une présentation dans quelques jours",
      type: "JP",
      answer1: [
        "Ce jour-là, je ferai les recherches, et ce jour-là",
        <br />,
        "je préparerai le PowerPoint",
      ],
      answer2: [
        "Je vais commencer par la recherche de données",
        <br />,
        "et faire un plan.",
      ],
    },
    {
      qNum: 5,
      question: "Si tu pars en voyage ",
      type: "JP",
      answer1: "Vous devez tout planifier, du restaurant à l'itinéraire.",
      answer2: "On verra sur place!",
    },
    {
      qNum: 6,
      question: "Lorsque mon rendez-vous avec un ami pour jouer n'a pas pu se faire",
      type: "EI",
      answer1: "Je dois appeler un autre ami et jouer !",
      answer2: "😤 😡 🤬",
    },
    {
      qNum: 7,
      question: "Comment s'est passé le film que vous avez regardé hier ?",
      type: "SN",
      answer1:
        'Le jeu d\'acteur de Nicolas Sarkoby d\'hier était fou',
      answer2: "C'était terrifiant",
    },
    {
      qNum: 8,
      question: "Quand je suis meurtri",
      type: "SN",
      answer1: "ne pense à rien",
      answer2: "être en pleine réflexion",
    },
    {
      qNum: 9,
      question: "Si quelqu'un dit \"personne ne t'aime comme ça\"",
      type: "TF",
      answer1: "et alors",
      answer2: "Que devrais-je faire?",
    },
    {
      qNum: 10,
      question: [
        "Mon ami a 30 minutes de retard pour un rendez-vous, ",
        <br />,
        "et les excuses que je veux le plus entendre sont",
      ],
      type: "TF",
      answer1: "Je suis désolé d'être en retard pour ceci et cela",
      answer2: [
        "Je suis vraiment, vraiment désolé...",
        <br />,
        "Je tiendrai ma promesse à partir de maintenant.",
      ],
    },
    {
      qNum: 11,
      question: "Ma réaction à la phrase \"J'ai acheté un iPad\"",
      type: "TF",
      answer1: "Hé, c'est quel genre d'iPad ? Bien?",
      answer2: "A combien ?",
    },
    {
      qNum: 12,
      question: "Sur la route, je trouve mes vêtements préférés",
      type: "JP",
      answer1: "Il faudra que je cherche leurs propriétaires.",
      answer2: "Je pense que j'ai fais la bonne affaire.",
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
