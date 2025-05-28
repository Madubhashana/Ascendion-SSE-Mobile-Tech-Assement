# Ascendion Tech Assessment - React Native

The project is initiated using the latest version of `@react-native-community/cli` (https://reactnative.dev/docs/getting-started-without-a-framework).
And uses the `react-native: ^0.79.2`.

**IMPORTANT**

> The project borrows `@expo/webpack-config` from `expo` for `react-native-web` to bundle the web, as it is recommanded by the `react-native-web`. Otherthan that, the entire project is built on React-Native framework.

## Setup the project

1. Clone the Project from git
2. Go to project root directory and run the following commands in the terminal
3. Install dependencies

   2.1 The project uses `yarn` package manager. run `npm install --global yarn` to install the yarn package manger.

   2.2 Run `yarn install` in the project root directory to install the dependencies.

4. Setup iOS

   4.1 Install CocoaPods using Bundler (Recommended)

   - run `bundle install` to install the Bundler dependencies. (follow https://bundler.io/ to gets started with Bundler)
   - run `cd ios && bundle exec pod install` or `yarn pods` to install the Cocoapods dependencies

5. Setup Android

   - Since the project uses the latest RN, you may have to install the NDSK (Side by side) 27.1.12297006

### Run the project locally

1. Build the project
   1. run `yarn ios` to build the dev IOS build
   2. run `yarn android` to build the dev Android build
   3. run `yarn web` to build and run the Web
2. Start the Metro server

   - It will start the metro server automatically when you build the app.
   - If it needs to start the metro server seperately, run `yarn start`

**IMPORTANT**: `yarn start` does not runs the web application. Stop the metro server and run `yarn web` to start the web.

### Validate the questions

- Please update the value of `question` () in `src/App.tsx` file to populate the corresponding answer. The acceptable values are `'question1' | 'question2' | 'question3'`

- The web app uses <Link> from `react-router-dom`, which will be compiled to <a> in the browser.

- Run `yarn test` to execute the unit tests. It has configured a Github Action CI/CD for unit tests as well.
