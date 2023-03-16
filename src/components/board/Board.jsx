import "./Board.css";
import uniqid from "uniqid";
import {LIST_TYPES, LIST_COPY} from "./../../config.js";
import List from "../list/List";

function Board(props) {
    const {tasks, setTasks} = props;

    // добавление новой задачи в tasks 
    const addNewTask = (title) => {
        const newTask = {
            id: uniqid(),
            title,
            description: "",
            status: LIST_TYPES.BACKLOG,
        }

        setTasks([...tasks, newTask]);
    }

    // перемещение задачи в другой блок
    const changeStatus = (newTask, status) => {
        if (!newTask) {
			return tasks
		}
        const newStatus = status
        const newTasks = tasks.map(task => {
            if (task.id === newTask.id) {
                newTask = {...task, status: newStatus}
                return newTask  
            }
            return task
        })

        // добавление задачи в новый блок в конец списка задач
        const index = newTasks.indexOf(newTask)
        if (index === newTasks.length-1) {
            return setTasks(newTasks)
        } else {
            const updatedTasks = [...(newTasks.slice(0, index)),...(newTasks.slice(index+1)), newTask]
            return setTasks(updatedTasks) 
        }  
    }

    const handleDelete = (id) => {
        const listTasks = tasks.filter( task => task.id !== id)
        setTasks(listTasks)
    }

    return(
        <div className="board">
            {/* создание блоков с задачами в зависимости от статуса */}
            {Object.values(LIST_TYPES).map(type => {
                const listTasks = tasks.filter(task => task.status === type)
                return (
                    <div key={type}>
                        <List 
                            type={type}
                            title={LIST_COPY[type]}
                            tasks={listTasks || []}
                            addNewTask={addNewTask}
                            allTasks={tasks}
                            handleDelete={handleDelete}
                            changeStatus={changeStatus}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default Board;