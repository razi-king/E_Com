<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0b2e,100:8E2DE2&height=110&text=E-Commerce%20Storefront&fontSize=34&fontColor=FFD700&desc=Responsive%20shop%20UI%20in%20React%20%2B%20Tailwind&descSize=15&descAlignY=78&fontAlignY=40" alt="E-Commerce Storefront"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/React%20Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>
</p>

A responsive fashion store you can actually shop: browse, filter, add to bag and check out.

**Live demo:** https://razi-king.github.io/E_Com/

<!-- Add a screenshot here: docs/screenshot.png -->

## ✨ Features

- **Shop page** with search, category filter, price ranges, sorting and an in-stock toggle. Filters live in the URL, so a filtered view can be shared
- **Product pages** with sale pricing and % off, size and colour selection, a quantity stepper, stock warnings and related products
- **Bag** with quantity controls, savings and a free-delivery threshold, kept in `localStorage` so it survives a refresh
- **Checkout** with field validation (10-digit mobile, 6-digit PIN), payment choice and an order confirmation page with a delivery estimate
- **Cart state** with `useReducer` + Context; stock limits are enforced in the reducer
- **Responsive** from phone to desktop; icons are bundled with the site, not loaded from a CDN
- 404 page and deep links that work on GitHub Pages

## 🗂️ Structure

```
first/src/
├── App.jsx              → routes
├── data/products.js     → catalogue
├── context/CartContext  → cart reducer + localStorage
├── pages/               → Shop, ProductPage, Cart, Checkout, OrderConfirmed, NotFound
└── components/          → Header (search + cart badge), ProductCard, Stars, Home, Footer
```

## ▶️ Run locally

```bash
cd first
npm install
npm run dev      # http://localhost:5173
```

## 🛣️ Roadmap

- [ ] Wishlist
- [ ] Products and orders served from a Spring Boot API
- [ ] Real payments with Razorpay test mode

---

<p align="center">Built by <a href="https://github.com/razi-king">Razi King</a> 👑</p>
