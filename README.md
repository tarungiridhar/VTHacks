# Web Store Link
https://chrome.google.com/webstore/detail/voice-your-vote/bfdkddkbdbfablicjpaonhghkfkeeoib


# Description
In the status quo, representatives hide behind the veil of internet obscurity and the naivety of Generation Z. Voice Your Vote empowers every young person to be socially active by leveraging the power of generative text AI to give each user direct access to their representative. No longer will young peoples' social opinions be unheard, as Voice Your Vote allows anyone to take part in politics.

## Inspiration
We are all told that in order to make effective civic change, we should reach out to our local representatives and tell them what we want to see in our government. However, this information often feels out of reach to the general public and as a result, discourages civic engagement. We wanted to make a Google Chrome extension that simplifies the process from finding your representative all the way to sending them a message in an easy-to-use, seamless package.

## What it does
Voice Your Vote (VYV),  takes the user's information (i.e. name and address) and returns their representative from the House of Representatives. Next, the extension gives the user the ability to input any concern they have, and VYV uses AI to generate a written message based on the user's input. Then, with a click of a button, that message is copied to the user's clipboard, and they are directed to the representative's website where they can paste their message into the contact form of the website, simplifying the whole process from start to finish.

## How we built it
We wrote the Chrome extension with JavaScript, HTML, CSS, Google Civic Information API, and OpenAI's ChatGPT 3.5 Turbo API.

## Challenges we ran into
Since this was our first time writing a Google Chrome extension, there was a steep learning curve for each and every one of us. After we planned the UI and layout of the app, we spent a lot of time solely doing research into the various technologies we would need to use. Furthermore, getting our local storage working between the various files was also challenge as we still didn't fully understand the architecture layout.

## Accomplishments that we're proud of
Due to prior commitments on the Friday that the event began, we ended up starting 18 hours after the opening ceremony. As a result, we had a severe time crunch going into the event that was even more hurt by our steep learning curve. In the end, though, we were able to create a highly functional application that each and every one of us is proud to have been a part of.

## What we learned
As mentioned above, we learned how to make Google Chrome extensions from scratch. Along with this, we learned how each of these various technologies could communicate with each other. We were able to learn the way extensions store data locally, and the way that this data can be accessed from various parts of the application.


## What's next for VoiceYourVote
In the future, we plan to add autofill functionality within the representative's website. This way, you do not have to re-type your name, address, phone number, etc. when sending a message to your representative. Additionally, we want to add a background server so that API tokens do not have to be stored locally. 
