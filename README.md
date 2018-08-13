# renta2z-demo
## node with express and angular
- what angular version? lastest angular version
## How to deploy to heroku?
- set up your heroku project to deploy using GitHub
- package.json (located on root folder) contains all node dependencies
- the scripts section (postinstall) allows npm to install latest packages and build the UI so that the ui will have a dist folder using ng cli from "ui/package.json"
- package.json (ui/package.json) need to have @angular-devkit/build-angular, @angular/cli, and @angular/compiler-cli as depedencies as well as under devDependencies
## How to run locally?
- clone this repo
- $ cd to root folder
- $ npm install
- $ npm start (this will run your node and express server at http://localhost:5001/)
- $ cd ui (go to /ui folder)
- $ npm run gulp-local (this will allow you to call node REST services whild running locally)
- $ ng serve
- navigate to http://localhost:4200/ 
- now you should have node running at port 5001 and ui running at port 4200
- make changes to UI and the page will refresh