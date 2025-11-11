
# Project Title: Chef2go

Welcome to the Chef2go website repository.

Chef2Go — Student Meal & Recipe Platform

Overview
--------
Chef2Go is a student-focused platform to discover recipes, order chef-curated meals, and access premium recipe videos.

Features
--------
- Student authentication (signup/login)
- Search by chef and by recipe
- Premium subscription for video content
- REST APIs for recipes, ingredients, and user management

Tech stack
----------
Node.js, Express, MongoDB (Mongoose), React frontend

Running locally
---------------
1. npm install in frontend and backend folders
2. Start backend and frontend separately (npm start)

Notes
-----
See controllers/, services/ and routes/ directories for server-side implementation details.


POST /signup: Sign up a new user. Requires name, username, email, and password in the request body.
POST /login: Log in a user. Requires either username or email and password in the request body.
DELETE /:id: Delete a user by their ID. Requires the user ID as a parameter in the URL.

Error Handling:

Validation errors (e.g., empty fields, invalid email) return a 400 status code with an error message.
Unauthorized errors return a 401 status code with an "Unauthorized" message.
Internal server errors return a 500 status code with an "Internal Server Error" message.

Security:

User passwords are hashed using bcrypt for secure storage.
Token-based authentication is implemented for user sessions.


### REST API for Ingredient
The Ingredient API is a Node.js-based application utilizing Express and MongoDB with Mongoose, designed to manage information about ingredients and the stores where they are available. The project follows a structured architecture with separate modules for defining the schema (ingredient-model.js), handling CRUD operations (ingredient-service.js), managing HTTP requests and responses (ingredient-controller.js), and defining API routes (ingredient-routes.js). 

### Object Model

![alt text](https://github.com/info-6150-fall-2023/final-project-peri-peri/blob/main/docs/Chef2go.png)

Steps to set up Project Locally:

git clone url Install all dependencies locally - cmd :
> npm install
and run the project using:
> GO to chef-to-go-frontend folder and open terminal and enter npm start to start front end
> Go to chef-to-go-backend folder and open terminal and enter npm start to start backend server
> npm start 


check changes with help of ide. git add . ( to add changes in your local branch) git commit -m "give approriate msg" ( cmd to stage changes) git push origin main ( cmd to push changes to global branch)

## TEAM MEMBERS

- [@Basavaraj Patil](https://github.com/basupatil1213)
- [@Bhuvan Dama Venkatesh Raj](https://github.com/BhuvanDV)
- [@Keerthana Mikkili](https://github.com/keerthanamikkili)
- [@Shreyas Hanamantgouda Patil](https://github.com/shreyes-patil)
