# HappyHobby Architecture Specification

# Infrastructure
## Web Server - Firebase
* This web server receives HTTPS requests and serves Views and API routes
* Resides on Google Servers
* Communicates with UserController, and HobbyController for login information and API Routes.

# Views
## React.js
* HeaderView
  * This component contains links to the DailyHobbyView and FAQ page. The component can have links to InterestSelectionView and the logout button if they are logged in.
  * Resides in client-side only
  * Communicates with the UserController to display the profile picture
* LoginView
  * This component displays Google’s Cloud login form.
  * Resides in client-side only
  * Communicates with the UserController to handle login
* DailyHobbyView
  * This component displays a randomly selected hobby from the user’s interests (likes and dislikes) excluding the user’s dislikes. This component contains links to InterestSelectionView.
  * Resides in client-side only
  * Communicates with HobbyController receiving a hobby as a JSON object.
* InterestSelectionView
  * This component displays a form for the user to select their likes and dislikes
  * Resides in client-side only
  * Communicates with InterestController by sending the list of interests as an array.
* FooterView
  * This component displays the HappyHobby contact information - happyhobby2020@gmail.com
  * Resides in client-side only
  * Does not communicate with other components
* AlertView
  * This component displays to the user when the request to the server fails.
  * Resides in client-side only
  * Communicates the alert messages received from the front-end

# Model
## NodeJS
* InterestModel
  * This component stores all information about interest 
    * interestName: String
    * description: String
    * imageUrl: String
    * hobbies: []
  * Resides on server-side only
  * Communicates with Firebase web server and InterestController
* HobbyModel
  * This component is a model that stores all of the information about the hobby.
    * hobbyName: String,
    * description: String,
    * imageUrl: String
  * Resides on the server-side only
  * Communicates with Firebase web server and HobbyController
* UserModel
  * This component is a model that stores all of the user information and hobby interests.
    * username: String
    * imageUrl: String
    * likes: []
    * dislikes: []
  * Resides on the server-side only
  * Communicates with Firebase web server and UserController

# Controller
## NodeJS and JavaScript
* InterestController
  * This controller receives a list of interests from InterestSelectionView and sends it to the server as a request in a JSON object
  * Resides on the client-side only
  * Communicates with InterestSelectorView and web server. Creates an array of JSON objects and sends them to the web server via HTTPS.
* HobbyController
  * This controller retrieves the JSON object from the request, runs the random algorithm to select one hobby from the set, and returns output to DailyHobbyView.
  * Resides on the server-side only
  * Communicates with DailyHobbyView and Web Server, displaying the information on DailyHobbyView after running the Random Hobby Algorithm with the user’s likes, and then sending information to the web server via HTTPS
* UserController
  * This controller retrieves user information from Firebase web server and returns all user information and hobby interests
  * Resides on the server-side only
  * Communicates with HeaderView, LoginView, DailyHobbyView, and InterestSelectionView and the web server
