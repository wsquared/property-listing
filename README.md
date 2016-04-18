https://travis-ci.org/wsquared/frontend-test.svg?branch=master

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm`
* Ensure you're running the latest versions Node `v4.1.x`+ and NPM `2.14.x`+

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app
After you have installed all dependencies you can now run the app. Run `npm start` to start a local server using `webpack-dev-server` 
which will watch, build (in-memory), and reload for you.

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

## Other commands

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### run unit tests
```bash
npm run test
```

### run end to end tests
```bash
# before running
make sure you have your server running in another terminal
# running
npm run e2e

##[AngularClass](https://angularclass.com)
> This project is based from the Angular Class project (https://angularclass.com)

