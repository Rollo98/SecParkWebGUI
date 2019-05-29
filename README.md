# SecPark Web GUI

Graphic user interface for SecPark project.

## Prerequisites

What do you need to install before you start the project

```
Node >= 10
```

## Installing

To run the application follow the command

```
npm start
```

## Built With

* [Node](https://nodejs.org/en/)
* [React](https://reactjs.org/) - The web framework used
* [Npm](https://www.npmjs.com/) - Dependency Management

## Components

* [AuthGuard - component to check for jwtToken to see if a user it's logged in or not](https://github.com/closedopensource/SecParkWebGUI/blob/8144eb11d60117263b2e5f9b5768356ad36e539f/src/components/HOCs/authGuard.js#L4)
* [Header - custom/dynamic navigation bar for logging in/out](https://github.com/closedopensource/SecParkWebGUI/blob/8144eb11d60117263b2e5f9b5768356ad36e539f/src/components/Header.js#L8)
* [Parklist - dashboard generated for each user that's logged in](https://github.com/closedopensource/SecParkWebGUI/blob/8144eb11d60117263b2e5f9b5768356ad36e539f/src/components/Parklist.js#L4)
* [SignIn - component for login fields](https://github.com/closedopensource/SecParkWebGUI/blob/8144eb11d60117263b2e5f9b5768356ad36e539f/src/components/SignIn.js#L9)
* [CustomInput - input field used in SignIn component](https://github.com/closedopensource/SecParkWebGUI/blob/8144eb11d60117263b2e5f9b5768356ad36e539f/src/components/CustomInput.js#L3)

## API calls
* [Postman](https://www.getpostman.com/) - Testing api calls

[API call for signing in](https://github.com/closedopensource/SecParkWebGUI/blob/8144eb11d60117263b2e5f9b5768356ad36e539f/src/actions/index.js#L13)

[API call for populating the dashboard with plates after the user logged in](https://github.com/closedopensource/SecParkWebGUI/blob/8144eb11d60117263b2e5f9b5768356ad36e539f/src/components/Parklist.js#L16)

## Versioning

We use [GitHub](http://semver.org/) for versioning.

## License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details
