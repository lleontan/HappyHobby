# HappyHobby Design Specification

## Problem
Boredom is a frequent emotion that can lead to an increase in mental health issues. The consequences of not having something to do lead to “[depression](https://www.psychologytoday.com/us/basics/depression), [substance abuse](https://www.psychologytoday.com/us/basics/addiction), absenteeism from work or school, reduced job satisfaction, and even a general sense that life has no meaning.” Boredom typically persists because people struggle to find a hobby to keep them satisfied. 

References  
https://www.psychologytoday.com/us/blog/media-spotlight/201703/bored-in-the-usa

## Solution
With a web application connecting people to enjoy fun new-found hobbies and interests, we can harness the connective power of technology to break down the mental barriers stopping people from starting new hobbies. We envision an application that allows users to receive daily notifications on a new hobby to pursue for the day based on their interests. As a form of accountability, there will be a place to share photos or comments with other users who are tackling the same hobby.

### Features
#### Login Page
- The system shall allow for login using Google Cloud. On the login page, the application will display a button labeled “Log in with Google Cloud” which will deliver the user to the Firebase Google Cloud login page to be logged in with their Google account.
- If the user doesn’t have a Google account, the user can either create a Google account or use any other type of email through the Firebase Google Cloud login. 
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/LogIn.png)

#### Navigation Banner
- The main content of each page will be displayed in a section spanning the width of the screen below the navigation banner. The height of this section will wrap its contents.
- The system shall have a navigation banner across all pages, a section stretching from the upper right corner to the upper left corner.
  - On the upper left side of the screen, there will be our logo “HappyHobby” (345px - width, 62px - height) and on the upper right side, there will be a link labeled FAQ and a profile picture in a circular formation. 
  - On a smaller device (< 768px - width) the navigation bar will consist of “HH” on the upper left side, and, on the right side, we will have a hamburger menu. When the user clicks on the hamburger menu, the user will see a link to the profile followed by a link to the FAQ section. If someone clicks on “HappyHobby” it will redirect the user to the homepage. 
- When the user is logged in the navigation banner will display their Google Cloud profile picture.
- The user can access their own profile by clicking on their Google Cloud profile picture. This icon will be located on the right side of the banner.
- If the user clicks on the profile picture the user can access their settings and log out by clicking the designated options through a dropdown menu
- If the user selects “Settings” the user can edit their interests/dislikes.
- If the “Log Out” button is clicked it will deliver them to the login page and log them out of the application. 
- The navigation banner will also contain a link to the FAQ section labeled “FAQ” located on the right side of the banner but to the left of the profile picture.
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/NavBar.png)

#### Profile Page
- The system shall have a profile page. On the profile page, the application will display a list of bubble selectors of interests. Users will not be able to create new interests to their profile if the user doesn’t already exist in the list of interests. 
- If the user logged in with Google, the user will not have the option to change their photo, name, or password
- Each interest will consist of a picture of the interest and a title of the interest
  - The user can click on the interest to see the description. The description will appear as a modal in the middle of the screen.
  - If no image exists, there will be a placeholder image. Title and text are required to be a valid hobby.
- The user can select edit to remove any interests or dislikes
  - While an interest or dislike bubble is moused over an icon consisting of a white minus sign within a red circle located on the bubble’s bottom-left corner will be displayed. If the circular icon is clicked the interest or dislike will be removed from its corresponding list of interests or dislikes.
  - While the user has not selected all available interests as a liked or disliked interest a circular icon consisting of a light-colored plus sign centered within a blue circle of size equal to the interest bubbles will be shown at the rightmost position within the lists of interests and disliked interests on the page. If this button is clicked a view allowing the user to add new interest to the bubble’s corresponding list will be displayed. The set of all hobbies not within either list is empty then no add interest buttons will be displayed in either the liked or disliked interest lists.
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/Profile.png)
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/ProfileEdit.png)

#### Hobbies Page
- On the home page, the application will display a single hobby per day in the center of the screen.
- The displayed hobby will consist of a picture of the hobby, title of the hobby, and text description taking up the whole screen width of the website minus margins, padding, and border.
- To generate the potential hobby for the day, we will create a “Hobby Set” that comprises of all the interests the user selected. Each interest will have a list of related hobbies. 
  - The set of potentially recommended hobbies will be determined by Hobby Set=(All interested hobbies)∩(All disliked hobbies)c
- The displayed hobby will be randomly selected from the user’s Hobbies Set each day.
- The randomization operation for each user will happen at 5 AM PST or when the user updates their preferred interests. 5 AM PST for the update because it coincides well with time zones globally (noon UTC).
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/HomePage.png)

#### FAQ Page
- On the FAQ page, a list of questions and answers will be displayed in a list format.
  - Example: How can you change interests?  
![Home Page](https://github.com/HappyHobby/HappyHobby/blob/master/Resources/Wireframes/FAQ.png)

#### Requirements
- What devices do your requirements say it will be able to run on?
  - The website will be able to run on Google Chrome and Firefox browsers and display information on a phone (< 768px - width), tablets (768px to 1024px - width) and computer screen (>= 1024px - width).
- Who needs to be able to use your app? i.e In what ways does your app need to be accessible? (colors, screen readers, voice to text?)
  - The application will be able to be used with screen readers.
- Where do you GET that data?
  - Hobbies within each interest’s hobbies list will be populated by the developers. Hobbies include:
    - Exercise
    - Cooking
    - Art & Crafts
    - Music
    - Nature
    - Education
    - Games
    - Photography
    - Organizing 
    - Writing
    - Theatre
  - Interests will be populated by the developers.
- If you are storing information, where are you storing it?
  - All information will be stored within Firebase as JSON objects.
