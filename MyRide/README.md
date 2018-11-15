# MyRide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


-----------------------## Angular Commands---------------------------

Angular js commands

Created HTTP Json Server   :  json-server --watch db.json


1) Angular Cli ==>   npm install -g @angular/cli

2) Create Project ==> ng new angular-tour-of-heroes

3) Serve On Brower ==>  ng serve --open

4) Create New Component  ==>  ng generate component heroes

5)  New Service   ===>  ng generate service hero

6)	New Module 	==> ng generate module app-routing --flat --module=app
						
						--flat puts the file in src/app instead of its own folder.
						--module=app tells the CLI to register it in the imports array of the AppModule.
						
						
7)	new Class   ==> 	ng generate class hero

8) new Directive  ==>  ng generate directive highlight


9) ng new customer-app --routing:  ==> This creates an app called customer-app and the --routing flag generates a file called app-routing.module.ts, which is one of the files you need for setting up lazy loading for your feature module.

10) new Interface ----> ng g interface Users

11) ng serve --configuration=fr  ----> starting app for language French

12) ng xi18n --outputPath=locale   -----> Create Locale files in xlf format

13) ng new ProjectName --style=scss  -----> create new project with sass set up

14) ng config schematics.@schematics/angular:component.styleext scss   -----> to set up sass / scss for existing project with angular version >= 6
		ng set defaults.styleExt scss  ----> for angular versions < 6
