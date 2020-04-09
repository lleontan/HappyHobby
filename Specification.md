# HappyHobby Design Specification

## Problem
Boredom is a frequent emotion that can lead to an increase in mental health issues. The consequences of not having something to do lead to “[depression](https://www.psychologytoday.com/us/basics/depression), [substance abuse](https://www.psychologytoday.com/us/basics/addiction), absenteeism from work or school, reduced job satisfaction, and even a general sense that life has no meaning.” Boredom typically persists because people struggle to find a hobby to keep them satisfied. 

References  
https://www.psychologytoday.com/us/blog/media-spotlight/201703/bored-in-the-usa

## Solution
With a web application connecting people to enjoy fun new-found hobbies and interests, we can harness the connective power of technology to break down the mental barriers stopping people from starting new hobbies. We envision an application that allows users to receive daily notifications on a new hobby to pursue for the day based on their interests. As a form of accountability, there will be a place to share photos or comments with other users who are tackling the same hobby.

### Features

#### Create Account
- The user will create an account with an email account. If the user tries to create an account with the same email, an error message will pop up saying “Account with this email already exists”
- There will be a double verification check for their password, if the passwords do not match when re-typed to confirm, an error message will pop up saying “Passwords do not match”
- If the email has not been used to create an account on this platform before and the passwords match, the account will be created and this will take the user to a login page. 
- Once the user clicks login, they will be redirected to the home page.
#### Account Login
- If the user types wrong email or password, the system will say “email or password does not exist, please try again”
- If the login details are correct, user will be redirected to homepage
- If the user checks box that says “remember login details”, the next time the user accesses the website - they will be redirected to homepage
#### Interest Form
- After signing up, the user can select different interests for which they would like the hobbies to be related to
- There will also be a checklist to select dislikes, making sure none of the hobbies they are given relate to those topics
- If the user selects no dislikes, their choice of interests will be used to determine the hobbies generated for them
- If the user selects no interests, their dislikes will be used to generate their hobbies
- If the user selects no interests or dislikes, they will be given any of the hobbies in the database
- The ability to edit likes/dislikes can be found in their profile section
#### Hobbies Page
- The user will be presented with a random hobby for the day. This page will allow users to mark the activity complete and allow for comments and/or photo submission.
- The list will contain:
  - Image
  - Name
  - Text description
  - Descriptive tags
#### Profile
- The user will be presented their profile page with their basic user information. Basic user information includes interests, social media links, and a profile picture.
- The user will be presented with a recent activities list of all recent completions of activities. 
- The user will be presented with an award system which will be a streak based point system to show how well this user is completing daily hobbies compared to other users.
#### Hobby Submission
- The user will be presented with a form allowing new hobby submissions for other users
- The form will contain:
  - A text field for the hobbies name
  - A file input for the hobbies profile image
  - A text field for the hobby’s description
  - A checkbox allowing the user to tag categories for the hobby
#### FAQ Page
- The user will be able to navigate through questions and answers by clicking on a drop-down arrow. If they have a question that is unanswered, they can fill out a form that will go directly to us. 
- If a user finds an answer to the question they were looking for they will be able to see it. 
#### Navigation Bar
- Links to
  - Homepage
  - Profile
  - Signout
  - Hobby
  - FAQ

