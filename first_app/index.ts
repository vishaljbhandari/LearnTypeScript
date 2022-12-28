import axios from 'axios'; /* importing axios functionality from axios module */

const url =
  'https://jsonplaceholder.typicode.com/todos/1'; /* URL which would provide json data */

/*
    Data at Given URL
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }
  */

axios.get(url).then((response) => {
  console.log(
    response.data
  ); /* to print response data on console, it will not be readable response, so better to break and print in better readable format */

  /*
  Above console log statement would give following output
  { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
*/
}); /* this entire is a code statement, this is a async HTTP get request call */

// ----------------------------------------------------------------------------------------------------------------------------------------------------

/* Hnadling response data more better and writing code in more readable format */
axios.get(url).then((response) => {
  /* Pulling the data property and assign it to seperate variables */
  const todo = response.data;

  /* We need to fetch the data properties in same name in which it is being fetched from the API */
  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);

  /*
  Above console log statement would give following output
    The Todo with ID: undefined
    Has a title of: undefined
    Is it finished? undefined


    Why it is showing this undefined values. 
    In first case, it automatically took the values from response.data and printed 
    But here when we tried to store these values into individual local variables, We did not keep variables names and their respective types into consideration,
    Hence here in fetching values, we encountered errors.

    Here is the need of TypeScript.
*/
});

/* Explanation
axios.get(url) => using axios get the URL 
then((response) => then catch the response to work with further
const todo = response.data; => fetching data property of response and storing response to a constant variable
const ID = todo.ID;  => get id from response
const title = todo.Title;  => get tile from response
const finished = todo.finished;  => get finished from response
console.log(`The Todo with ID: ${ID} Has a title of: ${title} Is it finished? ${finished}`) => then write to console using variables
*/

// ----------------------------------------------------------------------------------------------------------------------------------------------------

/*
  In order to fetch data properly we need to introduce/inform the typescript about what type of data we are expecting from API.
  Here we would be writing an typescript interface, which are used to define structure of an object.

  Whi interface, we will define the type of information that we are expecting
*/

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

/*
  Above interface tells typescript that we are going to recieve three variables from API. First would be ID of numebr type, second would be title of string type and thord would be completed of boolean type.
  names, sequence and types of variables in this interface must be matching with the API data.
*/

/* Hnadling response data more better and writing code in more readable format */
axios.get(url).then((response) => {
  /* Pulling the data property and telling typescript that this data is of ToDo type */
  const todo = response.data as ToDo;
  /* As we tell type script that our data is of ToDo type it will enforce this contraints every where in the code and force developer to correct the name and type of variables */
  /* Assigning data to seperate variables */
  /* We need to fetch the data properties in same name in which it is being fetched from the API */
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  console.log(
    `The Todo with ID: ${ID} Has a title of: ${title} Is it finished? ${finished} `
  );

  /*
  Variable Names
                    data_id       data_title      data_completed
  in API            id            title           completed
  in Interface      id            title           completed
  in get call       id            title           completed
  
  At all places name, type of data should be matching (case sensitive)
*/
});

// ----------------------------------------------------------------------------------------------------------------------------------------------------

axios.get(url).then((response) => {
  const todo = response.data as ToDo;
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  // logToDo(ID, title, finished);
  logToDoSafe(ID, finished, title);
});

// const logToDo = (ID, finished, title) => {
const logToDo = (ID: number, finished: boolean, title: string) => {
  /*
    With this functions type script is showing warning under line below arguments. that type information is not attached with these. 
    It is showing just a warning but it is not enforcing developer to correct it.
    Here if we mistakenly provide wrong sequence of arguments, we will come to know only when this code is executed. Compiler will not catch this error here.
  */
  console.log(
    `The Todo with ID: ${ID} Has a title of: ${title} Is it finished? ${finished} `
  );
  /*
    Output

  */
};

/*
  To overcome from above problem, TypeScript provides annotations to use with data so that TypeScript ensures that all errors are caught during compilation.
  Here, we again write the above function with typed annotations.
*/
const logToDoSafe = (ID: number, finished: boolean, title: string) => {
  /*
    With above additional types information, typescript will check at compiler time that there could be an error and developer ahs to correct it.
  */
  console.log(
    `The Todo with ID: ${ID} Has a title of: ${title} Is it finished? ${finished} `
  );
};
