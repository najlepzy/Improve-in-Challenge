# My React Application

## Description

This is an application created with React, TypeScript, Chakra UI, and JSON Server for a challenge. The application includes a login screen, a list of bands and genres, and a detail page for each band.

## Getting Started

To start the application you need nodeJS and NPM, then run the following commands:

```bash

npm install

npm  run  dev

npm  run  start-json

```

## Authentication

The application includes a login screen with authentication. Use the following credentials to access the application:

```bash
Email: diego@example.com

Password: 12345678
```

Once these credentials are entered, you can access the application. Without these credentials, you cannot access other URLs in the application.

## Functionality

Once inside the application, at /user/band, you'll find a list of bands and genres fetched from the JSON server using the GET method to the /bands and /genres endpoints, respectively. There is also a logout button.

Clicking on a genre will filter the bands to show only those that match the selected genre. There is also a button to show all bands and return to the initial state.

Clicking on a band name will redirect you to a URL /user/band/{selected band name} that displays its albums, release dates, members, country, and music genre. This is achieved through a global context and inheritance to also make a call to the GET /albums endpoint.

There are two arrows (upward and downward) located next to the title 'List of Bands,' which allow sorting in ascending and descending order for both A-Z and Z-A, respectively.

There is an arrow to exit this screen without having to go back in the browser.

The logout button invalidates the credentials and sets the state to false. If you do not re-enter the credentials, there is no way to access the application.

## Conclusion

I hope this description helps you better understand how my application works. If you have any questions or need more details, feel free to ask.
