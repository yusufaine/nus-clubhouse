![](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/Banner.png)
>  __The NUS-only voice chat web-app for anything and everything NUS.__

Click [here](https://nusclubhouse.games/) for the latest version of the site, and [here](https://api.nusclubhouse.games:3016/) a very basic voice server we have yet to integrate with our front-end.

###### README has been updated for Milestone 2 completion, refer to version history for changes.

# Table of contents

- [Motivation](#motivation)
- [Poster](#poster)
- [Aim](#aim)
- [Ideal Users](#ideal-users)
- [Existing Ways](#existing-ways)
- [Scope of Project](#scope-of-project)
- [Problems Encountered](#problems-encountered)
  - [Milestone 2](#milestone-2)
    - [Growing Pains with Elixir](#growing-pains-with-elixir)
    - [Voice Server Issues](#voice-server-issues)
- [How We're Different](#how-were-different)
- [Program flow](#program-flow)
- [UI Mockup](#ui-mockup)
- [Project Log](#project-log)

# Motivation

Having gone through the first-year of university during the COVID-19 pandemic, we realised that there was one thing that was fundamentally missing in our lives as students--social interaction. We missed complaining about lectures, talking to friends and classmates, providing or requesting help for anything school-related, or just the simple small talk.

Current platforms and services, while fulfilling the role of remote communication, have felt lacking in some way as they are too clunky--coming in a form of a written medium, needing to schedule calls and getting specific parties onboard, or the invite links get lost in the inbox. 

_Sounds familiar?_

# Poster

![Open image in new tab for a clearer version](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/2810-2.png)

Open [image in a new tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/2810-2.png) for a clearer version.

# Aim

NUS Clubhouse is a voice-chat platform that is easy to use and navigate, and would fill the social void during this pandemic, all while catering to the student life that many had looked forward to.

# Ideal Users
1. NUS students looking to discuss controversial/interesting topics (best food in NUS, hall life, COVID changes, cheating in exams, making friends in online university, etc)
2. CCA/Camp organisers looking for ways to market their CCAs/camps to NUS students that don’t know they exist (hard to discover NUS camp details without friends/connections)
3. NUS students looking for more info about specific mods from wider range of students (reviews in NUSmods takes more effort, high chance reviewer did well--survivorship bias)
4. NUS professors/seniors/TAs setting up Q&A for newer NUS students looking for general school/life advice (hard to set up casual/informal Q&A sessions and attract students to attend them through existing platforms)
5. Students who believe that they can provide entertaining content in their own way, through setting up NUS-based podcasts (with their friends or other students as guests), showing their creativity by covering songs or debuting their original work to the student community.


# Existing Ways
1. Online forums like r/nus on Reddit or group chats with friends (hard to have deeper discussion live on online forums due to longer/unknown reply times and nature of text forums)
2. Marketing via word-of-mouth through friends, posters, social media, website (hard to connect to NUS students who aren’t following their social media accounts)
3. Can only find reviews on r/nus or NUSmods (may not be sufficiently detailed or updated)
4. Can only ask friends or search for course intro briefings (can be hard to find)
5. Streaming on other platforms such as Twitch/YouTube/Facebook to a very small audience. 

# Scope of Project

The web-based application would serve as a platform where users such as students, professors, or teaching assistants of the NUS community can create rooms for their own specific uses such as module topic discussion or current affairs. Those rooms would be open any user to join and listen or participate in

- <span style="text-decoration:underline;">Features to be completed by</span>
    - <span style="text-decoration:underline;">June</span>:
        1. NUS authentication 
           - Completed: Authentication done using NUS email instead of NUS API.
           - Authentication by Github/Discord
        2. Voice chat functionality 
           - Work-in-progress: Hit a major roadblock here (more details in [Problems Encountered](#problems-encountered)).
           - Due to how we had planned our web application to work, there was not much available documentation and resources that helped us with setting up the voice-element to our web application.
           - We managed to get a barebones version of voice-chat functionality (with video for easier demonstration) before the end of June.
        3. Setting up rooms
           - Work-in-progress: Dependent on (2).
           - While we have the front-end ready, we have yet to link it with the voice server.

    - <span style="text-decoration:underline;">July</span>:
        1. Voice chat with rooms (Deliver by 2<sup>nd</sup> week of July)
        2. Schedule rooms (Deliver by end of July)
        3. Calendar of events for upcoming rooms (Deliver by end of July)
           - Dependency: Schedule rooms (2)

    - <span style="text-decoration:underline;">Beyond Orbital timeframe</span>:
        1. Private rooms (password needed to enter)
        2. Replay rooms (available for 24 hours from when the room closed)
        3. Export rooms (upload events that happened in the room, podcast/performances, to other platforms)

# Problems Encountered
## Milestone 2

### Growing Pains with Elixir
While we had gone through a crash course in using Elixir back in Milestone 1, we realised that it barely sufficed to get a web application running and had to find other resources that focusses more on using Elixir and Phoenix to run and host web applications and how they interact with current web frameworks, which in our case is React.

Thankfully, we had gone through a crash course on Elixir during MS1 and the we gathered later on was built on top of that. Having some background in React, this allowed us to design and deploy our front-end, but we have yet to connect it to our voice server so there are limitations to our MS2 submissions such as being unable to create and join rooms.

### Voice Server Issues
When we entered Orbital, we had a certain technology stack in mind especially when it came to the voice server. The goal was to use [Mediasoup](https://github.com/versatica/mediasoup-client/), which is built on top of WebRTC as we believed that it would be simpler to implement for our use-case of creating and maintaining different voice rooms instead of just one sole instance, and [RabbitMQ](https://www.rabbitmq.com/) to help signal changes in the voice rooms such as who leaves, who joins, who are the speakers and listeners. 

However, 2 weeks into working into the MS2 submission, we had encountered a large issue that is common when it comes to new technologies -- lack of available resources. While there are documentations, we had difficulty trying to implement the core feature of our web application, mainly in using RabbitMQ alongside Mediasoup. This is when we brought our issue up to our advisor (Neil) and had a discussion on how to move forward as we understood that we had to have at least some semblance of a functional core feature for MS2. We were given 3 situations which we may choose to pursue at our own discretion but was informed that we may be penalised.

1. Changing the voice technology to WebRTC and consider changing RabbitMQ to something like web-sockets,
2. Deliver the core feature late for MS2, but get heavily penalised for being unable to meet the deadline.

We initially opted for option 2 as we weren't too confident in delivering some form of voice functionality as well as a front-end. However we managed to divide the work up nicely and got a very simple voice (and video) [demonstration](https://api.nusclubhouse.games:3016) up in our back-end but unfortunately did not have time to link it with our front-end. Additionally in doing so, we had to strike a compromise and opt for using web-sockets instead of RabbitMQ for the demonstration for MS2. We still intend to learn and implement RabbitMQ if possible.

# How We're Different

1. Skype
    * No need to specifically call an add people into calls to have a discussion among multiple people

2. Zoom
    * No longer need to look through emails or chat groups to find links to the appropriate Zoom room

# Program flow

![Program Flow](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/nusch-prog-flow.png "Program Flow")

Open [image in new a tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/nusch-prog-flow.png) for a clearer version.

![Voice backend flow](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/voice-backend.png "Voice backend flow")
Open [image in a new tab](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/voice-backend.png) for a clearer version.

# UI Mockup

Login:

![Login page](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/01-Login.png)

Homepage:

![Homepage](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/02-Home.png)

Room page:

![Room page](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/03-Room.png)

Scheduled room page:

![Scheduled room page](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/04-Scheduled-Rooms.png)

Another user's profile:

![Other user's profile](https://raw.githubusercontent.com/aidanaden/nus-clubhouse/main/submissions/mockup-ui/05-User-Profile-Page.png)

# Project Log
Click [here](https://docs.google.com/spreadsheets/d/1Em_Xho0Dyh5RRMdYm2mk6zK3dx69IU9AmThPVOdoCqk/edit?usp=sharing) to view the breakdown of our team's progress.
