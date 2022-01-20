import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// My first component
// function HelloWorld() {
//   return <h1>Hello, world!</h1>;
// }

function App() {
  return(
    <div className="app">
      <header className="app-header">
        <h1>My Amazing To-do List App</h1>
        <p>The most simple and amazing to-do list React app.</p>
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root")); //invoking component with function name as "tag"