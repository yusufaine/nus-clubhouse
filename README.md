![Banner](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/Banner.png)
> __The NUS-only voice chat web-app for anything and everything NUS.__

Click [here](https://nusclubhouse.games/) for the latest version of the site, and [here](https://api.nusclubhouse.games:3016/) a very basic voice server we have yet to integrate with our front-end. 

*DISCLAIMER: The voice demo may take a while to load if you're accessing the page for the first time.*

**Level of Achievement**: Gemini
README has been updated for Milestone 3.

# Table of contents

- [Lift-off](#lift-off)
  - [Motivation](#motivation)
  - [Poster](#poster)
  - [Aim](#aim)
  - [Ideal Users](#ideal-users)
  - [Existing Ways](#existing-ways)
  - [Scope of Project](#scope-of-project)
  - [How we're different](#how-were-different)
- [Milestone 1](#milestone-1)
  - [UI Mockup and feedback](#ui-mockup-and-feedback)
    - [Feedback prior to mockup](#feedback-prior-to-mockup)
    - [Design choices](#design-choices)
      - [Logo generation:](#logo-generation)
      - [Font choice and colour scheme:](#font-choice-and-colour-scheme)
    - [Mockups](#mockups)
      - [Login:](#login)
      - [Homepage:](#homepage)
      - [Room page:](#room-page)
      - [Scheduled room page:](#scheduled-room-page)
      - [Another user's profile:](#another-users-profile)
      - [Feedback post mockup](#feedback-post-mockup)
  - [Method of Deployment](#method-of-deployment)
  - [Features implemented](#features-implemented)
    - [User Authentication (For review teams)](#user-authentication-for-review-teams)
    - [User Authentication (For actual users)](#user-authentication-for-actual-users)
  - [Problems encountered](#problems-encountered)
    - [Getting a unanimous agreement on what the UI should look like](#getting-a-unanimous-agreement-on-what-the-ui-should-look-like)
    - [Learning a new language and implementing it to our website](#learning-a-new-language-and-implementing-it-to-our-website)
- [Milestone 2](#milestone-2)
  - [Program flow](#program-flow)
    - [General flow of events for user](#general-flow-of-events-for-user)
    - [Room-Voice program flow](#room-voice-program-flow)
  - [Features implemented](#features-implemented)
    - [NUS Email Login and Verification](#nus-email-login-and-verification)
    - [Rooms for users to join](#rooms-for-users-to-join)
    - [Demo of the voice features in the backend](#demo-of-the-voice-features-in-the-backend)
  - [Problems encountered](#problems-encountered)
    - [Growing Pains with Elixir](#growing-pains-with-elixir)
    - [Voice server issues](#voice-server-issues)
- [Milestone 3](#milestone-3)
  - [Features implemented](#features-implemented)
    - [Updated Feed](#updated-feed)
    - [Upcoming Rooms](#upcoming-rooms)
  - [Problems encountered](#problems-encountered)
    - [Reason for dropping to Gemini](#reason-for-dropping-to-gemini)
- [Project Log](#project-log)

# Lift-off
Here begins our mission --

## Motivation
Having gone through the first-year of university during the COVID-19 pandemic, we realised that there was one thing that was fundamentally missing in our lives as students--social interaction. We missed complaining about lectures, talking to friends and classmates, providing or requesting help for anything school-related, or just the simple small talk.

Current platforms and services, while fulfilling the role of remote communication, have felt lacking in some way as they are too clunky--coming in a form of a written medium, needing to schedule calls and getting specific parties onboard, or the invite links get lost in the inbox. 

_Sounds familiar?_


## Poster
![Open image in new tab for a clearer version](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/poster-ms3.png)

Open [image in a new tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/poster-ms3.png) for a clearer version.


## Aim
NUS Clubhouse is a voice-chat platform that is easy to use and navigate, and would fill the social void during this pandemic, all while catering to the student life that many had looked forward to.


## Ideal Users
1. NUS students looking to discuss controversial/interesting topics (best food in NUS, hall life, COVID changes, cheating in exams, making friends in online university, etc)
2. CCA/Camp organisers looking for ways to market their CCAs/camps to NUS students that don’t know they exist (hard to discover NUS camp details without friends/connections)
3. NUS students looking for more info about specific mods from wider range of students (reviews in NUSmods takes more effort, high chance reviewer did well -- survivorship bias)
4. NUS professors/seniors/TAs setting up Q&A for newer NUS students looking for general school/life advice (hard to set up casual/informal Q&A sessions and attract students to attend them through existing platforms)
5. Students who believe that they can provide entertaining content in their own way, through setting up NUS-based podcasts (with their friends or other students as guests), showing their creativity by covering songs or debuting their original work to the student community.


## Existing Ways
1. Online forums like r/nus on Reddit or group chats with friends (hard to have deeper discussion live on online forums due to longer/unknown reply times and nature of text forums)
2. Marketing via word-of-mouth through friends, posters, social media, website (hard to connect to NUS students who aren’t following their social media accounts)
3. Can only find reviews on r/nus or NUSmods (may not be sufficiently detailed or updated)
4. Can only ask friends or search for course intro briefings (can be hard to find)
5. Streaming on other platforms such as Twitch/YouTube/Facebook to a very small audience. 


## Scope of Project
The web-based application would serve as a platform where users such as students, professors, or teaching assistants of the NUS community can create rooms for their own specific uses such as module topic discussion or current affairs. Those rooms would be open any user to join and listen or participate in

- Features to be completed by
	- June:
		- NUS Authentication
		- Voice chat functionality
		- Setting up rooms
	- July:
		- Voice chat with rooms
		- Schedule rooms
		- Calendar of events for upcoming rooms
	- Beyond Orbital:
		- Private rooms
		- Replay rooms
		- Export rooms


## How we're different
1. Skype
	- No need to specifically call an add people into calls to have a discussion among multiple people
2. Zoom
	- No longer need to look through emails or chat groups to find links to the appropriate Zoom room

# Milestone 1

Overview:
- We created a mockup of how our app was going to be and asked some of our friends to give us some feedback to give a rough idea on what we should focus on.
- Decided on how to deploy our web application
- Implemented a simple authentication system
- Experimenting, working and deploying web applications using a new language that none of us has used before -- Elixir, and the problems that arose.

## UI Mockup and feedback

The UI mockups shared here are only the main pages of the web app and does not include prompts such as "room creation" as they would appear as another layer on top of the page that is currently being viewed, but blurred out so that the prompt is in focus.

### Feedback prior to mockup
- Target audience demographic: NUS Students 
- Feedback in decreasing level of importance:
	1. Easy to log-in
		- Participants don't want to create/remember another password
	2. Looks good and easy to use
		- It is worth nothing that participants are not unanimous in whether we should make the website in dark mode or not. Discussion on this is found in [Font choice and colour scheme](#font-choice-and-colour-scheme).
	3. Ability to see what rooms are ongoing (similar to ongoing lessons in LTs)
	4. Ability to see upcoming lessons (rooms)

### Design choices
#### Logo generation:
We wanted a logo that would that would make this stand out as an NUS app and came up with using the lion emoji (🦁) and filling it with the NUS-orange (#EF7B00).

![Logo creation](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/00-00-logo-generation.png)
Open [image in new a tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/00-00-logo-generation.png) for a clearer version.

#### Font choice and colour scheme:
With reference to the colours used in existing NUS products (as seen above) we went to test and pick a few colours that would serve as the main colours that we for the app. Initially we had intended for the website to be in a dark theme by default, however, we realised that while it may be easy on the eyes, the feedback we have gotten on whether we should use dark mode is that readability in bright conditions may be an issue, and having a pure-white (#000000) may be a bit too bright and harsh on the eyes. Initially the choice was to go for something closer to the sepia tone as, anecdotally, it is easier on the eyes. However, it did not go well with the NUS colour theme that we were going for as it takes away from the NUS-orange. We then finally came to the conclusion of using a brighter off-white which we felt struck a balance between aesthetics and function (#FEFEFA).

We then conducted another round of discussion to choose the font, with a smaller group size as it was a voluntary basis. We had 7 fonts in mind and after the survey, we concluded that using "IBM Plex Sans" for the font of the logo and "Inter" as the Header, Subheader, and Body fonts. We also opted for the main text to be a lighter shade of black (#2D3748) as the contrast of pure-black (#FFFFFF) was too drastic.

A summary of that discussion was that serif-fonts were too formal-looking and we needed something more casual and agreed on a rounder-style font, hence we chose the combination of "IBM Plex Sans" and "Inter".

The decision-making process is also recorded as follows:

![Decision-making Whiteboard](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/00-01-decision-making.png)
Open [image in new a tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/00-01-decision-making.png) for a clearer version.

### Mockups
#### Login:

![Login page](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/01-Login.png)
Open [image in new a tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/01-Login.png) for a clearer version.

#### Homepage:

![Homepage](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/02-Home.png)
Open [image in new a tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/02-Home.png) for a clearer version.

#### Room page:

![Room page](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/03-Room.png)
Open [image in new a tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/03-Room.png) for a clearer version.

#### Scheduled room page:

![Scheduled room page](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/04-Scheduled-Rooms.png)
Open [image in new a tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/04-Scheduled-Rooms.png) for a clearer version.

#### Another user's profile:

![Other user's profile](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/05-User-Profile-Page.png)
Open [image in new a tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/05-User-Profile-Page.png) for a clearer version.

#### Feedback post mockup 
- Target audience demographic: NUS Students 
- Feedback in decreasing level of importance:
	- The liked the ability to login with their NUS email
	- Homepage is very clear and intuitive, showing the ongoing rooms and upcoming rooms
	- Voice room clearly distinguishes who are speaking and listening
	- Profile page allows users to share their social links

## Method of Deployment
The goal was to use whatever resources we already have to deploy the application for internal testing and feedback from potential users and other review teams/advisor. Hence the option of deploying on a local machine/network would not be feasible. At that moment one of us had a Raspberry Pi that already had a static public IP and a free DNS service that we could use to make it easy for external testing but after some research, the Raspberry Pi might not have enough resources to support what we may need. Additionally, we did not want to worry about properly securing the web server as failure to do so on my home network may end up badly. We then utilised one of our GitHub education packs to redeem some Digital Ocean credits and got the cheapest droplet and managed database service.

## Features implemented
Our focus for Milestone 1 of the project is on user-experience and had spent the majority of the time on ensuring that the target audience (NUS students) enjoy using the website, or at the very least, not have any big complaints on it. 

### User Authentication (For review teams)
After the back and forth on how the website should look like, we also had to implement the minimum requirement which is an authentication system. For this, we opted to use an already existing Elixir library to help us with the authentication. At the moment of implementation for Milestone 1, we opted for authentication through Discord or GitHub as the teams who would be reviewing and giving feedback on the website so far are other Orbital teams and they are bound to have a GitHub or Discord account.

### User Authentication (For actual users)
We had the authentication for GitHub and Discord ready in time for Milestone 1, but we had created another branch for authentication via NUS email. We had originally planned to use the NUS API to allow single-sign ons (SSO). This would allow current NUS personnel to login and use the website in one-click, assuming that they're already logged in to an NUS service such as their NUS email. However the Orbital team needed to collate and liaise with NUS IT to see if it were feasible to do so, and if so, render assistance to those who were keen on using the NUS API. Hence we were not able to implement this before the Milestone 1 submission. 

When the guide for using the NUS API finally came out, we realised that having NUS SSO might introduce another layer that we may need to troubleshoot. 

## Problems encountered
### Getting a unanimous agreement on what the UI should look like
While us as a team could agree on what we consider to be a good choice, the participants of the survey were not as unanimous. Hence we had to do follow up discussions/interviews to ask them why they chose the choices that they did and found a compromise. One of those was the decision to use the off-white instead of the dark mode that we had originally intended to use.

### Learning a new language and implementing it to our website
For this project, we took on the challenge of learning a new programming language which seemed interesting and can work with web development -- Elixir. The problems faced here were nothing out of the ordinary, syntax issues, getting used to how to test Elixir code, and the likes. The real challenge here was how Elixir uses the Functional Programming (FP) paradigm that we had an encounter back in CS2030. Thankfully it was not too hard to get a grasp of it with help from online resources such as tutorial videos and documentation.


# Milestone 2

Overview:
- We implemented the NUS email login with verification of user 
- Confirmed the program flow and how rooms and voice chat would work (see [Program Flow](#program-flow))
- Managed to create rooms in the webapp
- Deployed the voice chat demo in the backend

## Program flow
### General flow of events for user
![Program Flow](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/nusch-prog-flow.png "Program Flow")
Open [image in new a tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/nusch-prog-flow.png) for a clearer version.

### Room-Voice program flow
![Voice backend flow](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/voice-backend.png "Voice backend flow")
Open [image in new a tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/voice-backend.png) for a clearer version.

## Features implemented
After getting a clear picture of how the web application would interact with each other, we implemented the following:

### NUS Email Login and Verification
As mentioned in Milestone 1, while we initially intended to use NUS' API to allow easier logins, we opted for a simpler implementation of only allowing NUS emails to log in and only after verifying. This is to ensure that the users are genuinely from NUS before being able to use our web application. We did this by users with an NUS-suffixed email (@u.nus.edu) to sign up. After which, they would get an email (though they would need to check their Junk inbox as it's from an external domain -- Gmail)

### Rooms for users to join
Part of the core feature of our web application is to allow the creation of rooms for users to join for their classes or to socialise with other NUS students. While the feature sounds easy to implement, there were a lot of frontend-backend hurdles that we kept facing and was too time-consuming. Thankfully all of them were manageable and we would not consider them a large issue and chalked it up to our inexperience with Elixir.

### Demo of the voice features in the backend
While working on the rooms, we also went to research and setup a demo of the voice feature. In it, we also enabled screenshare and video streams in order to future-proof our application for two reasons:
1. To give us the option of transitioning our voice application to something more by allowing screen-sharing and video streams, and 
2. Better way to test if the code for Mediasoup/WebRTC works well.

During the duration of Milestone 2, we managed to get it up and running in our backend but we were unable to link it with our rooms as we were also ironing out the issues with that feature.

## Problems encountered
### Growing Pains with Elixir
While we had gone through a crash course in using Elixir back in Milestone 1, we realised that it barely sufficed to get a web application running and had to find other resources that focusses more on using Elixir and Phoenix to run and host web applications and how they interact with current web frameworks, which in our case is React.

Thankfully, we had gone through a crash course on Elixir during MS1 and the we gathered later on was built on top of that. Having some background in React, this allowed us to design and deploy our front-end, but we have yet to connect it to our voice server so there are limitations to our MS2 submissions such as being unable to create and join rooms.

### Voice server issues
When we entered Orbital, we had a certain technology stack in mind especially when it came to the voice server. The goal was to use [Mediasoup](https://github.com/versatica/mediasoup-client/), which is built on top of WebRTC as we believed that it would be simpler to implement for our use-case of creating and maintaining different voice rooms instead of just one sole instance, and [RabbitMQ](https://www.rabbitmq.com/) to help signal changes in the voice rooms such as who leaves, who joins, who are the speakers and listeners. 

However, 2 weeks into working into the MS2 submission, we had encountered a large issue that is common when it comes to new technologies -- lack of available resources. While there are documentations, we had difficulty trying to implement the core feature of our web application, mainly in using RabbitMQ alongside Mediasoup. This is when we brought our issue up to our advisor (Neil) and had a discussion on how to move forward as we understood that we had to have at least some semblance of a functional core feature for MS2. We were given 3 situations which we may choose to pursue at our own discretion but was informed that we may be penalised.

1. Changing the voice technology to WebRTC and consider changing RabbitMQ to something like web-sockets,
2. Deliver the core feature late for MS2, but get heavily penalised for being unable to meet the deadline.

We initially opted for option 2 as we weren't too confident in delivering some form of voice functionality as well as a front-end. However we managed to divide the work up nicely and got a very simple voice (and video) [demonstration](https://api.nusclubhouse.games:3016) up in our back-end but unfortunately did not have time to link it with our front-end. Additionally in doing so, we had to strike a compromise and opt for using web-sockets instead of RabbitMQ for the demonstration for MS2. We still intend to learn and implement RabbitMQ if possible.

# Milestone 3

Overview:
- Properly populated and displayed the ongoing rooms on the homepage
- Differentiated ongoing rooms and scheduled rooms, populate and display upcoming rooms
- Implemented user profile and following-followers
- Dropped from Apollo 11 to Gemini

## Features implemented
During this milestone, we had to focus on the features that were easy to implement and asked some of the participants of our discussion group back from Milestone 1 and they mentioned:
1. Issues with the homepage not properly reflecting rooms (when leaving a room, its still displayed on the feed),
2. Upcoming rooms is a feature that they would love to see functioning.

### Updated Feed
The issue with the feed in the homepage was quickly fixed as some of the properties of our rooms were not being updated properly. Additionally when leaving a room where a user is the last one, it requires the page to be hard-refreshed (Ctrl/Command-Shift-R)

### Upcoming Rooms
We've implemented a button in the "New Room" prompt to create a new upcoming room instead of a live room. The room's details would then populate the upcoming rooms list where the upcoming few rooms would be displayed.

## Problems encountered
### Reason for dropping to Gemini
With a heavy heart, we informed our advisor, Neil, that we faced a problem with our voice backend. While we got it up and running in the demo that we managed to set up in MS2, we were not able to get the voice channel to transmit voice data, even after spending several hours through documentation and forum posts. We even tried to look for alternatives that can replace the function of Mediasoup but all other code demos were too outdated or required a paid solution which would defeat the point of us pursuing this project. With the features that we have now and the demo of the voice backend working, Neil has also advised us to drop to Gemini as we were not able to deliver.

# Project Log
Click [here](https://docs.google.com/spreadsheets/d/1Em_Xho0Dyh5RRMdYm2mk6zK3dx69IU9AmThPVOdoCqk/edit?usp=sharing) to view the breakdown of our team's progress.
