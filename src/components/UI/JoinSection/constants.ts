import { StaticImageData } from "next/image";
import robert_fox from "../../../../public/images/robert_fox.png";
import cameron_williamson from "../../../../public/images/cameron_williamson.png";
import esther_howard from "../../../../public/images/esther_howard.png";

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "OptimAIze has transformed how I review code. The AI-powered suggestions helped me detect bugs faster and optimize performance, making my workflow smoother and more efficient.",
    person: "Robert Fox",
    avatar: robert_fox,
  },
  {
    testimony:
      "I can't believe how much time OptimAIze has saved my team. Real-time collaborative reviews and contextual insights have improved our code quality and confidence in deployments.",
    person: "Cameron Williamson",
    avatar: cameron_williamson,
  },
  {
    testimony:
      "OptimAIze’s automated analysis caught issues I would have missed manually. The detailed explanations and actionable suggestions have made debugging a breeze.",
    person: "Esther Howard",
    avatar: esther_howard,
  },
  {
    testimony:
      "Real-time code collaboration in OptimAIze has streamlined our review sessions. We can discuss, annotate, and improve code together seamlessly.",
    person: "Cameron Williamson",
    avatar: cameron_williamson,
  },
  {
    testimony:
      "With OptimAIze, understanding complex codebases is easier than ever. AI-powered explanations and optimizations give me confidence to maintain and scale projects effectively.",
    person: "Robert Fox",
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ["Join thousands of", "developers"];
