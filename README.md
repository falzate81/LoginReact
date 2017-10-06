# SER+ client cross platform

- iOS & Android Apps (based on [React Native](https://facebook.github.io/react-native))
- a Desktop App based on [Electron](http://electron.atom.io)
- a Website App in any browser (based on [React](https://facebook.github.io/react))

## Commit "tags"
- `[ND]{COMMIT_MESSAGE}` : New Dependencies
- `[RD]{COMMIT_MESSAGE}` : Removed Dependencies 

## Libraries/tools

This project uses libraries and tools like:
- ES6 syntax and [Babel](https://babeljs.io)
- [React](https://facebook.github.io/react) for the Website App and Desktop App,
- [React Native](https://facebook.github.io/react-native) for the iOS & Android Apps
- [Electron](http://electron.atom.io) to package the Desktop App
- [Redux](http://redux.js.org/)
- [Grunt](http://gruntjs.com) to create the builds
- [Webpack](https://webpack.github.io) to help during the development phase with hot reloading
- [Redux devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## Basic philosophy

All the code is contained in the `src` directory, especially the 3 main entry files that are used for the builds:
- `index.ios.js` & `index.android.js` are the ones used to build the iOS & Android Apps
- `index.js` is the one used to build the Website App and Desktop App as the code is strictly the same.

### Redux/Flux architecture actions/reducers/stores

All the architecture is share to 100% to all the different builds. This means that all the logic and data management code is done only once and reuse everywhere. This allows us to have an easy tests suite as well and to ensure that our code is working properly on all the devices.

### Components

Basically, every component has a main `Class` which inherits a base `Class` containing all the logic. Then, the main component import a different Render function which has been selected during the build. The file extension `.ios.js`, `.android.js` or `.js` is used by the build tool to import only the right file.

The `.native.js` files contain code that is shared between both mobile platforms (iOS & Android). Currently, the `.ios.js` and `.android.js` files compose this `.native.js` file since all code is shared right now. However, if a component needed to be different for platform specific reasons, that code would be included in the corresponding platform specific files.

At the end, every component is defined by 6 files. If we look at the screen component, here is its structure.

```
Screen.js
|-- ScreenBase.js
|-- ScreenRender.ios.js (specific to iOS build
|-- ScreenRender.android.js (specific to Android build)
|-- ScreenRender.native.js (shared mobile app code - iOS & Android)
\-- ScreenRender.js (used during Website and Desktop build)
```

And here is the main `Class` file which composes the files.

```js
'use strict';

import Base from './ScreenBase';
import Render from './ScreenRender';

export default class Screen extends Base
{
    constructor (props)
    {
        super(props);
    }

    render ()
    {
        return Render.call(this, this.props, this.state);
    }
}
```

# How to build/run the projects

## General requirements before running any specific project

- Install [NodeJS 6.x +](https://nodejs.org/en/download/package-manager/) with NPM
- Install [Yarn](https://yarnpkg.com/)
- Run `yarn` to install all the dependencies, React and React Native among others.
- Run `npm install -g grunt-cli`

## The Mobile Apps (iOS & Android)

### Requirements for React Native

#### iOS

- OS X
- Xcode 6.3 or higher is recommended (Xcode only runs on Mac).
- Homebrew is the recommended way to install node, watchman, and flow.
- `brew install node`
- `brew install watchman`. We recommend installing watchman, otherwise you might hit a node file watching bug.

#### Android

- Follow the official documentation guide here: http://facebook.github.io/react-native/docs/getting-started.html#android-setup

### Running the Mobile Apps

#### iOS

- Open iosApp.xcodeproj and hit run in Xcode.
- Hit cmd+R in your iOS simulator to reload the app and see your change!

#### Android

- Open an emulator. (Genymotion or run `android avd`)
- Run `npm run android:run` in the root of this project.
- If trying to run on a device, read the following guide: http://facebook.github.io/react-native/docs/running-on-device-android.html#content

Congratulations! You've just successfully run the project as an iOS or Android App.

## The Website App

### Requirements for React

There isn't any addtional requirements since you already installed the deps with `yarn`.

### Quick start

- `npm run web-desktop:build` to build the project (at least the first time)
- `npm run web:serve` to preview in the browser at http://localhost:8000/index.web.html or http://localhost:8000/webpack-dev-server/index.web.html with webpack-dev-server and hot reload enabled

Congratulations! You've just successfully run the project as a Website App.

## The Desktop App

### Quick start with Electron

- `npm run web-desktop:build` to build the project (at least the first time)
- `npm run desktop:serve` to launch the desktop app and enable livereload

Congratulations! You've just successfully run the project as a Desktop App.

# Development

## Components
We use Storybook for component development and testing

1. Run `grunt create-component:{ComponentName} `
2. Run storybook development server `npm run storybook`

or

1. Create your component file `src/core/components/{componentName}/{ComponentName}.js`
2. Create your component stories file `stories/{ComponentName}.stories.js`
3. Run storybook development server `npm run storybook`

# Info
[API docs](api-mock/README.md)

# Troubleshooting
- #1
    - Problem: `Unhandled 'error' event with json-server --watch`
    - Cause: `npm run api:mock:x`
    - Solution: On linux, run `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
    - Ref: [GitHub issue](https://github.com/typicode/json-server/issues/361)
- #2
    - Problem: Update NodeJS & NPM versions
    - Solution: On linux, run `sudo apt-get purge nodejs npm`, then install [6.x](https://nodejs.org/en/download/package-manager/)

# Contributing
Before submitting code, please make sure the following is done:
- If you've changed APIs or commands, update the documentation.
- Make sure your code lints `npm run lint` (coming soon)

# Commands

```shell
#--------------------------
# FIRST TIME
#--------------------------

# Android bundle
npm run android:bundle

# iOS bundle
npm run ios:bundle


#--------------------------
# DEVELOPMENT
#--------------------------

# Run storybook
npm run storybook

# Run api mock server (for API request simulator)
# For {api:mock:lan} you need the file {<project-root>/api-mock/.host} with your IP 192.168.x.x
npm run api:mock:{local|lan}

# Start react native packager (for reload and hot reaload)
npm run mobile:start

# Run on Android device (intall and run APK to device)
npm run android:run

# Android shake
npm run android:shake


#--------------------------
# RUN
#--------------------------

# Build web and desktop base
npm run web-desktop:build

# Serve web
npm run web:serve

# Serve desktop
npm run desktop:serve


#--------------------------
# PACKAGING WEB & DESKTOP
#--------------------------

# Serve web dist
npm run web:serve:dist

# Package desktop (linux x86)
npm run desktop:package:linux:86

# Package desktop (linux x64)
npm run desktop:package:linux:64

# Package desktop (windows x86)
npm run desktop:package:windows:86

# Package desktop (windows x64)
npm run desktop:package:windows:64

# Package desktop (all platforms and architectures)
npm run desktop:package:all


#--------------------------
# LINT
#--------------------------

# Project lint
npm run lint
```
