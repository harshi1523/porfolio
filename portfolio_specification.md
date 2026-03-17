# Lakshmi Harshitha - Portfolio Specification

This document provides a comprehensive overview of the components, text content, and design system used in the portfolio website.

---

## 🎨 Design System & Color Palette

The portfolio uses a sophisticated, neutral color palette with a mix of light-gray tones and deep charcoal for high-end professionalism.

### Brand Colors
| Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Arctic** | `#D3D1CE` | Main section backgrounds |
| **Apres** | `#6C6D74` | Accents, icons, and secondary text |
| **Slopes** | `#B3B7BA` | Background containers and highlights |
| **Mountain** | `#262E36` | Dark sections, primary buttons |
| **Midnight** | `#090F15` | Main headings and primary text |
| **White** | `#FFFFFF` | Clear backgrounds and light text |
| **Off-White** | `#F8F9FA` | Skills section background |
| **Charcoal** | `#1A1A1A` | Skill chips and project cards |

- [x] Document detailed typography system (24px/17px)
- [x] Revert "Scaling Application Typography System" (Reset to a1d89ad)
- [x] Increase all main section heading sizes (About, Skills, Projects, Internship, Achievements, Certifications)

### Typography System (Standardized)

The portfolio follows a strict typographic hierarchy combining **Playfair Display** (Serif) for elegance and **Inter** (Sans) for clarity.

| Level | Usage | Font Family | Size | Weight | Details |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Name** | Main Identity | Playfair Display | `clamp(3.5rem, 11vw, 11rem)` | 700 (Bold) | Uppercase, leading-[0.85] |
| **H1** | Page Header | Playfair Display | 52px | 700 (Bold) | Standard main title scale |
| **H2** | Section Titles | Playfair Display | 36px - 60px | 600 (Semi-bold) | Responsive `text-4xl md:text-6xl` |
| **H3 (Serif)** | Academic/Awards | Playfair Display | 24px | 600 (Semi-bold) | Education & Achievements |
| **H3 (Sans)** | Professional/UI | Inter | 24px | 600 (Semi-bold) | Projects, Internship, Certs |
| **Paragraph** | Body Content | Inter | 17px | 400 (Regular) | 1.7 line-height, optimized for reading |
| **Small** | Captions/Labels | Inter | 14px | 400 (Regular) | Years, Issuers, and meta-data |
| **UI Elements** | Nav & Buttons | Inter | 14.5px - 15px | 500 - 600 | Uppercase for buttons, tracking-wide |
| **Pills** | Tech Tags | Inter | 13px | 500 (Medium) | Used in Skills and Projects |

---

### Section-Specific Typography Rules

#### 1. Hero Section
- **Greeting**: "Hello, My name is" → 17px Inter (`text-paragraph`).
- **Subheadline**: 17px regular (mobile) / 20px light (desktop) Inter.
- **CTAs**: 15px bold Inter, Uppercase, 10px px-10.

#### 2. About Me Section
- **Section Title**: 36px - 60px Playfair Display (`text-4xl md:text-6xl`).
- **Body Text**: 17px Inter (`text-paragraph`), 1.7 line-height.

#### 3. Education & Achievements
- **Focus**: High elegance. 
- **Side Headings**: 24px Playfair Display.
- **Detail text**: 14px Inter with wide tracking.

#### 3. Professional Cards (Projects/Internship/Certs)
- **Focus**: Efficiency and clarity.
- **Card Titles**: 24px Inter Bold.
- **Descriptions**: 17px Inter.
- **Tags**: 13px Inter Medium in charcoal capsules.

#### 4. Skills Section
- **Category Labels**: 14px Inter Bold, Uppercase, 0.2em tracking.
- **Tags**: 13px Inter Medium, charcoal background with subtle hover glows.

---

## 🏗️ Component Architecture

The application is structured into the following functional components:

1. **Navbar**: Fixed header with smooth scroll navigation links (Home, About, Projects, Education, Internship, Contact).
2. **Hero**: High-impact introduction with a parallax background effect and primary call-to-actions (CV Download, Contact).
3. **ContactBar**: Vertical floating social links (LinkedIn: https://www.linkedin.com/in/lakshmi-harshitha-, GitHub: https://github.com/harshi1523?tab=repositories, Email).
4. **About**: Two-column layout focusing on professional background and core philosophy.
5. **Education**: Chronological timeline of academic qualifications with pulsing markers.
6. **Skills**: A 3-column grid featuring dark-themed skill "pills" with hover glows and monochrome icons.
7. **Projects**: A symmetrical 3-column layout of dark project cards with anti-gravity shadow effects.
8. **Internship (Experience)**: Detailed professional highlights including virtual internships and full-stack roles.
9. **Certifications**: Grid of badge-style cards showcasing professional credentials.
10. **Achievements**: Highlights of key milestones and recognitions.
11. **ContactForm**: A specialized section for reaching out via a messaging interface.
12. **Footer**: Clean bottom section with copyright and quick links.

---

## 📄 Core Content

### Professional Summary (About)
AI & Machine Learning undergraduate with hands-on experience in machine learning, NLP, and Generative AI. Proficient in Python, data preprocessing, and model training.

### Selected Projects
- **Cloud-Based E-Commerce**: SaaS platform for purchase and rental.
- **House Price Prediction**: XGBoost regressor for property valuation.
- **News Research Tools**: GenAI application for news insight extraction.

### Technical Skill Categories
- **Programming**: Java, Python, C, MySQL, HTML.
- **AI & Data Science**: Machine Learning, NLP, TensorFlow, PyTorch, Scikit-learn, Pandas.
- **Tools**: GitHub, JIRA, Firebase, AI Studio, Lovable AI, Antigravity.

### Experience
- **Software Engineer Intern** at AdeptSK Solutions Private Ltd.
- **Cloud Security Intern** at Zscaler (Zero Trust Architecture).
- **Machine Learning Intern** at SkillDzire.

### Achievements & Activities
- **3rd PRIZE**: Design Development challenge at RJE-Nest (I-TBI).
- **ISRO Event Organizer**: Organized ISRO event as an NSS Volunteer.
- **IEEE CS member**: Former Member - IEEE Computer Society.
- **Hackathon Participation**: Participated in KPRIET Intel AI hackathon.

---

## ✨ Visual Effects
- **Reveal on Scroll**: Most components use a custom `reveal` animation that slides elements up as they enter the viewport.
- **Anti-Gravity Shadows**: Project cards use deep, soft Gaussian shadows to simulate depth.
- **Parallax Typography**: The Hero section features large decorative text that moves slower than the scroll speed.
