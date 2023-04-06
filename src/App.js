import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

//宣告在App函式外避免一直重新處理
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  const taskList = tasks
    .filter(FILTER_MAP[filter])//會直接替換成指定陣列內元素的匿名函式
    .map(task =>
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    );

  const filterList = FILTER_NAMES.map(name =>
    <FilterButton
      key={name}
      name={name}
      setFilter={setFilter}
      isPressed={name === filter}
    />
  )

  function addTask(name) {
    const newTask = { id: "task-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id)
        return { ...task, completed: !task.completed };
      return task;
    })
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updateTasks = tasks.filter(task => task.id !== id);
    setTasks(updateTasks);
  }

  function editTask(id, newName) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id)
        return { ...task, name: newName };
      return task;
    })
    setTasks(updatedTasks);
  }

  const taskNumber = `${taskList.length} ${taskList.length > 1 ? 'tasks' : 'task'} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">
        {taskNumber}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
