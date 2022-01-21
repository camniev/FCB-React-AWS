import { useState } from "react";
import Task from "./Task";

function TasksList() {

    // data - object collection of tasks
    const taskItemsList = [
        "Follow Edukasyon.ph on Facebook",
        "Follow AWS Siklab Pilipinas on Facebook",
        "Follow Zuitt Coding Bootcamp on Facebook"
    ];

    // usestate is a react feature to store and update temporary information
    // destructuring in const (review) 

    const[taskValue, setTaskValue] =  useState("Just another task");
    console.log("task value: " + taskValue);

    //create event to update data in setTaskValue
    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value)
    };
  
    return(
      //adding input
      <div>

        {/* create event on change (review) */}
        {/* <input
            className="task-input"
            placeholder="Create a new task"
            onChange={(e) => setTaskValue(e.target.value)}
        /> */}

        <input
            className="task-input"
            placeholder="Create a new task"
            onChange={inputChangeHandler}
        />

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