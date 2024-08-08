import { useState } from 'react';

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask
}) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.title}
          onChange={e => {
            onChange({
              ...task,
              title: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.title}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  if(task.completed){
    return (
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={e => {
              onChange({
                ...task,
                completed: e.target.checked
              });
            }}
          />
          {taskContent}
          <button disabled onClick={() => onDelete(task.id)}>
            Remove From List
          </button>
        </label>
      );
  } else{
    return (
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={e => {
              onChange({
                ...task,
                completed: e.target.checked
              });
            }}
          />
          {taskContent}
          <button onClick={() => onDelete(task.id)}>
            Remove From List
          </button>
        </label>
      );
  }

  
}
