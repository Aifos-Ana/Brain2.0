# Brain2.0 Frontend

## Brain2.0 — Your Personal OS

> Frontend of the web application for personal finance and productivity management. Responsible for providing a modern, responsive, and interactive UI that consumes the backend API.

### 🧩 Tech Stack

- **React + TypeScript** – Modern, type-safe frontend
- **TailwindCSS** – Fast and responsive styling
- **React Router DOM** – Page navigation
- **Zustand** – Lightweight state management
- **Axios** – Backend communication
- **Vite** – Fast build tool

### ⚙️ Key Features

- **Authentication:** Login/Register via JWT
- **Interactive Dashboard** with charts and statistics
- **CRUD** for Expenses and Incomes
- **CRUD** for Tasks/Habits
- **Dark/Light** Mode
- **Export reports** (CSV/PDF)

## 🚀 Project Setup
1. Clone the repository

```bash
git clone https://github.com/Aifos-Ana/Brain2.0.git
cd frontend
```

2. Install dependencies

```bash
npm install
```

3. Project Structure

```bash
frontend/
├─ src/
│  ├─ api/          # Axios instance
│  ├─ components/   # Buttons, inputs, navbar
│  ├─ pages/        # Login, Dashboard, Expenses, Tasks
│  ├─ store/        # Zustand store
│  └─ App.tsx       # Router and entry point
├─ package.json
├─ tailwind.config.cjs
└─ postcss.config.cjs
```

4. Run the Frontend

```bash
npm run dev
```
The frontend runs at `http://localhost:5173` by default (Vite).

## 🧪 Testing

- Frontend tests: React Testing Library + Cypress (unit and E2E tests)

```bash
npm run test
```

## ⚡ Useful Commands

`npm run dev` → Start development server

`npm run build` → Build for production

`npm run preview` → Preview production build

## 🔗 Next Steps

- [ ] Connect all CRUD routes to the backend via Axios
- [ ] Add interactive charts and dashboard components (Chart.js or Recharts)
- [ ] Improve UX/UI with dark/light mode and responsive design
- [ ] Add unit and E2E tests for all pages