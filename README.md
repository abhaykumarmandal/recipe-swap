# Recipe Swap – Sprint 1 (CMP-N204-0)

**Author:** Aashish Gupta
**Module:** Software Engineering (CMP-N204-0)  
**Theme (2026):** Sharing, exchange and building community

Recipe Swap is an interactive web platform that encourages users to share their recipes and exchange prescriptive instructions and culinary ideas with each other (non-commercial interchange). Users can look at the recipes, check the details, and eventually, in the succeeding sprints, add ratings, messaging, and recommendations features.

---

## Sprint 1 Deliverables (Checklist)

✅ GitHub repository created and commits pushed  
✅ GitHub Project (Kanban) board created with Sprint 1 backlog issues  
✅ Project scaffolding committed (Express + Pug + CSS)  
✅ Docker development environment works (Node app + MySQL DB)  
✅ Sprint 1 PDF prepared (project description, code of conduct, 2 personas, ethical issues, meeting records)

---

## Tech Stack (Module Tools)

**Frontend**
- HTML, CSS, JavaScript
- Pug templating

**Backend**
- Node.js
- Express.js

**Database**
- MySQL

**DevOps**
- Docker + Docker Compose
- Git + GitHub

**Project Management**
- GitHub Projects (Kanban)

---

## How to Run (Docker)

### Prerequisites
- Docker Desktop installed
- Git installed

### Start the application
From the project root:

```bash
docker compose up --build
```

---

### Then open:
`http://localhost:3000`

### Stop the application
```bash
docker compose down
```

## Project Structure

```text
recipe-swap/
├─ src/
│  └─ app.js
├─ views/
│  ├─ layout.pug
│  └─ index.pug
├─ public/
│  └─ css/
│     └─ style.css
├─ db/
│  └─ init.sql
├─ Dockerfile
├─ docker-compose.yml
├─ package.json
└─ README.md
```

### Database (Sprint 1)
A MySQL container is started via Docker Compose and seeded using:
- db/init.sql
The database is currently used for environment setup and seeding checks.
---

### Project Management (Kanban Board)
All sprint tasks are tracked using GitHub Projects (Kanban):
- Backlog / Todo / In Progress / Done

### Sprint 1 issues include:
- Setup Docker Compose (Node + MySQL)
- Create Express + Pug scaffold
- Add README with run instructions
- Write Code of Conduct
- Create 2 Personas
- Identify ethical issues
- Create meeting records template
- Verify Docker Compose up works
  
---

### Roadmap to Next Sprints
#### Sprint 2
- User stories, use case diagram
- Wireframes + activity diagrams
- Sprint 3 specification

#### Sprint 3
- Database-driven pages (MySQL + Express + Pug):
- Users list page
- User profile page
- Listing page
- Detail page
- Tags/categories


#### Sprint 4
- MVP enhancements, such as login, ratings, messaging, and recommendations
- GitHub Actions CI/CD workflow
