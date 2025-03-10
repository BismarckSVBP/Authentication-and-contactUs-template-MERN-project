# 🔐 Full-Stack Authentication Project

A comprehensive authentication system built with a secure backend and responsive frontend. This project includes user registration, login, email verification, password recovery, and more. It’s built with scalability and security in mind.

---

## 🚀 About This Project

This project covers everything you need to build a robust authentication system with **email verification**, **password reset**, **authentication checks**, and **route protection**, along with **responsive UI pages**.

### ✅ Features Implemented

- 🔧 **Backend Setup**
- 🗄️ **Database Setup (MongoDB)**
- 🔐 **Signup Endpoint**
- 📧 **Sending Verify Account Email (Nodemailer)**
- 🔍 **Verify Email Endpoint**
- 📄 **Welcome Email Template**
- 🚪 **Logout Endpoint**
- 🔑 **Login Endpoint**
- 🔄 **Forgot Password Endpoint**
- 🔁 **Reset Password Endpoint**
- ✔️ **Check Auth Endpoint**
- 🌐 **Frontend Setup (Responsive UI)**
- 📋 **Signup Page UI**
- 🔓 **Login Page UI**
- ✅ **Email Verification Page UI**
- 📤 **Signup Implementation**
- 📧 **Email Verification Implementation (Nodemailer)**
- 🔒 **Route Protection**
- 🔑 **Login Implementation**
- 🏠 **Dashboard Page**
- 🔄 **Forgot Password Implementation**
- 📨 **Contact Us Page**
- 🔁 **Resend OTP Functionality (Email Verification OTP)**
- ✉️ **Email Authentication via Nodemailer**
- 📱 **Fully Responsive Design**
- 🚀 **Super Detailed Deployment Guide**

---

## 📝 Environment Setup

Create a `.env` file in your backend root directory and add the following environment variables:

```bash
# Server Port
PORT=5000

# SMTP Configuration for Nodemailer
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
SENDER_EMAIL=your_email@gmail.com
SENDER_NAME=YourProjectName
ADMIN_EMAIL=admin_email@example.com

# MongoDB URI
MONGO_URI=your_mongodb_connection_string

# JWT Secret Key
JWT_SECRET=your_jwt_secret_key

# Environment Mode
NODE_ENV=development

# Frontend URL
CLIENT_URL=http://localhost:5173

## 🙌 Credits & Acknowledgments

# This project was developed with the support of YouTube tutorials, online resources, and a lot of dedication and hard work on my part(Abhay Kumar Kasaudhan).
```
