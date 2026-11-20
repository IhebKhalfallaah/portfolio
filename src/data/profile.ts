/** Single source of truth — aligned with CV (Khalfallah Iheb). */
export const profile = {
  fullName: "Khalfallah Iheb",
  initials: "KI",
  photo: "/profile.jpeg",
  title: "Full-Stack Engineer & Tech Lead",
  headlineTag: "FullStack",
  headlineRest: "Spring Boot & React, built on clean architecture.",
  summary:
    "Full-stack engineer and tech lead with 2 years of experience. I design modular Spring Boot back ends and React front ends: design patterns, Redis caching (10 s → 0.5 s queries), Kafka streaming and API-first contracts backed by tests.",
  email: "ihebkhalfallah23@gmail.com",
  phone: "+216 99 722 149",
  phoneDisplay: "(216) 99722149",
  location: "Sousse, Tunisia",
  status: "open_to_work" as const,
  education: "ISSAT Sousse — Engineering Degree in Software Engineering (2020–2023)",
  githubUrl: "https://github.com/IhebKhalfallaah" as string | undefined,
  linkedinUrl: "https://www.linkedin.com/in/ihebkhalfallah" as string | undefined,
  passion: "Maintainable architecture & real-time systems",
  codeSnippet: {
    name: "Khalfallah Iheb",
    role: "Tech Lead · Spring Boot & React",
    passion: "Architecture, design patterns & Kafka",
  },
} as const;
