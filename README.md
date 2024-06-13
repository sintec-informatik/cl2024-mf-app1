# MfApp1

This is a micro frontend project.

## Build and Run
* Build with `npm install`
* Run with `ng serve`
* Navigate to `http://localhost:4201/`

## How the project was created
* Create the project: `ng new mf-app1 --defaults`
* Navigate into project folder: `cd mf-app1`
* Configure remote module federation: `ng add @angular-architects/module-federation --project mf-app1 --port 4201 --type remote`

## Configure a micro frontend
* Add routes in `src/app/app.routes.ts`
* Configure WebPack remote entry in `webpack.config.js`
