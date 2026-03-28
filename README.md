# Aspiration Cleantech Ventures (ASPCV)

A professional MERN stack application for Cleantech and Solar Energy solutions.

## Technology Stack
- **Frontend**: React, Vite, TypeScript, Bootstrap, Framer Motion
- **Backend**: Node.js, Express, MongoDB/Mongoose
- **Image Uploads**: Cloudinary
- **Security**: JWT Authentication, Helmet, Rate Limiting, Sanitization

## Getting Started

### 1. Prerequisites
Ensure you have Node.js and MongoDB installed.

### 2. Configure Environment Variables
- Create a `.env` file in the root directory (based on `.env.example`).
- Create a `.env` file in the `backend/` directory (based on `backend/.env.example`).

### 3. Install Dependencies
Run from the root directory:
```bash
npm install
cd backend && npm install
```

### 4. Run the Application
**Backend Server:**
```bash
cd backend
npm run dev
```

**Frontend Server:**
```bash
# In a new terminal
npm run dev
```

## Admin Credentials
Initial admin setup can be done using the `backend/seedAdmin.js` script or via the `/api/v1/auth/setup` endpoint.
