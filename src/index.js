import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// My first component
// function HelloWorld() {
//   return <h1>Hello, world!</h1>;
// }

//3rd component that simply returns a list item (dynamic data)
function Task(props) {
  console.log(props);
  return (
    //props
    <li className="tasks-item">{props.taskName}</li>
  );
}

function TasksList() {

  // data - object collection of tasks
  const taskItemsList = [
    "Follow Edukasyon.ph on Facebook",
    "Follow AWS Siklab Pilipinas on Facebook",
    "Follow Zuitt Coding Bootcamp on Facebook"
  ];

  return(
    <ul>
      {/* display object collection using array map */}
      {taskItemsList.map(task => {
        console.log(task);
      })}
    </ul>
  );
}

function App() {

  //inline css but will require an object
  const paraStyle = {
    "marginBottom": "15px"
  };

  return(
    <div className="app">
      <header className="app-header">
        <h1>My Amazing To-do List App</h1>

        {/* with inline css */}
        <p style={paraStyle}>The most simple and amazing to-do list React app.</p>

        {/* can be moved as separate function */}
        {/* transferred to function TasksList() */}
        {/* <ul>
          <li className="tasks-item">Follow Edukasyon.ph on Facebook</li>
          <li className="tasks-item">Follow AWS Siklab Pilipinas on Facebook</li>
          <li className="tasks-item">Follow Zuitt Coding Bootcamp on Facebook</li>
        </ul> */}

        {/* calling function TasksList */}
        <TasksList />
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root")); //invoking component with function name as "tag"