
<img width="3711" alt="Screens" src="https://github.com/StellaCea/chatApp/assets/80626240/764f5325-a9f0-43fb-ae16-4333a4f5bf9f">

# Chat App

The app provides users with a chat interface and options to share images and their locations.

## Key Features ##
- User Registeration: A page where users can enter their name and choose a background color for the chat screen before joining the chat. 
- Chat display: A page displaying the conversation, as well as an input field and submit button.
- Additional Communication Features: The chat must provide users with two additional communication features: sending images and location data.
- Data Storage: Data gets stored online and offline.

## User Stories ##
- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.
- As a user, I want to be able to send messages to my friends and family members to exchange the latest news.
- As a user, I want to send images to my friends to show them what I’m currently doing.
- As a user, I want to share my location with my friends to show them where I am.
- As a user, I want to be able to read my messages offline so I can reread conversations at any time.
- As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

## Tech Stack ##
- React Native
- Gifted Chat
- Expo
- Firebase & Firestore
    - Firebase Authentication for anonymous sign-in
    - Firestore Database for storing messages
    - Firebase Storage for storing images

## Setting up the development environment ##
- Clone the repository: git clone https://github.com/StellaCea/chatApp.git

## Expo ##
- Install Expo CLI as a global npm package: yarn add global expo-cli
- Create an account and log in at https://expo.dev/.
- Follow expo CLI's instructions.
- Install the Expo Go app on your phone (for testing purposes)
- Start the project: npx expo start
- Scan the QR code provided in your terminal
