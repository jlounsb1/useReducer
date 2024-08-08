import { useReducer } from "react";
import './App.css'
import AddTask from './AddTask.jsx'
import TaskList from './TaskList.jsx'

function tasksReducer(tasks,action) {
  switch(action.type) {
    case 'add':{
      return [...tasks, {
        userId:1,
        id:action.id,
        title:action.title,
        completed: action.completed
      }]
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted':{
      return tasks.filter(t=>t.id !==action.id)
    }
    default: {
      throw error('Unknown action: ' + action.type)
    }
  }
}

export default function App() {
  const [tasks, dispatch]=useReducer(
    tasksReducer,
    initialState
  )

  function handleAddTask(title) {
    dispatch({
      type: 'add',
      id:NextId++,
      title:title
    })
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }
  function handleDeleteTask(id) {
    dispatch({
      type:'deleted',
      id:id,
    })
  }

  return(
    <>
    <h1>To Do app</h1>
    <AddTask 
      onAddTask={handleAddTask}
    />
    <TaskList 
      tasks={tasks}
      onChangeTask={handleChangeTask}
      onDeleteTask={handleDeleteTask}
    />
    </>
  )
}

// function reducer(state, action){
//   switch(action.type) {
//     case "completed" : {
//       return {
//       ...state,
//       completed:true
//       }
//     }
//     default :{
//       throw Error('unknown action')
//     }
//   }
// }

// function App() {
//   const [toDos, dispatch]=useReducer(reducer, initialState)
  
// console.log(toDos)

// return (
//   <>
//   <h1>To Do's:</h1>
//   <ul style={{listStyleType:'none'}}>
//     {toDos?.map((item)=> {
//       return(
//         <div key={item.id}>
//         <li><b>To Do Number: </b>{item.id}</li>
//         <li><b>To Do Item: </b>{item.title}</li>
//         <li><b>Completed: </b>{item.completed? 'True':'False'}</li>
//         <ActionButton type='completed' dispatch={dispatch} />
//         <br />
//         <br />
//         </div>
//       )
//     })}
//     </ul>
//   </>
// )
// }

// export default App

// function ActionButton({type, dispatch}) {
//   return(
//     <button onClick={() => dispatch({type:type})}>
//       Completed
//     </button>
//   )
// }


const initialState = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
];

let NextId=Number(initialState.length)