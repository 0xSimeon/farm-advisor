# Product Requirements Document

## Product Name
FarmLite Advisory

## Version
V1.0 (MVP)

---

## 1. Product Overview

FarmLite Advisory is a lightweight digital advisory tool that helps smallholder farmers estimate fertilizer requirements based on crop type and land size.

The MVP must be:

- Visually modern
- Agriculture-themed
- Mobile-first
- Client-side only
- Deployable on Vercel

Use frontend-design skill

The visual direction MUST be inspired by:

Refarm Branding – Agriculture Identity  
https://www.behance.net/gallery/242081695/Refarm-Branding-Agriculture-Logo-Brand-Identity  

Agriculture & Farm Management Website  
https://www.behance.net/gallery/243534429/Agriculture-Farm-Management-Website  

Claude must study layout patterns, spacing, typography hierarchy, icon usage, and color palette from these references before designing UI.

UI quality is a core requirement.

---

## 2. Problem Statement

Smallholder farmers often rely on guesswork when planning fertilizer usage.

Existing tools are:
- Poorly designed
- Too complex
- Not mobile-optimized
- Visually untrustworthy

FarmLite Advisory provides simple calculations inside a clean, trustworthy agricultural interface.

---

## 3. Target Users

Primary:
Smallholder farmers (1–5 hectares)

Secondary:
Extension officers  
Agri NGOs  

Design must prioritize clarity and readability.

---

## 4. Core Objectives (MVP)

1. Provide fertilizer estimates
2. Deliver premium agriculture-themed UI
3. Be mobile-first and responsive
4. Maintain clean scalable architecture
5. Prepare for offline capability

---

## 5. Non-Goals (MVP)

- No authentication
- No database
- No AI
- No farm history
- No backend

---

## 6. Functional Requirements

### 6.1 Crop Selection

Supported crops:
- Maize
- Rice
- Cassava
- Potatoes
- Vegetables

Must use styled dropdown consistent with the Behance aesthetic.

Rates stored centrally in config file.

---

### 6.2 Land Size Input

- Numeric input (hectares only)
- Accept decimals
- Reject zero or negative values
- Show inline validation

---

### 6.3 Fertilizer Estimation Engine

Formula:

Required Bags = Recommended Rate × Land Size

Must calculate:
- NPK requirement
- Urea requirement

Logic location:
src/lib/fertilizer.ts

Rates location:
src/lib/fertilizerRates.ts

UI must NOT contain calculation logic.

---

### 6.4 Output Display

Results must be displayed in a styled card showing:

- NPK requirement
- Urea requirement
- Clear units (bags)
- Advisory note

Advisory text:

Estimates are based on general recommendations. Soil testing is advised.

Result section must:
- Use subtle agricultural icons
- Have rounded corners
- Use soft shadows
- Follow visual inspiration from references

---

## 7. UX / UI Requirements

Design must reflect:

Refarm Branding  
https://www.behance.net/gallery/242081695/Refarm-Branding-Agriculture-Logo-Brand-Identity  

Agriculture Farm Management Website  
https://www.behance.net/gallery/243534429/Agriculture-Farm-Management-Website  

Visual Direction:

Color Palette:
- Deep agricultural green
- Muted earth tones
- Soft cream background
- Dark neutral typography

Layout:

- Hero section with subtle farm-themed illustration or abstract pattern
- Centered form card
- Generous whitespace
- Clear typography hierarchy
- Modern rounded inputs
- Prominent call-to-action button
- Soft elevation shadows
- Mobile-first layout

Must not look like:
- Generic admin dashboard
- Plain bootstrap form
- Default Tailwind without styling

Interface should feel:
Trustworthy
Professional
Modern
Agriculture-focused

---

## 8. Technical Requirements

Stack:

- Next.js 16 (App Router)
- TypeScript strict mode
- Tailwind CSS
- Client-side only
- Deploy on Vercel

Architecture:

- Business logic isolated
- Modular components
- Clean separation of concerns
- No unnecessary dependencies

---

## 9. Performance Requirements

- Fast load
- Lightweight bundle
- Mobile optimized
- Accessible contrast ratios

---

## 10. Success Criteria

MVP succeeds if:

- Calculations are correct
- Validation works
- UI aligns with referenced style
- Responsive on mobile
- Deploys successfully on Vercel