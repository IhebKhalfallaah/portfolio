# Iheb Khalfallah

Ingénieur logiciel Full-Stack | Java, Spring Boot, React
Sousse, Tunisie | +216 99 722 149 | ihebkhalfallah23@gmail.com | linkedin.com/in/ihebkhalfallah | github.com/IhebKhalfallaah

## Profil

Ingénieur logiciel full-stack et tech lead avec 2 ans d'expérience professionnelle dans le développement de back-ends Java/Spring Boot et de front-ends React. Spécialisé en conception et architecture d'applications : monolithe modulaire, événements de domaine, patrons de conception, mise en cache Redis, systèmes événementiels avec Apache Kafka et contrats API-first vérifiés par des tests automatisés. Solide expérience en apprentissage automatique appliqué (traitement du signal, vision par ordinateur, NLP, apprentissage par renforcement), modèles exposés via des API.

## Compétences

- Back-end : Java 17/21, Spring Boot 3/4, Spring Security, Keycloak, OAuth2/OIDC, JWT, Spring Kafka, Spring Data JPA, MapStruct, API REST, OpenAPI (springdoc), Server-Sent Events, STOMP/WebSocket, Python, FastAPI, Flask
- Front-end : React 18, TypeScript, Vite, Tailwind CSS, shadcn/Radix UI, TanStack Query, React Router, React Native (Expo), Next.js
- Architecture et conception : monolithe modulaire, événements de domaine, Architecture Decision Records (ADR), contrats API-first, patrons de conception (Strategy, Facade, Command, Repository, DTO), tests de frontières ArchUnit, architecture événementielle
- Données, messagerie et cache : Apache Kafka, Kafka Streams (KStream/KTable, exactly-once), cache Redis, Microsoft SQL Server, MySQL, Flyway, Alembic, MinIO
- Apprentissage automatique : scikit-learn, TensorFlow/Keras, PyTorch, Hugging Face Transformers, XGBoost, LightGBM, ONNX Runtime, EasyOCR, YOLOv5, apprentissage par renforcement DQN/A2C, intégration LLM et RAG (Ollama, Apache Lucene)
- DevOps et qualité : Docker, Docker Compose, Caddy, GitHub Actions, GitLab CI/CD (GitLab Runner), JUnit 5, Testcontainers, JaCoCo, Vitest, Testing Library, Playwright, pytest

## Expérience

### Tech Lead - Java / Spring Boot | Matrixcell Business, Sousse, Tunisie | 07/2025 - Présent

- Encadrement d'une équipe de 3 à 5 ingénieurs et pilotage de la conception technique et de l'architecture de ses services Spring Boot : frontières de modules, patrons de conception, contrats d'API et standards de qualité du code.
- Mise en place d'un cache Redis sur des requêtes SQL lentes et fréquentes, réduisant leur temps de réponse de 10 s à 0,5 s (20 fois plus rapide).
- Conduite des fonctionnalités temps réel et événementielles avec Apache Kafka et Kafka Streams, et de l'intégration de LLM et de solutions RAG (indexation documentaire, assistance à la génération SQL en langage naturel) dans les services métier.

### Développeur Java - Spring Boot | Matrixcell Business, Sousse, Tunisie | 01/2025 - 06/2025

- Conception et développement d'API REST avec Java et Spring Boot pour des applications métier, en appliquant une architecture en couches, les principes SOLID et des patrons de conception.
- Mise en place de pipelines CI/CD GitLab (GitLab Runner) automatisant les phases de build, de test et de déploiement.

### Data Scientist | Matrixcell Business, Sousse, Tunisie | 01/2024 - 12/2024

- Solutions d'apprentissage automatique et profond pour la santé, la vision par ordinateur et le fog computing, du prototype au service déployable : détection d'ischémie par ECG, reconnaissance de plaques et reconnaissance faciale.

## Projets

### YourHome / Tounes Abroad - Plateforme communautaire | 2026 - Présent
Java 21, Spring Boot 4, React, TypeScript, Expo, Keycloak, SQL Server | github.com/IhebKhalfallaah/YourHome_Backend

