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

### Typography (Standardized Hierarchy)
- **H1 (Main Titles)**: 52px, Playfair Display (Serif), Bold 700.
- **H2 (Section Titles)**: 42px, Playfair Display (Serif), Semi-bold 600.
- **H3 (Subsection/Card Titles)**: 34px, Playfair Display (Serif), Semi-bold 600.
- **Paragraph text**: 17px, Inter (Sans-serif), Normal 400, 1.7 Line-height.
- **Small Text/Nav/Buttons**: 14px-15px, Inter (Sans-serif).

---

## 🏗️ Component Architecture

The application is structured into the following functional components:

1. **Navbar**: Fixed header with smooth scroll navigation links (Home, About, Projects, Education, Internship, Contact).
2. **Hero**: High-impact introduction with a parallax background effect and primary call-to-actions (CV Download, Contact).
3. **ContactBar**: Vertical floating social links (LinkedIn, GitHub, Email).
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
