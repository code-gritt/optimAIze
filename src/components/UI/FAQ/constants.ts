type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ["Frequently asked", "questions"];
export const mobileHeaderPhrase = ["Frequently", "asked", "questions"];
export const animate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: "How do I create an account with OptimAIze?",
    answer:
      "Sign up using your email or GitHub account. New users receive 100 free credits to start analyzing code immediately.",
  },
  {
    question: "How does OptimAIze ensure the security of my code?",
    answer:
      "All code is encrypted at rest, transmitted over secure channels, and access is controlled via OAuth2 with multi-factor authentication (MFA).",
  },
  {
    question: "Can I collaborate with my team on code reviews?",
    answer:
      "Yes! OptimAIze supports real-time collaboration via WebSockets, allowing your team to review, comment, and analyze code together.",
  },
  {
    question: "How are AI-powered suggestions generated?",
    answer:
      "OptimAIze uses a Retrieval-Augmented Generation (RAG) pipeline with Google Gemini free tier to analyze your code and provide context-aware suggestions and optimizations.",
  },
];
