Home Page:
![home](https://user-images.githubusercontent.com/51275356/73564109-863ede80-4424-11ea-8975-5a77c9bc54e7.JPG)

Add Menu:
![addmenu](https://user-images.githubusercontent.com/51275356/73564260-caca7a00-4424-11ea-9559-e66b261fffc4.JPG)

Menu to update one:
![update](https://user-images.githubusercontent.com/51275356/73564425-239a1280-4425-11ea-9918-fed75268b196.JPG)

Menu to update owner on more than one document:
![updatemany](https://user-images.githubusercontent.com/51275356/73564433-27c63000-4425-11ea-92c8-994b6af6e37b.JPG)

Menu to delete a specific document based on registration ID:
![delete](https://user-images.githubusercontent.com/51275356/73564442-2c8ae400-4425-11ea-9066-8e1347267679.JPG)

## Installation
How to install and access on local machine:

1. Install the necessary modules while set in the backend and frontend folders through 'npm install'

2. Navigate to the root directory of the app and type 
   'node server.js' in the first CLI or 'npm start'.

3. Navigate to the root directory of the app in the second CLI
   type 'cd frontend' and then type 'npm start'

4. Open your browser (either Chrome or Firefox) and navigate to the localhost (http://localhost:3000).

5. Enjoy the APP.

## Use

1. When there is content in your database (make sure to update the uri in server.js with your own details) this will be displayed in a table.

2. Clicking on the 'Older Cars Only' button will show those older than five years old.

3. Add will open a menu to add a new document to your database.

4. Update One opens a menu to update the details on a car filtered by its registration ID.

5. Update Many - Owner allows you to modify an existing owner in more than one document to a new one.

6. Delete - Deletes a document filtered by its registration ID.

## Project Requirements

- Being able to add cars to collection.

- Being able to update information about a single car.

- Being able to update information about more than one car.

- Being able to delete a specific document.

- Being able to list all the information for all cars in the database.

- Being able to list all details for all cars older than five years.

- Applying an MVC pattern to the project's structure.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
