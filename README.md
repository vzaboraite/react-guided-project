## SETUP

Open one terminal for React and run the following commands:

`npm install`

`npm start`

Open another terminal for json-server and run the following command:

`json-server --watch db/db.json --routes db/routes.json --port 3030

## TODO

This app has two endpoints `/posts` and `/comments`. Check `/db/db.json` to see their data structure and how they are related.

Inside `CreatePost`:

- Setup state for the form
- Create the relevant inputs
- Write a function to handle submit
- Write a POST request to the `/posts` endpoint

Inside `CreateComment`:

- Setup state for the form
- Create the relevant inputs
- Write a function to handle submit
- Write a POST request to the `/comments` endpoint

Inside `EditComment`:

- Setup state for the form
- Create the relevant inputs
- Write a function to handle submit
- Write a PATCH request to the `/comments` endpoint

**Note** You will need to use `commentToEdit` in `PostItem` in order to edit the comment.

## Extra

- User can delete a post
- User can delete a comment
