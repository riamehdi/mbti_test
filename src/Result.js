import React from "react";
import AddThis from "./AddThis";
import Spinner from "react-bootstrap/Spinner";

const Result = ({ id }) => {
  const MBTI = {
    INTJ: {
      text: "Schroeder",
      description:
        "Vous êtes Shredder qui a un large champ de vision et présente une vision. Il est un peu froid et froid, il a donc du mal à connaître les autres, mais contrairement à son atmosphère froide, c'est une personne ouverte d'esprit et tolérante. Il fait aussi des blagues pleines d'esprit et d'esprit à ses proches ! Vous êtes doué pour atteindre vos objectifs en vous basant sur la confiance en vous ",
      phrase: "Si on s'aime, on s'occupera de tout",
    },
    INTP: {
      text: "Marcie",
      description:
        "Vous êtes Marcy, une brillante stratège. J'aime l'auto-analyse et j'ai tendance à acquérir de l'expérience à travers les livres plutôt qu'à apprendre par la pratique. Il est difficile de prendre une décision car il analyse diversement et précisément. Même les amis proches ne communiquent pas bien et sont capables de les utiliser librement. Calme et réticent, mais bavard sur les centres d'intérêt ! ",
      phrase: "Il n'y a pas de guérison comme un lit douillet",
    },
    ENTJ: {
      text: "Lucy Van Pelt",
      description:
        "Vous êtes Lucy le bulldozer avec un leadership fort. Je suis actif et n'aime pas être à la maison ! Ce n'est pas que j'aime sortir, mais je le fais parce que je ne fais pas confiance aux autres. Un leader charismatique devant les gens, mais un rêveur imaginatif lorsqu'il est seul ! ",
      phrase: "Je m'en fiche si tu m'aimes ou pas",
    },
    ENTP: {
      text: "Snoopy",
      description:
        "Vous êtes Snoopy qui essaie toujours de nouvelles choses. Allez-y au lieu de vous inquiéter ! Il a une force motrice forte, il s'engage donc d'abord et s'inquiète ensuite. Mais il manque le sens de l'humour. Un sentiment d'aventurier décontracté...? Un comédien plein d'esprit qui mène bien les conversations en saisissant l'ambiance ! Il a une excellente capacité à faire face aux crises et c'est un style qui peut bien traverser les situations de crise. ",
      phrase: "Beagle, tu es populaire.",
    },
    INFJ: {
      text: "Linus Van Pelt",
      description:
        "Tu es un incroyable Linus romantique. Je suis comme un lac calme et je déteste les changements soudains. Plutôt que de diriger la conversation, j'ai tendance à céder la direction de la conversation. Parce que vous êtes imaginatif, vous pouvez librement utiliser des analogies et des métaphores ! J'apprécie le temps passé seul et aime réfléchir à des sujets abstraits.  ",
      phrase: [
        "Ne le prends pas trop au sérieux Linus",
        <br />,
        "Je fais aussi beaucoup de bêtises.",
      ],
    },
    INFP: {
      text: "Rerun Van Pelt",
      description:
        "Vous êtes un rêveur, Lee Ren, qui crée un monde idéal. Il a une compréhension profonde et des convictions profondes sur les idéaux qu'il poursuit. Il est généreux avec ceux qui l'entourent, mais il y a un petit mur dans le coin de son cœur. Il est facilement offensé par l'indifférence des autres, et il a beaucoup de sensibilité. J'aime être seul, mais je déteste être seul ! ",
      phrase: [
        "J'ai une philosophie.",
        <br />,
        "si vous rencontrez des difficultés,",
        <br />,
        "un jour, de bonnes choses arriveront.",
      ],
    },
    ENFJ: {
      text: "Frieda",
      description:
        "Vous êtes Frida qui aime collaborer avec les autres. Un philanthrope plein d'humour, généreux et plein d'humanité ! En raison de sa grande empathie pour les autres, il est doué pour mettre ceux qui l'entourent à l'aise. Mais parce que j'aime les gens, je suis sensible aux sentiments des autres, je veux être aimé de tous. ",
      phrase: "J'ai juste besoin d'être à tes côtés",
    },
    ENFP: {
      text: "Franklin",
      description:
        "Vous êtes un Franklin impertinent et positif. Je n'ai pas peur de rencontrer de nouvelles personnes, j'aime être avec d'autres personnes. Il lit bien l'atmosphère et remarque les courants étranges entre les gens, mais il fait semblant de ne pas savoir. De plus, j'ai mes propres objectifs et vision que les autres ne connaissent pas. Bien qu'il existe de nombreux types de personnes, elles sont étonnamment sensibles, délicates et sensibles !",
      phrase: "Le bonheur vient à tous et à tous",
    },
    ISTJ: {
      text: "Sheremy",
      description:
        "Une fois que vous commencez, vous êtes Sheremy, qui va jusqu'à la fin. Il est calme et sérieux, et c'est un style sincère qui fait tout ce qui lui est assigné. J'aime les choses familières et je déteste les environnements inconnus, les changements et les interruptions. C'est une personne honnête qui n'a ni bluff ni exagération, et qui ne ment pas très souvent ! Il manque un peu de créativité, mais il a de la consistance et de la stabilité, ce qui le rend confortable. ",
      phrase: "",
    },
    ISFJ: {
      text: "Charile Brown",
      description:
        "Vous êtes Charlie Brown, une personne douce et coopérative. Je ne me connais pas bien car je peux devenir introverti ou extraverti selon la situation. Il est gentil et attentionné, mais parfois indécis. C'est une personne timide qui accepte presque tout ce qu'il demande, mais a du mal à demander quoi que ce soit aux autres. Il déteste sortir, mais il aime attirer l'attention !",
      phrase: [
        "tu es une personne très adorable,",
        <br />,
        "votre vie sera pleine d'amour.",
      ],
    },
    ESTJ: {
      text: "Voilet Gray",
      description:
        "Réaliste, vous êtes Violet. Il n'hésite pas à exprimer ses sentiments et a clairement ce qu'il aime et n'aime pas. Il jette des paquets sur les gens autour de lui et frappe des os, mais il n'essaie même pas d'inventer des choses pour lui ! C'est un planificateur et il fait très bien les choses. Il est confiant et a un sens aigu du devoir et des responsabilités.",
      phrase: "Vous pouvez tout faire en serrant les dents.",
    },
    ESFJ: {
      text: "Patty",
      description:
        "Sociable et attentionnée, vous êtes Patty. Nous valorisons tellement les relations humaines que nous pouvons recharger notre énergie à travers les relations avec les autres ! Mais je suis aussi une personne qui souffre beaucoup de solitude.. Vous êtes un créateur d'humeur qui ne supporte pas la maladresse et qui parle gentiment ! Il y a aussi beaucoup de gens qui demandent conseil sur leurs préoccupations car ils ont beaucoup de réactions.",
      phrase: "Pense aux souvenirs, ce sont des souvenirs heureux",
    },
    ISTP: {
      text: "Pig-Pen",
      description:
        "Le polyvalent, vous êtes un Pig-Pen. Il a une bonne dextérité et s'intéresse beaucoup aux outils et aux machines. J'ai beaucoup de curiosité, donc je déteste les choses ennuyeuses, et j'aime les sensations fortes ! Il est têtu et a besoin d'explorer par lui-même pour libérer son intuition. Stressé par des règles strictes, je préfère l'improvisation !",
      phrase: [
        "j'irais chercher quelque chose d'amusant",
        <br />,
        "Je cours après quelque chose d'excitant",
        <br />,
        "Je ne peux pas l'arrêter, Charlie Brown",
      ],
    },
    ISFP: {
      text: "Woodstock",
      description:
        "Vous êtes Woodstock avec un talent artistique unique. Il a un esprit pointilleux et délicat, et se blesse facilement. Cependant, il a toujours un style qui ne perd pas sa chaleur et son humilité. Une personne qui aime le présent de la vie et a un côté impulsif. Vous pouvez mieux performer dans une atmosphère détendue que dans une atmosphère de compétition !",
      phrase: "Gagner n'est pas forcément important.",
    },
    ESTP: {
      text: "Peppermint Patty",
      description:
        "Si vous aimez quelque chose d'actif et varié, alors vous avez une galette de menthe poivrée. Il est toujours plein d'énergie et a une personnalité joyeuse. Il n'a pas d'idées préconçues, il voit le monde avec un œil ouvert, et il a un sang-froid sans fin ! Je ne reçois pas beaucoup de stress, et j'ai un fort esprit d'être une diseuse de bonne aventure.",
      phrase: "Une pluie comme celle-ci ne peut pas nous arrêter",
    },
    ESFP: {
      text: "Sally Brown",
      description:
        "Vous êtes une artiste naturelle, qui aime la vie de groupe et aime les ambiances festives ! Les choses inquiétantes s'atténueront avec le temps. Je procrastine et commence tard sur des choses que je ne veux pas faire, mais j'ai tendance à faire des choses que je veux faire tôt. J'ai une très haute estime de moi et j'aime la vie.",
      phrase: ["combien je t'aime", <br />, "essaie de compter"],
    },
  };
  const photo = require(`./img/${id}.png`).default;
  return (
    <div className="home__container">
      <h3 className="home__title">Test MBTI Snoopy</h3>
      <div>Toi...</div>

      <div className="result__container">
        <h4 className="result__title">{MBTI[id].text}</h4>
        <img src={photo} width="150px" alt={MBTI[id].text} />
        <p className="result__description">{MBTI[id].description}</p>
        <div className="result__phrase">
          <div>{MBTI[id].phrase}</div>
          <div>- animation peanuts -</div>
        </div>
        <AddThis />
        <button
          onClick={() => {
            window.location.replace("/");
          }}
        >
          refaire le test
        </button>
        <footer>Created by gotaek</footer>
      </div>
      <div className="splash-screen">
        <Spinner animation="border" className="mr-3" />
        Analyse des résultats...
      </div>
    </div>
  );
};

export default Result;
