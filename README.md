# renta2z-demo
## node with express and angular
- what angular version: lastest angular version
## Deploy to heroku
- set up your heroku project to deploy using GitHub
- package.json (located on root folder) contains all node dependencies
- the scripts section (postinstall) allows npm to install latest packages and build the UI so that the ui will have a dist folder using ng cli from "ui/package.json"
- package.json (ui/package.json) need to have @angular-devkit/build-angular, @angular/cli, and @angular/compiler-cli as depedencies as well as under devDependencies