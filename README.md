# Todo Application

  
This project is a task management application (To-Do List) that allows users to create, view, and manage their tasks. The application is developed with **Angular**, using services for authentication, task management, and real-time updates through **Socket.IO**.


## Characteristics

- Registration of new users.
- Login for existing users.
- Creation and deletion of tasks.
- Filtering tasks by category.
- Responsive and easy-to-use design.
- **Socket.IO**: For real-time communication and WebSocket support.
- **Real-time task updates** using WebSocket connections with **Socket.IO**.


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
npm start
```


4. Open your browser and access `http://localhost:4200/`.

## WebSocket Setup with Socket.IO
The project uses Socket.IO for WebSocket communication to support real-time updates. When a user creates, updates, or deletes a task, these changes are broadcast to all connected clients using Socket.IO.

## Screenshots

### Web Interface
Here’s how the interface looks on a web browser:

#### Login
<img src="https://raw.githubusercontent.com/ProWilliam/frontend-todo-task/refs/heads/main/src/assets/screenshots/Login-Web.jpg" alt="Login view" > 

#### Register
<img src="https://raw.githubusercontent.com/ProWilliam/frontend-todo-task/refs/heads/main/src/assets/screenshots/Register-Web.jpg" alt="Register view" > 

#### Dasboard
<img src="https://raw.githubusercontent.com/ProWilliam/frontend-todo-task/refs/heads/main/src/assets/screenshots/Dasboard-Web.jpg" alt="Dasboard view" > 


### Mobile Interface
Here’s how the interface looks on a mobile device:

<img src="https://raw.githubusercontent.com/ProWilliam/frontend-todo-task/refs/heads/main/src/assets/screenshots/Login-Mobile.jpg" alt="Login view mobile" width="222" height="480"> <img src="https://raw.githubusercontent.com/ProWilliam/frontend-todo-task/refs/heads/main/src/assets/screenshots/Register-Mobile.jpg" alt="Register view mobile" width="222" height="480"> <img src="https://raw.githubusercontent.com/ProWilliam/frontend-todo-task/refs/heads/main/src/assets/screenshots/Dasboard-Mobile.jpg" alt="Dasboard view mobile" width="222" height="480">


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
npm run test
```
