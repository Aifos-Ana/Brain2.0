# Brain2.0 Backend

## Brain2.0 — Your Personal OS

> Backend for the personal finance and productivity management web application. Responsible for providing RESTful API, authentication, data storage, and business logic.

### 🧩 Technology Stack

- **Node.js + NestJS** – Main backend framework

- **TypeScript** – Static typing and scalability

- **PostgreSQL** – Relational database

- **Prisma ORM** – Database modelling and queries

- **JWT** – Secure authentication

- **CI/CD** – Pipeline for automated deployment

### ⚙️ Key Features

- [ ] **Authentication and Authorisation**: Login, registration, JWT, route protection
- [ ] **Financial Management**: CRUD for expenses, income, and categories
- [ ] **Productivity Management**: CRUD for tasks and habits
- [ ] **Dashboard and Analytics**: APIs for reports and statistics
- [ ] **Frontend Integration**: REST endpoints ready for consumption by React + TypeScript

## 🚀 Project Setup

1. Clone the repository:

```bash
git clone https://github.com/Aifos-Ana/Brain2.0.git
cd backend
```


2. Install dependencies:
```bash
npm install
```

3. Configure environment:

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://thefenixpt:a_secure_password@localhost:5432/budgethub?schema=public"
JWT_SECRET="supersecret"
```

4. Configure PostgreSQL:

```bash
sudo -u postgres psql
```
```psql
CREATE DATABASE budgethub;
CREATE ROLE thefenixpt WITH LOGIN PASSWORD “a_secure_password”;
ALTER ROLE thefenixpt CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE budgethub TO thefenixpt;
GRANT ALL PRIVILEGES ON SCHEMA public TO thefenixpt;
\q
```

5. Run Prisma migrations:
```bash
npx prisma migrate dev --name init
```

6. Start the server:
```bash
npm run start:dev
```

The backend will run by default at `http://localhost:3000`.

## 🗂 Project Structure

```bash
backend/
├─ src/
│  ├─ auth/           # Auth JWT
│  ├─ users/          # CRUD for users
│  ├─ expenses/       # CRUD for expenses
│  ├─ incomes/        # CRUD for incomes
│  ├─ tasks/          # CRUD for tasks
│  ├─ prisma/         # Prisma Client
│  └─ main.ts         # Entry point
├─ prisma/
│  ├─ schema.prisma   # Models and DB schema
├─ .env
├─ package.json
└─ tsconfig.json
```

## 🧪 Tests

- Backend: Jest + Supertest (for endpoints)

```bash
npm run test
```

## ⚡ Useful Commands

`npm run start` → Start server

`npm run start:dev` → Start server in development mode with hot reload

`npx prisma studio` → Visual interface to explore the database

`npx prisma migrate dev --name <migration>` → Create/update migrations

## 🔗 Next Steps

- [ ] Implement additional endpoints for financial reports

- [ ] Integration with React + TypeScript frontend

- [ ] Add unit and integration tests for all modules

- [ ] Prepare Dockerfile and CI/CD pipeline for automatic deployment