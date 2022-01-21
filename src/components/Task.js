//3rd component that simply returns a list item (dynamic data)
function Task(props) {
    console.log(props);
    return (
      //props
      <li className="tasks-item">{props.taskName}</li>
    );
  }

  export default Task;