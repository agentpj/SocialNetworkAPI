# SocialNetworkAPI
NoSQL Challenge 18 Social Network API

This project utilizes 
MongoDB and Mongoose ODM
NoSQL database
Express.js node package for routing
Mongoose node package

This is a challenge to build an API for a social network web application, entirely backend, where users can share their thoughts, react to friends' thoughs and create a friend list.  The social media database is called socialnetwk_db.  

There is no seeding included in the project. 

The user needs to create a connection.js file under the config directory.  The config directory should have entries such as:

const { connect, connection } = require('mongoose');
connect('mongodb+srv://username:password@cluster0.rsc7kij.mongodb.net/socialnetwkDB');
module.exports = connection;

where username is the user's MONGODB username and password is MONGODB password.

NOTE: Because this file contains the author's personal user name and password, this file is not included in the repository.

To launch the application, the user goes to the integrated terminal and enters "node index.js"

The following files are included in this project:
.gitignore
LICENSE
README.md
config/connection.js
controllers/thoughtController.js
controllers/userController.js
homework_readme.md
index.js
models/Reaction.js
models/Thought.js
models/User.js
models/index.js
package-lock.json
package.json
routes/api/index.js
routes/api/reactionRoutes.js
routes/api/thoughtRoutes.js
routes/api/userRoutes.js
routes/index.js

Using Insomnia, the user can add users, thoughts using GET routes.
The data for each of these routes is displayed in a formatted JSON.
The user can test the GET, POST, PUT, DELETE routes in insomia.
The user is able to succesfully create, update and delete users, thoughts in the database.

The starter code used for this project was from the lesson 26 activity.

GitHub repository link:
https://github.com/agentpj/SocialNetworkAPI


GitHub deployed link:
https://agentpj.github.io/SocialNetworkAPI/

A screencastify recording of insomnia testing will be submitted with this challenge.
