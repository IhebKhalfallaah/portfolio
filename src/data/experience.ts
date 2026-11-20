export type ExperienceCommit = {
  hash: string;
  branch: string;
  company: string;
  title: string;
  description: string;
  tags: string[];
  files: number;
  insertions: number;
  deletions: number;
  dateLabel: string;
  side: "left" | "right";
};

export const commits: ExperienceCommit[] = [
  {
    hash: "t9e1d07",
    branch: "HEAD -> tech-lead",
    company: "Matrixcell Business",
    title: "Tech Lead (Java / Spring Boot) @ Matrixcell — Sousse, TN",
    description:
      "Lead a team of 3–5 engineers and own the technical design and architecture of its Spring Boot services: module boundaries, design patterns, API contracts and code-quality standards. Introduced Redis caching on slow, frequently executed SQL queries, cutting response time from 10 s to 0.5 s. Drive Kafka / Kafka Streams real-time features and LLM / RAG integration.",
    tags: ["Architecture", "Spring Boot", "Redis", "Kafka", "Tech Lead"],
    files: 42,
    insertions: 2380,
    deletions: 515,
    dateLabel: "07/2025 – Present",
    side: "right",
  },
  {
    hash: "k7f3a91",
    branch: "java-dev",
    company: "Matrixcell Business",
    title: "Java Developer (Spring Boot) @ Matrixcell — Sousse, TN",
    description:
      "Designed and built Spring Boot REST APIs for business applications using layered architecture, SOLID and design patterns, and automated build, test and deployment with GitLab CI/CD.",
    tags: ["Java", "Spring Boot", "REST APIs", "Design Patterns", "GitLab CI"],
    files: 28,
    insertions: 1840,
    deletions: 312,
    dateLabel: "01/2025 – 06/2025",
    side: "left",
  },
  {
    hash: "m2b8c44",
    branch: "HEAD -> ml",
    company: "Matrixcell Business",
    title: "Data Scientist @ Matrixcell — Sousse, TN",
    description:
      "Built ML and deep-learning solutions for healthcare, computer vision and edge/fog computing, from prototype to deployable service: ECG ischemia detection, licence plate recognition and facial recognition pipelines.",
    tags: [
      "Python",
      "scikit-learn",
      "TensorFlow",
      "Computer Vision",
      "Signal Processing",
    ],
    files: 36,
    insertions: 2104,
    deletions: 428,
    dateLabel: "01/2024 – 12/2024",
    side: "right",
  },
];
