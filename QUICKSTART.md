# Quick Start Guide

## 1. Clone and Setup

```bash
cd C:\Users\sohai\techjeddah_repo

# Backend Setup
cd backend
npm install
cp .env.example .env

# Configure .env with your MongoDB and email settings
# EMAIL_USER, EMAIL_PASS are required (Gmail with App Password recommended)
```

## 2. Start MongoDB

```bash
# Windows: Make sure MongoDB is running
mongod
```

## 3. Run Backend Server

```bash
cd backend
npm run dev

# Server runs on http://localhost:5000
```

## 4. Run Frontend (new terminal)

```bash
cd techjeddah
npm install
npm start

# Frontend runs on http://localhost:4200
```

## 5. Test the App

- Open http://localhost:4200
- All API calls will go to http://localhost:5000
- Try the contact form (requires SMTP config in .env)
- Try applying for a course
- Browse available courses

## Environment Management

### Development
- Frontend auto-uses `http://localhost:5000`
- All services are environment-aware
- Easy switching between local and remote backends

### Production Build
```bash
cd techjeddah
npm run build

# Deployment will use environment.prod.ts
# Update URL in src/environments/environment.prod.ts before building
```

## Troubleshooting

### CORS Issues
- Backend has CORS enabled
- Make sure backends are on different ports

### Email Not Sending
- Check EMAIL_USER, EMAIL_PASS in .env
- Gmail requires App Password (not regular password)
- Contact form still saves without email

### Course Not Loading
- Verify MongoDB is running
- Check backend console for errors
- Ensure MONGO_URI is correct in .env

### 404 Errors
- Check route in app-routing.module.ts
- Verify backend API endpoints in services
- Backend default listens on port 5000
