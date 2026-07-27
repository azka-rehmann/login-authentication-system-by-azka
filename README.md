# 🔐 Login Authentication System - By Azka

A secure client-side login authentication system built using **HTML, CSS, and JavaScript**.  
This project allows users to register, login, and access a protected dashboard using localStorage-based session management.

## 🚀 Project Overview

The Login Authentication System provides a simple and secure authentication flow without a backend.  
It includes user registration, password validation, SHA-256 password hashing, login verification, protected dashboard access, and logout functionality.

## ✨ Features

✅ User Registration  
- Register with username/email and password  
- Prevents empty submissions  
- Validates password requirements:
  - Minimum 8 characters
  - At least 1 number

✅ Duplicate User Check  
- Prevents registration with an already existing username/email  
- Displays an appropriate error message

✅ Secure Password Handling  
- Passwords are not stored in plain text  
- SHA-256 hashing is used before storing passwords

✅ Login Authentication  
- Validates user credentials  
- Displays clear error message for incorrect login attempts

✅ Protected Dashboard  
- Dashboard is accessible only after successful login  
- Unauthorized users are redirected back to login page

✅ Logout Functionality  
- Clears user session from localStorage  
- Redirects user back to login page

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- LocalStorage API
- SHA-256 Password Hashing

## 📂 Project Structure
