# PGM Platform

PGM Platform

Live demo [_here_](https://pgm-platform-sahincinar.onrender.com/).

## Setup/Installation Requirements

-   npm i
-   cd server => npm run start
-   cd client => serve -s build

## Client

`.env` file under the client folder with the following content:

```
REACT_APP_NODE_ENV=development
REACT_APP_GRAPHCMS_CONTENT_API=
REACT_APP_GRAPHCMS_ACCESS_TOKEN=e
REACT_APP_AUTH_KEY_LOCALSTORAGE=react-boilerplate-pgm-4:currentUser
```

## Seeder

`development.env` file under server folder with the following content:

```
NODE_ENV=development
GRAPHCMS_CONTENT_API=
GRAPHCMS_ACCESS_TOKEN=
```

## Server

`development.env` file under server folder with the following content:

```
NODE_ENV=development
HOST=127.0.0.1
POST=8080
JWT_SECRET=
JWT_EXPIRE=24h
GRAPHCMS_CONTENT_API=
```

## License

This project is open source and available under the [Apache License]().

## Contact

Created by [@SahinCinar](Sahincinar2003@hotmail.com) - feel free to contact me!
