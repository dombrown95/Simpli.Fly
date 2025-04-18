# Simpli.Fly Inventory Management System

Simpli.Fly is a lightweight, full-stack inventory management system (IMS) that allows users to register, select a cargo size and manage inventory items based on weight limits. The application is built with React (frontend), Node.js + Express (backend) and SQLite (database).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Testing](#testing)
- [Version Control](#version-control)
- [License](#license)

## Features

- User Registration and Login.  
- Cargo size selection (Small, Medium, Large).  
- Add, edit and delete inventory items. 
- Real-time cargo weight tracking. 
- Feedback if weight exceeds limit. 
- Input validation on form fields.
- Local storage of login session. 
- API endpoints for full CRUD (Create, Read, Update and Delete) support.

## Screenshots

### Home Page and Login
![Home Page](/public/assets/images/home-page.png)
_A user can log in or register to access the inventory system._

### Cargo Management
![Cargo Page](/public/assets/images/cargo-page.png)
_Users can select a cargo size and view or manage their inventory._

### Add Inventory Item
![Add Item](/public/assets/images/cargo-manage.png)
_Example of adding a new item and updating the cargo weight display._

## Installation

1. Clone the repository

`git clone https://github.com/dombrown95/Simpli.Fly.git`</br>
`cd Simpli.Fly`

2. Install dependencies

`npm install`

## Usage

1. Start the backend server

In one terminal window/tab, run:

`cd backend`</br>
`node server.js`

2. Start the frontend

In another terminal window/tab, run:

`npm run dev`

3. Visit the app in your browser

http://localhost:5173 

## Tech Stack

The following tech stack was used during development of the IMS:

- Frontend: React, Vite
- Backend: Node.js, Express
- Database: SQLite
- Testing: Postman
- Version Control: Git + GitHub

## Testing

Functional testing, regression testing and API testing was carried out using Postman and browser-based developer tools. Test results and screenshots are recorded in the technical design documentation, which is available upon request.

## Version Control

Version control was managed with Git and GitHub. All commits included descriptive messages and a GitHub Kanban board was used to manage progress and issues.

## License

This project is for educational purposes and is not licensed for commercial use.