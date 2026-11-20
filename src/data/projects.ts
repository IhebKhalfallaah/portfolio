export type RepoItem = {
  name: string;
  language: string;
  langColor: string;
  updated: string;
  public?: boolean;
};

export type PinnedProject = {
  name: string;
  description: string;
  tags: string[];
  language: string;
  langColor: string;
  stars: number;
  forks: number;
  demoUrl?: string;
};

export const repositories: RepoItem[] = [
  {
    name: "IhebKhalfallaah/YourHome_Backend",
    language: "Java",
    langColor: "#b07219",
    updated: "recently",
  },
  {
    name: "IhebKhalfallaah/YourHome",
    language: "TypeScript",
    langColor: "#3178c6",
    updated: "recently",
  },
  {
    name: "IhebKhalfallaah/kafka-streams-offer",
    language: "Java",
    langColor: "#b07219",
    updated: "recently",
  },
];

/** Stars/forks are kept at 0 until real numbers are filled in — never invent them. */
export const pinnedProjects: PinnedProject[] = [
  {
    name: "YourHome — Tounes Abroad",
    description:
      "Community platform for Tunisians abroad: Spring Boot 4 modular monolith (20 modules, 28 ADRs, ArchUnit), Keycloak, STOMP live updates, React + TypeScript web app and Expo mobile app.",
    tags: ["Spring Boot", "React", "TypeScript", "Keycloak", "Architecture"],
    language: "Java",
    langColor: "#b07219",
    stars: 0,
    forks: 0,
    demoUrl: "https://github.com/IhebKhalfallaah/YourHome_Backend",
  },
  {
    name: "kafka-streams-offer-arena",
    description:
      "Real-time trading pipeline: Kafka Streams scores offers (KTable join, exactly-once) and Spring Boot streams results over SSE to a live React dashboard. One-command Docker Compose.",
    tags: ["Kafka Streams", "Spring Boot", "SSE", "React"],
    language: "Java",
    langColor: "#b07219",
    stars: 0,
    forks: 0,
    demoUrl: "https://github.com/IhebKhalfallaah/kafka-streams-offer",
  },
  {
    name: "heartscan-ecg-ischemia",
    description:
      "2-lead ECG classification (healthy / angina / infarction): Butterworth filtering, Pan-Tompkins, entropy features and SVM, served by a Flask web app.",
    tags: ["Python", "scikit-learn", "Flask", "Healthcare AI"],
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    forks: 0,
    demoUrl: "https://github.com/IhebKhalfallaah/ECG-Signal-Prediction-",
  },
  {
    name: "tunisian-licence-plate",
    description:
      "Detects, reads and blurs Tunisian plates: ONNX CNN + YOLOv5 + EasyOCR in a Flask app, results stored in MySQL, Dockerized.",
    tags: ["Python", "ONNX", "YOLOv5", "OCR", "Flask"],
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    forks: 0,
    demoUrl: "https://github.com/IhebKhalfallaah/tunisianlicenceplate",
  },
  {
    name: "nera-arabic-ner",
    description:
      "FastAPI service serving a fine-tuned XLM-RoBERTa that tags people, places and organizations in Arabic text (F1 0.80). Dockerized and tested.",
    tags: ["Python", "FastAPI", "Transformers", "NLP"],
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    forks: 0,
    demoUrl: "https://github.com/IhebKhalfallaah/NERA",
  },
  {
    name: "parking-dynamic-pricing",
    description:
      "CNN-LSTM + XGBoost occupancy forecasting turned into a 7-day × 24-hour demand-based price grid by a FastAPI REST API.",
    tags: ["Python", "TensorFlow", "XGBoost", "FastAPI"],
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    forks: 0,
    demoUrl: "https://github.com/IhebKhalfallaah/PricePredictionSystem",
  },
];
