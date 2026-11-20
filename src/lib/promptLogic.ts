/**
 * Keyword-based replies for the floating assistant (no API).
 */
export type PromptMessage = { role: "user" | "assistant"; text: string };

const DEFAULT_REPLY =
  "Try asking about Spring Boot, React, architecture, Kafka, projects, experience, or contact.";

const rules: { test: (q: string) => boolean; reply: string }[] = [
  {
    test: (q) => /\b(hi|hello|hey|yo)\b/.test(q),
    reply:
      "Hi — ask me about Iheb's full-stack work (Spring Boot, React, Kafka), his projects, or how to reach him by email.",
  },
  {
    test: (q) => /\b(who|about you|intro)\b/.test(q),
    reply:
      "Iheb is a full-stack engineer and tech lead (2 yrs) at Matrixcell: Spring Boot back ends, React front ends, design patterns, Redis caching and Kafka, with a strong applied-ML background.",
  },
  {
    test: (q) =>
      /\b(skill|stack|tech|java|spring|react|typescript|redis|kafka|python|docker|ml|llm)\b/.test(
        q
      ),
    reply:
      "Core stack: Java 21, Spring Boot, Spring Security + Keycloak, React + TypeScript, Kafka / Kafka Streams, Redis, SQL Server, Docker, GitHub Actions / GitLab CI — plus Python, FastAPI and ML.",
  },
  {
    test: (q) => /\b(project|portfolio|built|yourhome|ecg|yolo|sse|ner)\b/.test(q),
    reply:
      "Highlights: YourHome (Spring Boot modular monolith + React + Expo), a Kafka Streams + SSE trading pipeline, ECG ischemia prediction, Arabic NER and licence-plate recognition — see the Projects section.",
  },
  {
    test: (q) => /\b(work|job|experience|career|cv|resume|matrixcell)\b/.test(q),
    reply:
      "Tech Lead (Java / Spring Boot) since 07/2025, leading 3–5 engineers, after starting as a Java Developer in 01/2025; Data Scientist 01/2024 – 12/2024 — all at Matrixcell, Sousse. Details in Experience.",
  },
  {
    test: (q) =>
      /\b(contact|email|hire|freelance|collab|reach|phone)\b/.test(q),
    reply:
      "Email ihebkhalfallah23@gmail.com or use the contact form — based in Sousse, Tunisia.",
  },
  {
    test: (q) => /\b(where|location|tunis|sousse)\b/.test(q),
    reply: "He's based in Sousse, Tunisia (+216).",
  },
];

export function replyToPrompt(raw: string): string {
  const q = raw.trim().toLowerCase();
  if (!q) return "Type a question, or try: “What’s your Java stack?”";

  for (const { test, reply } of rules) {
    if (test(q)) return reply;
  }

  return DEFAULT_REPLY;
}
