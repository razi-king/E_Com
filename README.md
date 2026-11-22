<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0b2e,100:8E2DE2&height=110&text=E-Commerce%20Storefront&fontSize=34&fontColor=FFD700&desc=Responsive%20shop%20UI%20in%20React%20%2B%20Tailwind&descSize=15&descAlignY=78&fontAlignY=40" alt="E-Commerce Storefront"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/React%20Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>
</p>

A responsive e-commerce storefront front end. It is built mobile-first with Tailwind CSS and a shared layout through React Router.

<!-- Add a screenshot here: docs/screenshot.png -->

## ✨ Features

- **Shared layout** with a header, footer and nested routes (React Router 7 `<Outlet>`)
- **Home page** with hero banners, a product grid, a "News & Products" section and customer testimonials
- **Footer** with company links, quick links, contact details and a newsletter sign-up
- **Fully responsive** using Tailwind breakpoints (`sm` / `md` / `lg`), from phone to desktop
- Login and register routes are stubbed and ready to wire to a backend

## 🗂️ Structure

```
first/
└── src/
    ├── App.jsx              → routes
    ├── components/
    │   ├── Layout.jsx       → header + <Outlet> + footer
    │   ├── Header.jsx
    │   ├── Home.jsx
    │   └── Footer.jsx
    └── image/               → product and banner assets
```

## ▶️ Run locally

```bash
cd first
npm install
npm run dev      # http://localhost:5173
```

## 🛣️ Roadmap

- [ ] Product detail page and cart with Context API
- [ ] Login / register connected to a Spring Boot API
- [ ] Deploy to GitHub Pages

---

<p align="center">Built by <a href="https://github.com/razi-king">Razi King</a> 👑</p>
