# Chandana Portfolio Website

A complete full-stack personal portfolio website for a fresher Frontend / Full Stack Developer.

## Tech Stack

- Frontend: React, Vite, JavaScript, Tailwind CSS
- Backend: Node.js, Express
- Contact API: `POST /api/contact`
- Database: Not required

## Folder Structure

```text
myportfolio-web/
  frontend/
    src/
      components/
      App.jsx
      index.css
      main.jsx
    index.html
    package.json
    postcss.config.js
    tailwind.config.js
  backend/
    server.js
    package.json
    .env.example
  README.md
```

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Run Backend

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

## Email Setup For Contact Form

The contact form can email you when someone submits a message. Create `backend/.env` from `.env.example`, then add your email settings:

```env
PORT=5000
CONTACT_RECEIVER_EMAIL=your-email@example.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
```

For Gmail, use a Gmail App Password, not your normal Gmail password.

## Contact Form API

Endpoint:

```http
POST http://localhost:5000/api/contact
```

Request body:

```json
{
  "name": "Chandana",
  "email": "chandana@example.com",
  "subject": "Job opportunity",
  "message": "Hello!"
}
```

## Resume

Your current resume is saved at:

```text
frontend/public/resume.pdf
```

The Download Resume button will use that file automatically.

## Profile Photo

The hero section uses:

```text
frontend/public/chandana-profile.png
```

Replace that file with a newer photo, or update the image path in:

```text
frontend/src/components/Hero.jsx
```

## Customize Links

Update placeholder GitHub, live demo, LinkedIn and email links in:

- `frontend/src/components/Projects.jsx`
- `frontend/src/components/Hero.jsx`
- `frontend/src/components/Footer.jsx`

## GitHub Upload Instructions

```bash
git init
git add .
git commit -m "Create full-stack portfolio website"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

Replace `your-username` and `your-repo-name` with your GitHub details.
