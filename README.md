# Chuck Norris Jokes App

This app is a Chuck Norris jokes app built with React Native, Expo CLI, Redux, and Redux Toolkit with Query.

## Installation
Before you can run the app, you need to have Node.js and Expo CLI installed on your machine.

1. Clone this repository: git clone https://github.com/Heyfruz/ChuckNorris.git
2. Navigate to the project directory: cd chucknorris
3. Install the dependencies: `yarn install`

## Usage
To run the app, you can use the following command: 

```
yarn start
```

This will start the Expo CLI development server and open the Expo Developer Tools in your browser.

## Running on iOS Simulator
To run the app on an iOS device or simulator:

1. Make sure you have Xcode installed on your machine
2. Run the command `yarn run ios`
3. Follow the instructions in the Expo Developer Tools to open the app on your iOS device or simulator.

## Running on Android Emulator
To run the app on an Android device or emulator:

1. Make sure you have Android Studio installed on your machine
2. Run the command `yarn run android`
3. Follow the instructions in the Expo Developer Tools to open the app on your Android device or emulator.

## Running on a Physical Device
To run the app on a physical device, you will need to download the Expo Go app on your iOS or Android device.

1. On your device, open the App Store (iOS) or Google Play Store (Android) and search for "Expo Go".
2. Install the Expo Go app on your device.
3. Once the app is installed, open it and sign in or create an Expo account if you don't have one already.
4. Back on your computer, run the following command to start the Expo server and generate a QR code:
```
expo start --tunnel
```
5. Scan the QR code with your device's camera app, or with the QR code scanner built into the Expo Go app.
6. The app will then be loaded on your device and you can interact with it just like on a simulator.

## Features

### Authentication
The app includes a login screen and a sign up screen. The forms are validated before you can login. User data is not persisted in the Redux store.

### Navigation
The App Navigator consists of a Tab with two screens and a Stack with two screens.

#### Tab
The first screen in the Tab is the 'Dashboard' screen, where the available categories are displayed. When a category is clicked, the app navigates to the 'Random' screen, where a random joke is queried based on the selected category.

The second screen in the Tab is the 'Search' screen. Here, the user can query the API and retrieve a list of jokes. When a joke is clicked, the app navigates to the 'Result' screen, where the user can view the details of the joke.

#### Stack
The first screen in the Stack is the 'Random' screen, where a random joke is queried based on the selected category. The user can click on the 'Next' button to get a new random joke.

The second screen in the Stack is the 'Result' screen, where the user can view the details of a specific joke.

## API
The app makes use of the [Chuck Norris jokes API](https://api.chucknorris.io/) to retrieve categories, search for jokes, and retrieve random jokes based on a selected category. The API requests are handled using Redux Toolkit with Query.

## Credits
The app was built by Anumoka Faithful. It uses the [Chuck Norris jokes API](https://api.chucknorris.io/) and the following packages:

- React Native
- Expo CLI
- Redux
- Redux Toolkit with Query
- React Navigation
- Yup
