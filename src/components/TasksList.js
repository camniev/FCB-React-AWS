import Task from "./Task";

function TasksList() {

    // data - object collection of tasks
    const taskItemsList = [
      "Follow Edukasyon.ph on Facebook",
      "Follow AWS Siklab Pilipinas on Facebook",
      "Follow Zuitt Coding Bootcamp on Facebook"
    ];
  
    return(
      //adding input
      <div>
        <input className="task-input" />
        <ul>
          {/* display object collection taskItemsList using array map */}
          {/* callback function (map) that's why it needs "return" */}
          {/* to solve "Each child in a list should have a unique "key" prop." warning, include index */}
          {taskItemsList.map((task, index) => {
            return <Task key={index} taskName={task} />
          })}
        </ul>
      </div>
    );
  }

export default TasksList;