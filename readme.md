### Project Description

This is a fullstack application using reactJS and nodeJS
alongside with mySQL. I'm using this repository to learn
fullstack development.

### Project Architecture

# FRONTEND - ReactJS / SASS
root-directory: client/

- public/
    directory for the files served to the client
- src/sass
    directory for the .sass files for this project
    sass files written will be compiled into .css
    files within /dist directory
- src/services
    directory for api services for backend 'connections'
- src/
    directory for react-components, images and test.js files

# BACKEND - NodeJS / Express
root-directory: /

- config/
    directory for the files for connection configurations like mySQL
- controllers/
    directory for controllers that get 
    the requested data from the models
- models/ 
    directory for our models
- routes/
    directory for the routes that forwards
    requests to the appropiate controller functions.
- index.js
    main file for the backend