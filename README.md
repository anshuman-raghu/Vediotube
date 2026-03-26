# 📺 StreamSphere

**StreamSphere** is a modular and scalable video-sharing backend service built using **Node.js**, **Express.js**, and **MongoDB**. It enables users to upload, stream, and interact with videos — including features like comments, likes, subscriptions, playlists, and more. All API routes have been tested using **Postman** for reliability and accuracy.

---

## 🚀 Features

- ✅ User authentication and authorization (JWT-based)
- 📤 Video upload and streaming
- ❤️ Like and comment system
- 📃 Playlist and subscription management
- 🐦 Tweet-style posting
- 📊 Dashboard and healthcheck endpoints
- 🧪 Fully tested API endpoints with Postman

---


## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **File Upload**: Multer + Cloudinary
- **Testing**: Postman

---

📬 API Endpoints Overview

| Feature      | Method | Endpoint                     | Description               |
| ------------ | ------ | ---------------------------- | ------------------------- |
| Health Check | GET    | `/api/health`                | Check API status          |
| Video        | POST   | `/api/video/upload`          | Upload video              |
| Video        | GET    | `/api/video/stream/:id`      | Stream video              |
| User         | POST   | `/api/user/register`         | Register user             |
| Auth         | POST   | `/api/user/login`            | Login                     |
| Comment      | POST   | `/api/comment/:videoId`      | Post a comment            |
| Like         | POST   | `/api/like/:videoId`         | Like a video              |
| Playlist     | POST   | `/api/playlist`              | Create playlist           |
| Subscription | POST   | `/api/subscription/:channel` | Subscribe to a user       |
| Tweet        | POST   | `/api/tweet`                 | Post a tweet              |
| Dashboard    | GET    | `/api/dashboard`             | user dashboard info       |


🧪 Full Postman API Documentation:
👉 [StreamSphere Postman Collection](https://documenter.getpostman.com/view/38671131/2sBXVfjrZW)

---

🧰 Utilities
apiResponse.js — Consistent API response structure

apiError.js — Custom error handling

auth.middleware.js — JWT-based authentication middleware

multer.middleware.js — File upload middleware

cloudinary.js — Cloudinary configuration for video/image storage

