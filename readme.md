### Project Description

This is a fullstack application using reactJS and nodeJS
alongside with mySQL. I'm using this repository to learn
fullstack development.

### Project Architecture

# FRONTEND - ReactJS / SASS
root-directory: client/

- public/ 
    <br>
    directory for the files served to the client
- src/sass
    <br>
    directory for the .sass files for this project
    sass files written will be compiled into .css
    files within /dist directory
- src/services
    <br>
    directory for api services for backend 'connections'
- src/
    <br>
    directory for react-components, images and test.js files

# BACKEND - NodeJS / Express
root-directory: /

- config/
    <br>
    directory for the files for connection configurations like mySQL
- controllers/
    directory for controllers that get 
    the requested data from the models
- models/ 
    <br>
    directory for our models
- routes/
    <br>
    directory for the routes that forwards
    requests to the appropiate controller functions.
- index.js
    <br>
    main file for the backend