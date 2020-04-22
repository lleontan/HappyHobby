# HappyHobby Requirements

## Login Page
- The system shall allow for login using Google Cloud. On the login page, the application will display a button labeled “Log in with Google Cloud” which will deliver the user to the Firebase Google Cloud login page to be logged in with their Google account.
- If the user doesn’t have a Google account, they can either create a Google account or use any other type of email through the Firebase Google Cloud login.
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/LogIn.png)

## Navigation Banner
- The main content of each page will be displayed in a section spanning the width of the screen below the navigation banner. The height of this section will wrap its contents
- The system shall have a navigation banner across all pages, a section of the width of the screen will be displayed above the page’s main content with a link labeled “HappyHobby” to the homepage on the banner’s left side.
- When the user is logged in the navigation banner will display their Google Cloud profile picture.
- They can access their profile by clicking on their google cloud profile picture. This icon will be located on the right side of the banner.
- If they click on the profile picture they can access their settings and log out by clicking the designated options through a dropdown menu
- If the user selects “Settings” they can edit their interests/dislikes.
- If the “Log Out” button is clicked it will deliver them to the login page and log them out of the application. 
- The navigation banner will also contain a link to the FAQ section labeled “FAQ” located on the right side of the banner but to the left of the profile picture.
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/NavBar.png)

## Profile Page
- The system shall have a profile page. On the profile page, the application will display a list of bubble selectors of interests. Users will not be able to create new interests to their profile if they don’t already exist in the list of interests. 
- If the user logged in with Google, they will not have the option to change their photo, name, or password
- Each interest will consist of a picture of the interest and a title of the interest
- The user can hover over the interest to see a description
- If no image exists, there will be a placeholder image. Title and text are required to be a valid hobby.
- The user can select edit to remove any interests or dislikes
- Remove icons will appear on each interest bubble.
- There will always be an add button/circle for interests and dislikes section for the user to add a user’s interest.
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/Profile.png)
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/ProfileEdit.png)

## Hobbies Page
- On the home page, the application will display a single hobby per day in the center of the screen.
- The displayed hobby will consist of a picture of the hobby, title of the hobby, and text description taking up the whole screen width of the website minus margins, padding, and border.
- Each interest will have a list of related hobbies. From the user’s selected interests a set of hobbies will be displayed comprising all hobbies related to all interests they have liked which are not included within interests they have disliked referred to as the “Hobby Set”.
- The set of potentially recommended hobbies will be determined by Hobby Set=(All interested hobbies)∩(All disliked hobbies)c
- The displayed hobby will be randomly selected from the user’s Hobbies Set each day.
- The randomization operation for each user will happen at 5 AM PST or when they update their preferred interests. 5 AM PST for the update because it coincides well with time zones globally (noon UTC).
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/HomePage.png)

## FAQ Page
- On the FAQ page, a list of questions and answers will be displayed in a list format.
  - Example: How can you change interests?
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/FAQ.png)

## Requirements
- What devices do your requirements say it will be able to run on?
  - The website will be able to run on Google Chrome and Firefox browsers and display information on a phone, laptop or desktop-sized screen.
- Who needs to be able to use your app? i.e In what ways does your app need to be accessible? (colors, screen readers, voice to text?)
  - The application will be able to be used with screen readers
- Where do you GET that data?
  - Hobbies within each interest’s hobbies list will be populated by the developers.
  - Interests will be populated by the developers.
- If you are storing information, where are you storing it?
  - All information will be stored within Firebase as JSON objects.
