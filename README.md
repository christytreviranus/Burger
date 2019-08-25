# Drive-By Burger
<p>A full stack, MVC (Model-View-Controller) application that allows you to create burgers (POST), view a list of burgers available to eat (GET), devour burgers (PUT), and throw them away after devoured (DELETE).</p>



## Demo Here:
https://limitless-ocean-51543.herokuapp.com/burgers

## About this project

  * [How the app works](#how-app-works)
  * [How the app is built](#how-the-app-is-built)
  * [MVC design pattern](#about-mvc)
 
### <a name="how-app-works"></a> How the app works
This project is a full stack application designed to allow users to place an order via a text field and submit button.  Each newly created burger is added to the Burgers Made card located on the left side of the screen.  Each burger in the list has a <b>Devour me</b> button. Clicking this button moves the burger from the list on the left side of the screen to the list on the right (i.e. the Devoured Burgers card). Within the Devoured Burgers section, each burger has an <b>I'm Done</b> button that allows you to remove the burger, deleting the burger from the UI as well as from the MySQL database. 

### <a name="how-the-app-is-built"></a> How the app is built
This project uses Bootstrap, Bootswatch, Google Fonts, NPM packages, MySQL, Node, Express, Handlebars, and ORM (Object Relational Mapper). Node and MySQL are used to query and route data in the application. Express is the backend web framework used for this application, and Handlebars is a templating language that is used to generate the HTML.

### <a name="about-mvc"></a> MVC design pattern
This project also follows the MVC (Model-View-Controller) design pattern. The MVC design pattern assigns objects in the application one of three roles (model, view, or controller) and defines the way the different parts of the application communicate with one another.

  * <b>View object:</b>
  A view object is an object in the application that is visible (in the user interface) to the end user of the application. The view displays data from the application's model and learns about any changes to the model data via the controller. For example, in this application, the user enters a burger name in a text field. The view communicates the user input via the controller to the model.

  * <b>Controller object:</b>
  A controller object controls the flow of data between the view and the model (that is, the controller is an intermediary between the two). The controller interprets any user changes made in the view and communicates the changed data to the model. Also, if the model were to change, the controller is what communicates the updated data to the view so that the user can see the updated data in the user interface.

  * <b>Model object:</b>
  A model object manages the data. When data is created or changed by the user in the view (for example, a user devours or throws away a burger), that change is communicated via the controller to the model. Also, when data is created or changed in the model, the model communicates that change via the controller to the view, and the view displays the updated data to the user.

## Getting started
The following section will take you through the steps of setting up this application and getting it running locally on your computer.

If you don't want to set up this project locally and just want to see the deployed application, go to  https://limitless-ocean-51543.herokuapp.com/burgers.

To set up this application locally on your computer, perform the following steps:
  1. Clone the repository
  2. Install Node.js
  3. Install the dependencies
  4. Install MySQL Workbench
  5. Set up a development database
  6. Create a .env file to store your MySQL Password
  7. Verify database connection information
  8. Start the server

## Technologies Used

### Backend technologies
* Node.js
* MySQL
* Express
* ORM - Object Relational Mapping


### Frontend technologies
* HTML
* CSS
* Bootstrap
* Javascript
* jQuery
* Handlebars
