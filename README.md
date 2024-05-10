*NC News React App*

*Introduction*
This front-end app was built in React, as part of a Northcoders software development bootcamp. It provides a Reddit-style user interface for the corresponding news API which was built during back-end project phase.

The design is mobile-first but and reactive so should function well on other displays.

Live Link: https://nc-news-online.netlify.app/
GitHub for back end: https://github.com/mikeold-2008/nc-news
Hosted back end: https://nc-news-ldv7.onrender.com/api

*Features*
Users can view a list of articles, as well as filtering them by topic, and sorting by given sort criteria such as comments, votes or date (asc. or desc.). Users can also read articles, upvote them, comment (inc. deletion) and read previous comments. 

A username is hardcoded into the application which is used for creation and deletion of comments (users can only delete those comments which they have posted).

*Setup*

Ensure that you have Node.js installed, minimum version 18.13.0

You will need to fork and clone this repo: 
https://github.com/mikeold-2008/fe-nc-news.git  
if you wish to make changes or run the code in a dev environment.

With the repo open in Terminal, make sure to install dependencies by running the command: 
npm install

Next, you can run the command: 
npm run dev 
in order to open up a local copy of the NC News site. 