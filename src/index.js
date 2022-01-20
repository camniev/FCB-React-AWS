import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// My first component
// function HelloWorld() {
//   return <h1>Hello, world!</h1>;
// }

function App() {

  //inline css but will require an object
  const paraStyle = {
    "marginBottom": "15px"
  };

  return(
    <div className="app">
      <header className="app-header">
        <h1>My Amazing To-do List App</h1>

        {/* with inline css (jsx style) */}
        <p style={paraStyle}>The most simple and amazing to-do list React app.</p>
        <ul>
          <li className="tasks-item">Follow Edukasyon.ph on Facebook</li>
          <li className="tasks-item">Follow AWS Siklab Pilipinas on Facebook</li>
          <li className="tasks-item">Follow Zuitt Coding Bootcamp on Facebook</li>
        </ul>
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root")); //invoking component with function name as "tag"