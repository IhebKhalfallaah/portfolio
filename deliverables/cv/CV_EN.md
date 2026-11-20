# Iheb Khalfallah

Full-Stack Software Engineer | Java, Spring Boot, React
Sousse, Tunisia | +216 99 722 149 | ihebkhalfallah23@gmail.com | linkedin.com/in/ihebkhalfallah | github.com/IhebKhalfallaah

## Profile

Full-stack software engineer and technical lead with 2 years of professional experience building Java/Spring Boot back ends and React front ends. Focused on application design and architecture: modular monoliths, domain events, design patterns, Redis caching, event-driven systems with Apache Kafka, and API-first contracts enforced by automated tests. Strong applied machine learning background (signal processing, computer vision, NLP, reinforcement learning), with models delivered behind production-style APIs.

## Skills

- Back end: Java 17/21, Spring Boot 3/4, Spring Security, Keycloak, OAuth2/OIDC, JWT, Spring Kafka, Spring Data JPA, MapStruct, REST APIs, OpenAPI (springdoc), Server-Sent Events, STOMP/WebSocket, Python, FastAPI, Flask
- Front end: React 18, TypeScript, Vite, Tailwind CSS, shadcn/Radix UI, TanStack Query, React Router, React Native (Expo), Next.js
- Architecture and design: modular monolith, domain events, Architecture Decision Records (ADRs), API-first contracts, design patterns (Strategy, Facade, Command, Repository, DTO), ArchUnit boundary tests, event-driven architecture
- Data, messaging and caching: Apache Kafka, Kafka Streams (KStream/KTable, exactly-once), Redis caching, Microsoft SQL Server, MySQL, Flyway, Alembic, MinIO
- Machine learning: scikit-learn, TensorFlow/Keras, PyTorch, Hugging Face Transformers, XGBoost, LightGBM, ONNX Runtime, EasyOCR, YOLOv5, DQN/A2C reinforcement learning, LLM and RAG integration (Ollama, Apache Lucene)
- DevOps and quality: Docker, Docker Compose, Caddy, GitHub Actions, GitLab CI/CD (GitLab Runner), JUnit 5, Testcontainers, JaCoCo, Vitest, Testing Library, Playwright, pytest

## Experience

### Tech Lead - Java / Spring Boot | Matrixcell Business, Sousse, Tunisia | 07/2025 - Present

- Lead a team of 3 to 5 engineers and own the technical design and architecture of its Spring Boot services: module boundaries, design patterns, API contracts and code quality standards.
- Introduced Redis caching on slow, frequently executed SQL queries, cutting their response time from 10 s to 0.5 s (20x faster).
- Drive event-driven, real-time features with Apache Kafka and Kafka Streams, and the integration of LLM and RAG capabilities (document indexing, natural-language-to-SQL assistance) into business services.

### Java Developer - Spring Boot | Matrixcell Business, Sousse, Tunisia | 01/2025 - 06/2025

- Designed and built REST APIs with Java and Spring Boot for business applications, applying layered architecture, SOLID principles and design patterns.
- Set up GitLab CI/CD pipelines (GitLab Runner) automating build, test and deployment stages.

### Data Scientist | Matrixcell Business, Sousse, Tunisia | 01/2024 - 12/2024

- Built machine learning and deep learning solutions for healthcare, computer vision and fog computing, from prototype to deployable service: ECG ischemia detection, licence plate recognition and facial recognition.

## Projects

### YourHome / Tounes Abroad - Community Platform | 2026 - Present
Java 21, Spring Boot 4, React, TypeScript, Expo, Keycloak, SQL Server | github.com/IhebKhalfallaah/YourHome_Backend

- Architected a Spring Boot modular monolith with 20 domain modules (jobs, housing, events, messaging, moderation, live audio) whose boundaries are enforced by ArchUnit tests and documented in 28 ADRs.
- Applied domain events for side effects, a Strategy registry for reportable content, Command objects for moderation and a read Facade for admin views.
- Keycloak security (OAuth2), rate limiting (Bucket4j), Flyway migrations, MinIO storage, real-time delivery over STOMP/WebSocket and LiveKit audio.
- Built the React + TypeScript web app (TanStack Query, Tailwind, shadcn/ui) with API types generated from the committed OpenAPI contract, plus an Expo mobile app sharing the same backend.
- Quality: Testcontainers integration tests, JaCoCo coverage, Vitest, Playwright end-to-end tests with accessibility checks, GitHub Actions CI; production on Docker Compose behind Caddy.

### Kafka Streams Offer Arena - Real-Time Trading Pipeline | 2025
Java 17, Spring Boot 3, Kafka Streams, React, Docker | github.com/IhebKhalfallaah/kafka-streams-offer

- Designed an event-driven pipeline in which price and offer generators publish to a 2-broker Kafka cluster and a Kafka Streams app re-keys offers, joins them with a price KTable and scores them for profit.
- Enabled exactly-once processing (exactly_once_v2) and kept the best accepted order per SKU with a stateful reduce.
- Bridged Kafka topics to a live React dashboard through a Spring Boot Server-Sent Events gateway; the whole stack starts with one Docker Compose command.

### HeartScan AI - ECG Ischemia Prediction | 2025
Python, scikit-learn, SciPy, wfdb, Flask | github.com/IhebKhalfallaah/ECG-Signal-Prediction-

- Classified 2-lead ECG recordings (healthy, angina, infarction) with Butterworth filtering, Pan-Tompkins QRS detection, entropy features and an SVM with majority voting, served through a Flask web app with unit and end-to-end tests.

### Tunisian Licence Plate Recognition | 2024
Python, Flask, ONNX, YOLOv5, EasyOCR, MySQL | github.com/IhebKhalfallaah/tunisianlicenceplate

- Built a Flask web app and REST API that detects plates (custom CNN), splits them around the Arabic word for Tunis (YOLOv5), reads both sides with OCR, blurs plates for privacy and stores results in MySQL.

### FaceNet Facial Recognition | 2024
Python, TensorFlow, FaceNet

- Implemented one-shot identity verification using FaceNet embeddings and deep metric learning.

### NERA - Arabic Named Entity Recognition API | 2022
Python, FastAPI, Hugging Face Transformers, Docker, pytest | github.com/IhebKhalfallaah/NERA

- Fine-tuned an XLM-RoBERTa model on ANERCorp (overall F1 0.80) and served it through a tested, Dockerized FastAPI service.

### Parking Dynamic Pricing System | 2023
Python, TensorFlow, XGBoost, FastAPI, Docker, pytest | github.com/IhebKhalfallaah/PricePredictionSystem

- Forecast 7-day occupancy with a CNN-LSTM (MAE 3.5 points), refined it to hourly with XGBoost (R2 0.98) and exposed a 7 x 24 demand-based price grid through a FastAPI REST API.

## Education

### Engineering Degree in Software Engineering | ISSAT Sousse, Tunisia | 09/2020 - 10/2023
### Preparatory Cycle, Mathematics, Physics and Computer Science | ISSAT Sousse, Tunisia | 09/2018 - 06/2020
### Baccalaureate in Mathematics | 2018

## Languages

Arabic (native) | French (fluent) | English (advanced) | German (basic)
