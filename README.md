# Todo Application

  
This project is a task management application (To-Do List) that allows users to create, view and manage their tasks in a simple way. The application is developed with Angular and uses services for authentication and task management.


## Characteristics

- Registration of new users.
- Login for existing users.
- Creation and deletion of tasks.
- Filtering tasks by category.
- Responsive and easy-to-use design.


## Technologies Used

- **Angular**: Framework to build the user interface.
- **RxJS**: For handling asynchronous operations.
- **TypeScript**: For better structuring and typing in development.
- **Karma and Jasmine**: For unit tests.
  

## Install

1.  Clone this repository:

2.  Install the dependencies:
```
npm install
```

3. Start the application: 
```
ng serve
```


4. Open your browser and access `http://localhost:4200/`.


## Project Structure

- `src/`: Contains all the source code of the application.
    - `app/`: Main folder where the application logic is located.
        - `components/`: Contains the application components (such as `TodoComponent`, `LoginComponent`, etc.).
        - `services/`: Services for task management and authentication.
        - `models/`: Data models used in the application.
        - `app.component.ts`: Root component of the application.
        - `app.module.ts`: Main module of the application.
    - `assets/`: Static files such as images and styles.


## Test

The project includes unit tests that ensure the correct functioning of the components and services.
To run the tests, use:

```
ng test 
```
