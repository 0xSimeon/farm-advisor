# Development Workflow

## 1. Source of Truth

PRD.md is the primary product authority.

All implementation decisions must align strictly with PRD.md.

No feature should be added outside PRD scope without explicit approval.

---

## 2. Development Phases

Development must follow structured phases:

Phase 1 — Business Logic  
Phase 2 — UI Components  
Phase 3 — Page Assembly  
Phase 4 — Visual Refinement  
Phase 5 — Offline Preparation  

Do not build everything at once.

Each phase must be completed and reviewed before moving to the next.

---

## 3. Architecture Rules

- Do not mix business logic inside UI components.
- Keep calculation logic inside src/lib.
- Keep configuration centralized.
- Keep components small and modular.
- No unnecessary third-party dependencies.
- No full-project refactors without instruction.

---

## 4. Git Discipline

After completing each phase:

1. Run the development server locally.
2. Review implementation against PRD.md.
3. Commit changes with a clear message.
4. Push to GitHub.

Example:

git add .
git commit -m "Implement fertilizer calculation engine"
git push

---

## 5. Scope Control

If an improvement is identified that is not in PRD:

- Propose it first.
- Explain impact.
- Wait for approval before implementation.

Do not expand scope silently.

---

## 6. Review Step Before Deployment

Before deploying:

- Compare implementation against PRD.md.
- List any deviations.
- Fix deviations before release.

---

## 7. Claude Interaction Rules

When working with Claude:

- Use plan mode before implementation.
- Implement in small controlled phases.
- Do not ask Claude to build the entire app in one prompt.
- Ask for summaries before coding.
- Maintain architectural separation at all times.