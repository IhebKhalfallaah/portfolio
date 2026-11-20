# Design — GitHub profile, bilingual master CV, portfolio content

Date: 2026-11-20

## Intent
Position Iheb Khalfallah for **full-stack roles (React + Spring Boot, architecture-focused)**. Produce a *master* CV
that holds every skill, experience and project, to be trimmed per job application. All claims must be traceable to
the public code or be safe, generic statements about company work.

## Goals
- GitHub profile README that a recruiter scans in under 30 s.
- Master CV in English and French, equivalent content, ATS-safe, max 2 pages each.
- Portfolio text refreshed in place, layout untouched.

## Non-goals
- No change to portfolio components, styling or layout.
- No publishing, pushing or committing.

## Anti-goals (failure even if it "works")
- Any confidential company code, repo name, module name or internal detail exposed (the local `Projects/` folder is
  company code: auth, messagehub, mattermost, rota, todolist, SqlAI, apiGateway).
- Metrics or techniques the code does not support (old CV claims: ECG "92 %", plates "TensorFlow", fog "A2C only",
  railway "RF 97.1 % / 10 classes", Kafka "45 % faster"; portfolio fake star/fork counts).

## Constraints
- ATS: single column, standard headings (Profile/Skills/Experience/Projects/Education; Profil/Compétences/
  Expérience/Projets/Formation), no tables/text boxes/icons/graphics, plain bullets, consistent dates (MM/YYYY).
- Company name *Matrixcell Business* is already public in the old CV; kept, flagged for confirmation.
- Unknowns use visible placeholders `[TO CONFIRM: ...]`.

## Approaches (chosen: 2)
1. Markdown only in chat: fastest, but formatting rebuilt for every application.
2. **Real files: profile README, .docx + .md CVs, portfolio data files edited in place** — easiest per-job tailoring,
   reliable ATS parsing, portfolio updates appear in the existing design. *Chosen by Iheb.*
3. LaTeX CVs: best typography, slowest to tailor.

## Decided with Iheb
- Target: full-stack roles; lead with YourHome and Kafka.
- Master CV contains everything; tailoring happens per application.
- Project order (overrides "preserve old order"): YourHome → Kafka Streams Offer Arena → Railway fault diagnosis →
  HMA-DRL fog (CHM) → HeartScan ECG → Licence plates → FaceNet → NERA → Parking dynamic pricing.

## My calls (correctable)
- RAG-to-SQL (company `SqlAI`) moves into Experience as generic "LLM/RAG integration" bullets, not a project.
- FaceNet stays on CV as text-only (no repo found); excluded from README/portfolio.
- `Projects/` excluded everywhere.
- Redis caching claimed only in Experience, generically (no public evidence); YourHome Redis mentioned only as
  LiveKit infrastructure if at all.
- Portfolio: remove fabricated stars/forks (set 0 / hide not possible without layout change → set to 0), fix
  descriptions and metrics, update `promptLogic.ts` answers that repeat old claims.
- Metrics used only when present in repo READMEs/notebooks.

## Deliverables / locations
- `Portofolio/deliverables/profile/README.md`
- `Portofolio/deliverables/cv/CV_EN.md`, `CV_FR.md`, `CV_EN.docx`, `CV_FR.docx` (generated with python-docx;
  page count verified by converting to PDF)
- `Portofolio/src/data/profile.ts`, `projects.ts`, `experience.ts`, `src/lib/promptLogic.ts`
- `Portofolio/deliverables/QUESTIONS.md` — open information gaps

## Left to the builder
- Exact wording, bullet selection to fit 2 pages, badge choices.
