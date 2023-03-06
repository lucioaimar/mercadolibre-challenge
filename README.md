# MercadolibreFrontend

This project was made for a MercadoLibre Tech assesment

## Running the project

First you have to install all the dependencies using `npm install`

To run the project you have to run 2 commnads `npm run start-be` to start the backend and `npm run start-fe` or `ng serve` to start the frontend

After that you can navigate to `http://localhost:4200`

## Running the tests

To run the tests you can use the comman `ng test`

## Considerations

To create this project I used Angular as it's the framework I'm most familiar with, I wanted to use a reactive and declarative architecture using the library rxjs.

For the styling I used Tailwind as it allows me to handle styles very quickly on a project.

I didn't create the unit test for the shared components as I didn't have time but I created all the unit test for components and services in the feature folder.

There was a custom service I used to map the purchases list to one in particular, this was made because the MercadoLibreService for the backend didn't come with a function to retrieve a purchase by id
