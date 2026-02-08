# Experiment 3: React Portfolio with Routing

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## 🔗 Live Demo
**[View Live Project on Vercel](https://gautam-portfolio-iota.vercel.app)**

## 📌 Overview
This project is **Experiment 3** for the Full Stack Development curriculum. It extends the previous React portfolio (Exp 2) by implementing **Client-Side Routing** and a professional **Bootstrap UI**.

The application is a Single Page Application (SPA) that allows users to navigate between the **Home** (Profile/Bio) and **Projects** pages without a page reload.

## 🚀 Key Features
- **React Router v6:** Implemented `BrowserRouter`, `Routes`, and `Route` for seamless navigation.
- **Bootstrap 5:** Fully responsive grid layout (`Container`, `Row`, `Col`) and components (`Card`, `Navbar`).
- **Dynamic Routing:** Active link highlighting in the Navigation Bar.
- **Component Architecture:** Modularized code with separate `pages/` and `components/` directories.

## 🛠️ Tech Stack
- **Frontend:** React.js (Vite)
- **Styling:** Bootstrap 5.3
- **Routing:** React Router DOM
- **Deployment:** Vercel

## 📂 Project Structure
```bash
src/
├── assets/         # Static assets (images)
├── components/     # Reusable UI (Navbar.jsx, Footer.jsx)
├── pages/          # Page Views (Home.jsx, Projects.jsx)
├── App.jsx         # Main Routing Setup
├── main.jsx        # Entry point & Bootstrap Import
└── index.css       # Global Styles
