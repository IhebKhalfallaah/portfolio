# Profile, CV & Portfolio Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a GitHub profile README, an EN/FR master CV (.md + .docx + verification PDF), and refreshed portfolio data.
**Architecture:** CV content lives once per language in Markdown; one Python script renders each .md to .docx (ATS) and to PDF (page-count check). Portfolio changes are data-only.
**Tech Stack:** Markdown, python-docx, reportlab (scratch venv), TypeScript data files (Next.js 15).
**Spec:** `docs/superpowers/specs/2026-11-20-profile-cv-portfolio-design.md`

## Global Constraints
- Every claim traceable to a public repo README/code, or generic for company work.
- Never mention: `Projects/` folder contents, SqlAI, messagehub, rota, todolist, mattermost, apiGateway.
- Excluded metrics: ECG 92 %, ECG 98.8 % as headline, Kafka 45 %, railway 97.1 %, fake stars/forks.
- CV: single column, headings exactly `Profile/Skills/Experience/Projects/Education` (+Languages) and
  `Profil/Compétences/Expérience/Projets/Formation` (+Langues); dates `MM/YYYY`; plain `-` bullets; ≤ 2 pages.
- Project order: YourHome, Kafka, Railway, HMA-DRL, HeartScan ECG, Licence plates, FaceNet, NERA, Parking pricing.
- Placeholders: `[TO CONFIRM: ...]`.

## Review Focus
- ATS parser on .docx: no tables/text boxes/headers-footers holding contact info → contact in body paragraph.
- FR accents and `—` dashes: use plain ASCII hyphen in bullets/dates; keep accents (UTF-8 safe).
- 2-page limit in both languages (FR runs ~10 % longer) → verify via PDF page count.
- Portfolio build must still type-check after data edits → run `npx tsc --noEmit`.
- Links must point to the account that actually hosts each repo (two accounts).

---

### Task 1: GitHub profile README
**Files:** Create `deliverables/profile/README.md`
- [ ] Write README (headline, summary, grouped skill badges, featured projects table-free list, contact).
- [ ] Verify every repo URL matches `git remote -v` of its folder.

### Task 2: Master CV (EN + FR)
**Files:** Create `deliverables/cv/CV_EN.md`, `CV_FR.md`, scratch `build_cv.py`; outputs `CV_EN.docx`, `CV_FR.docx`, `CV_EN.pdf`, `CV_FR.pdf`
- [ ] Write CV_EN.md, then equivalent CV_FR.md.
- [ ] `build_cv.py <in.md> <out.docx> <out.pdf>`: `# ` → name, first paragraph → contact line, `## ` → heading,
      `### ` → entry title, `- ` → List Bullet, other lines → paragraph. Calibri/Helvetica 10.5 pt, 1.8 cm margins.
- [ ] Run; verify `pdfinfo` reports `Pages: 2` (or 1) for both.
- [ ] Verify docx has zero tables: `len(doc.tables) == 0`.

### Task 3: Portfolio data
**Files:** Modify `src/data/profile.ts`, `src/data/projects.ts`, `src/data/experience.ts`, `src/lib/promptLogic.ts`
- [ ] Rewrite content keeping exported names/types unchanged; stars/forks = 0.
- [ ] Run `npx tsc --noEmit` → no errors.

### Task 4: Questions
**Files:** Create `deliverables/QUESTIONS.md`
- [ ] List every `[TO CONFIRM]` placeholder and open decision.
