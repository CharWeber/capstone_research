
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

<details>
<summary> old work notes </summary>
12/17 work notes

* morning
  * started day knowing I wanted to get my calander and reservation ball rolling.
   * step 1 was to create my facilities page, stretch goal: this will only be accessible to staff or admin style users, to create facilities
      * this was tough as a lot of my hooks thought they were in a class component instead of a functional component. Deleted node modules and reinstalled and it worked fine.
   * step 2 is to create some sort of way to easily change whats being rendered on the calender depending on query data and stuff.
   * many bugs ensued, lots of making sure my data is loading and rerendering with new info.
* afternoon
   * I had connected to firebase and was correctly storing reservations from my reservation form
   * however I couldn't get the reservations (or events) to display on the calander
   * turns out it was entirely firebase. When they get a date Object from a js project they convert it into a "timestamp" which JS doesn't know shit about. now whenever I query the data I have to map the data so I can reformat the timestamp back into a Date object. GEEZ FIRESTORE
* EOD
   * was able to get reservations correctly displaying on the calander and can add reservations to specific facilities by passing in the facility id to the calender. this should be an easy way for me to make my calander a little more generic
   * the agenda button on my calander completely breaks my app, not sure why, I thought agenda was a paid feature anyway
   * I just disabled the agenda view, don't want it or need it.


12/10 work notes

* morning
  * started day with trouble adding docs to firestore
      * resolved by looking at Firestore docs (updated add methods in new versions of firebase/firestore)
   * started looking at MUI
      * implemented MUI buttons and grid systems, THis will be the way I format my site I think.
* afternoon
   * started researching Hooks
      * I hadn't implemented any hooks yet so while working on User Account Routing I decided to try some. worked out great!
   * working on component map
      * now my basic routing layout and user auth system is mostly in place. I should be able to focus on the unique sections of the website.
   * also watching react videos
      * https://www.youtube.com/watch?v=f687hBjwFcM
      * https://www.youtube.com/watch?v=xOVqoVuY-5M
         * this series basically got my feet on the ground. It was pretty but of date but I was able to reference the docs and get it started. the process to set up an emulated env is the same but I didn't think I needed to test that. Its admittedly pretty easy. also picked up some nice clean code tricks (like conditionals in variables themselves 'e.g. {user.data?.email})
* EOD
   * watched more videos
   * set up routes and control files for later. Next is to start implementing a facility List similar to the one in C# projects. that will be only acessible to staff if I can get user authorization to work. thats a tretch goal though. After setting up some facilities, then its setting up a calender to keep track of, but mostly display,  reservations for said facilities. Tennis will be the first focus, and then a craft barn with some other features, and maybe a theatre if I get real lucky and cruise through this.



<hr>

1st capstone day

1. connect react fire
 
 <strong>done</strong>

2. finish hw to see how routing works
 
 <strong>done</strong>

5. think about auth and implement as necessary
  
   <strong>done</strong>
3. watch more reactfire videos

<strong>done</strong>

4. try out different components in reactfire

<strong>done</strong>  12/10 work starts here!


6. make a component map for MVP

```
Name of Student: Charlie Weber

Name of Project: Community Center

Project's Purpose or Goal: Ideally allow users to sign-up for and create events at a community center. beginning with tennis courts and possibly expanding all the way to maybe a community theatre. Imagine a place like magnusson park in seattle but centrally organized.

List the absolute minimum features the project requires to meet this purpose or goal:

tennis court reservation system (pool, craft room, etc)
class sign-up
updating sign up sheets
What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

React w/ redux
MongoDB
node.js
I wanna do a MERN stack
If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

theatre show scheduling
theatre inv management
maybe a small childcare/arcade type moment
What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

anime.js
matter.js
phaser.js
Is there anything else you'd like your instructor to know?

This is a pretty loosey goosey idea by design. I'm excited to try and create a little self contained community center / gym organizer but it might end up being one website with a bunch of somewhat unrelated parts. Really i'm just inspired by areas like magnusson park and am astounded that they have so many spaces no one ever uses. I'd be curious what you have to think about it or your suggestions. I'm not super sold on this idea but all my other ideas would require me to pick up something like three.js which could be a major headache to try and learn and my ideas I have for that are already made it seems (I.E. the virtual gallery on the Art institute of chicago)



let me know what you think!

Charlie Weber

```
erik response

```
I actually think this is a pretty great idea! I think this can have a real-world application and works quite well as a capstone portfolio project as well. I can see you've put some thought into it and grabbed something from your own repertoire of "needs" if that makes sense. I see there's probably enough here for 40 hours -- though you might quickly work through your MVP (I know you!). So here are a few things I'd love for you to ponder and consider: 

What sort of user authentication or authorization is needed? 
Will you need any at all? 
Many websites use emails for appointments with no need for any sign-up. Or even just a google account or something. 
If you do, though, you may want to think about how they can interact with the website, and what permissions they have for interacting with others' schedules and appointments. 
What sort of goal are you trying to accomplish with the MERN stack? 
MERN (Mongo, Express, React, Node) seems like a pretty marketable attribute for you to have, and with your other work you've definitely gone outside the box! 
I think this is absolutely the right time to explore, but make sure what stack you choose makes sense for the project. 
Please go ahead and do MERN (I don't want to discourage you at all), and learn what you can! But applications necessitate the stack, not usually the other way around. :) 
If you were to get through your MVP pretty quickly (and consequently your stretch goals), what would you focus on? 
Most of your stretch goals seem great, but simultaneously they seem like quick additions to the database (since your structure will be similar in nature for the other parts)
If you go through all of this, may I suggest finishing up/topping it off with a healthy CSS/Style exploration? I've been recommending Semantic-UI for react users. :)
Otherwise, seriously, great work! This should be a fantastic project for you, and I'm really excited to see what you come up with! Let me know if you have any follow-ups! :) 

-Erik
```

</details>