
# Community Organizer

### a quick scheduling app designed for fast scalability and live calendar updates

## by Charlie Weber

## Description

this app uses react and reactfire to listen to a database and provide real time updates to the user's calendar.
<hr />

## Technologies

React
ReactFire 
React-Big-Calendar
React Date Picker
date-fns 
Material UI

## installaion

1. download or clone this repo to your desired directory
2. navigate in your terminal to the capstone -prelimb project

        cd capstone_research/capstone-prelimb

3. run this command ot install necessary packages

        npm install

4. create a .env file in the main dir capstone-prelimb and put this code inside

```
REACT_APP_FIREBASE_API_KEY = "YOUR_API_KEY"
REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR_DOMAIN_NAME.firebaseapp.com"
REACT_APP_FIREBASE_DATABASE_URL = "YOUR_DATABASE_URL.firebaseio.com/"
REACT_APP_FIREBASE_PROJECT_ID = "YOUR_PROJECT ID"
REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR_STORAGE_BUCKET.appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR_MESSENGER_SENDER_ID"
REACT_APP_FIREBASE_APP_ID = "YOUR_FIREBASE_APP_ID"
```
  please replace the holders with your firebase information. this is sensitive info and shouldn'rt be pushed online to a remote repository.

5. run this command to intitalize the application

      npm run start

## Known Bugs
unfortunately this app doesn't account for conflicting reservations

## License
_[GPL](https://opensource.org/licenses/gpl-license)_

## Contact Information

charlesweber@gmail.com

## Photos
 Background Photo by <a href="https://unsplash.com/@echaparro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar Chaparro</a> on <a href="https://unsplash.com/collections/8279756/media-player-bg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

