# techjeddah
A full-stack educator website built with Angular for the frontend and Express/MongoDB for the backend.

## Project Structure
- `backend/` — Express API, MongoDB models, and routes
- `techjeddah/` — Angular frontend application

## Local setup
### Backend
1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env`
4. Update `.env` with your MongoDB URI and email settings
5. `npm run dev`

### Frontend
1. `cd techjeddah`
2. `npm install`
3. `npm start`

### Frontend environment
- Local development uses `src/environments/environment.ts`
- Production build uses `src/environments/environment.prod.ts`
- `environment.ts` points to `http://localhost:5000` by default

## Environment variables
Create `backend/.env` with the following values:
```dotenv
PORT=5000
MONGO_URI=mongodb://localhost:27017/techjeddah
EMAIL_USER=your@gmail.com
EMAIL_PASS=your-app-password
EMAIL_ADMIN=admin@example.com
EMAIL_FROM="TechJeddah <no-reply@example.com>"
```

## Improvements made
- Added backend `dev` script for nodemon-based development
- Added `backend/.env.example` for safer setup
- Fixed duplicate route definitions and controller errors
- Added admin contact retrieval route
- Allowed optional file upload support for courses
- Added root `.gitignore` for generated files and secrets