- Architecture d'un monolithe modulaire Spring Boot de 20 modules métier (emplois, logement, événements, messagerie, modération, audio en direct), dont les frontières sont vérifiées par des tests ArchUnit et documentées dans 28 ADR.
- Application d'événements de domaine pour les effets de bord, d'un registre Strategy pour les contenus signalables, d'objets Command pour la modération et d'une Facade de lecture pour l'administration.
- Sécurité Keycloak (OAuth2), limitation de débit (Bucket4j), migrations Flyway, stockage MinIO, STOMP/WebSocket, audio LiveKit.
- Développement de l'application web React + TypeScript (TanStack Query, Tailwind, shadcn/ui) avec des types d'API générés depuis le contrat OpenAPI, et d'une application mobile Expo.
- Qualité : tests Testcontainers, couverture JaCoCo, Vitest, tests Playwright avec contrôles d'accessibilité, CI GitHub Actions ; production sous Docker Compose et Caddy.

### Kafka Streams Offer Arena - Pipeline de trading temps réel | 2025
Java 17, Spring Boot 3, Kafka Streams, React, Docker | github.com/IhebKhalfallaah/kafka-streams-offer

- Conception d'un pipeline événementiel où des générateurs de prix et d'offres publient sur un cluster Kafka à 2 brokers ; Kafka Streams joint les offres à une KTable de prix et calcule leur rentabilité.
- Traitement exactly-once (exactly_once_v2) et meilleure commande acceptée par SKU via un reduce avec état.
- Diffusion des topics Kafka vers un tableau de bord React en direct grâce à une passerelle Spring Boot Server-Sent Events ; démarrage de toute la pile en une commande Docker Compose.

### HeartScan AI - Prédiction de l'ischémie par ECG | 2025
Python, scikit-learn, SciPy, wfdb, Flask | github.com/IhebKhalfallaah/ECG-Signal-Prediction-

- Classification d'enregistrements ECG à 2 dérivations (sain, angine, infarctus) par filtrage Butterworth, détection QRS Pan-Tompkins, caractéristiques d'entropie et SVM avec vote majoritaire, exposée via une application web Flask testée (tests unitaires et de bout en bout).

### Reconnaissance des plaques d'immatriculation tunisiennes | 2024
Python, Flask, ONNX, YOLOv5, EasyOCR, MySQL | github.com/IhebKhalfallaah/tunisianlicenceplate

- Application web Flask et API REST qui détecte la plaque (CNN personnalisé), la sépare autour du mot arabe Tunis (YOLOv5), lit les deux parties par OCR, floute la plaque et enregistre les résultats dans MySQL.

### Reconnaissance faciale FaceNet | 2024
Python, TensorFlow, FaceNet

- Vérification d'identité à partir d'un seul exemple par embeddings FaceNet et apprentissage métrique.

### NERA - API de reconnaissance d'entités nommées en arabe | 2022
Python, FastAPI, Hugging Face Transformers, Docker, pytest | github.com/IhebKhalfallaah/NERA

- Fine-tuning d'un modèle XLM-RoBERTa sur ANERCorp (F1 global 0,80), servi par une API FastAPI testée et conteneurisée.

### Système de tarification dynamique de parking | 2023
Python, TensorFlow, XGBoost, FastAPI, Docker, pytest | github.com/IhebKhalfallaah/PricePredictionSystem

- Prévision du taux d'occupation à 7 jours par CNN-LSTM (MAE 3,5 points), affinée à l'heure par XGBoost (R2 0,98), et exposition d'une grille de prix 7 x 24 basée sur la demande via une API REST FastAPI.

## Formation

### Diplôme d'ingénieur en Génie Logiciel | ISSAT Sousse, Tunisie | 09/2020 - 10/2023
### Cycle préparatoire, Mathématiques, Physique et Informatique | ISSAT Sousse, Tunisie | 09/2018 - 06/2020
### Baccalauréat en Mathématiques | 2018

## Langues

Arabe (langue maternelle) | Français (courant) | Anglais (avancé) | Allemand (notions)
