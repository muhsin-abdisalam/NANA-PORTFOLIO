# Mustafa Electrical Engineering Portfolio

A modern, high-fidelity, and fully responsive portfolio website designed for **Mustafa**, an Electrical Engineering Graduate. This website is built with clean semantic HTML5, modern vanilla CSS3 (supporting responsive layout patterns and glassmorphism styling), and interactive vanilla JavaScript.

## 🚀 Live Demo & Visuals

The project features a full single-page scrolling layout, interactive cards, scroll-reveal transitions, dynamic forms, and a responsive toggle for **Light & Dark Mode** settings.

- **Light Mode Background**: White (`#FFFFFF`) / Slate highlights
- **Dark Mode Background**: Navy (`#0B1120`) / Card Gray (`#111827`)
- **Primary Accent**: Purple (`#6C63FF` / `#8B5CF6`)
- **Secondary Accent**: Red (`#E63946` / `#F87171`)

---

## 🛠️ Technology Stack

- **Structure**: HTML5 (Semantic elements, accessible labels)
- **Styling**: CSS3 (CSS custom properties, CSS Flexbox & Grid, media queries, keyframe animations)
- **Logic**: JavaScript (Vanilla JS, scroll event listeners, Intersection Observer API)
- **Assets & Icons**: Font Awesome (CDN v6.4.0), Google Fonts (Poppins)

---

## 📂 Folder Structure

```text
portfolio/
│
├── index.html          # Main HTML document
├── style.css           # Styling styles (design tokens & CSS grid)
├── script.js           # Theme toggler, ScrollSpy, mobile navigation menu
│
├── images/
│   ├── profile.jpg     # Professional portrait photo
│   ├── about.jpg       # About me section blueprint/tools photo
│   └── transformer.jpg # Featured project image
│
├── files/
│   └── Mustafa_CV.pdf  # Downloadable resume placeholder
│
└── README.md           # Documentation
```

---

## ✨ Features Implemented

1. **Fully Responsive Layout**: Optimizations for mobile, tablet, and desktop viewports.
2. **Dynamic Light/Dark Toggle**: Persisted automatically using `localStorage` and respects system-level settings.
3. **Smooth Scroll Navigation**: Sticky navbar remains readable during scroll and highlights links as the user scrolls past sections (ScrollSpy).
4. **Scroll Reveal Animations**: Implemented using high-performance vanilla JS `IntersectionObservers` (rather than blocking heavy external JS libraries).
5. **Interactive Project Card**: Featuring the *Transformer Design and Performance Analysis* project with clean layout structures.
6. **Skills Board Grid**: Hover effects with 3D translations and custom logo styling for AutoCAD Electrical.
7. **Contact Form Validation**: Form submission intercepts default actions to validate fields and render feedback notifications.
8. **Back to Top Handler**: Fades into view when scroll surpasses 500px and smoothly scrolls the user back to the top of the viewport when clicked.

---

## 💻 Running the Project Locally

To test this project locally on your machine:

1. Clone or download this directory workspace.
2. Double-click `index.html` to open it directly in your browser.
3. Alternatively, launch a lightweight development server inside the `portfolio/` folder (such as VS Code's **Live Server** extension, or `npx live-server` via terminal) to ensure proper paths and offline performance of all script features.

---

## 🌐 Deployment to GitHub Pages

To deploy this portfolio live for employers and clients:

1. Push this folder repository structure to your GitHub account.
2. Go to **Settings** in your repository page.
3. Navigate to **Pages** on the left menu.
4. Under **Build and deployment**, set the Source branch to `main` (or `master`), select `/ (root)` folder (or `/portfolio` if this is a sub-directory), and click **Save**.
5. Wait 1-2 minutes; your website will be live at `https://<your-github-username>.github.io/<repository-name>/`.
