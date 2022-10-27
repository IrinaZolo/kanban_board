import './TaskDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ButtonCross from '../../assets/button_cross.svg'

const TaskDetail = props => {
    // получение id задачи из URL страницы
    const {taskId} = useParams();
    const {tasks, setTasks} = props
    const  taskDef = tasks.find(task => task.id === taskId)
    const [value, setValue] = useState(taskDef? taskDef.description : "")

    // изменение значения описания в текстовом поле
    const handleChange = e => {
        setValue(e.target.value)
    }

    // изменение описания задачи и запись в state
    const handleSubmit = e => {
        e.preventDefault()
        const updatedTasks = tasks.map( task => {
            if (task.id === taskId) {
                return {...task, description: value}
            }
            return task
        })
        
        setTasks(updatedTasks)
    }

    return (
        <div className="taskDetail">
        {taskDef? (
            <>
                <div className="info">
                <h1 className='title-task'>{taskDef.title}</h1>
                <form onSubmit={handleSubmit} >
                    <textarea 
                        id='taskDescription'
                        className='description' 
                        value={value} 
                        onChange={handleChange} 
                        placeholder={taskDef.description ? "":"(This task has no description)"} 
                    >
                        {taskDef.description}
                    </textarea>
                    {value !== taskDef.description && (
                        <button className='buttonSave' type='submit'>Save change</button>
                    )}
                </form>
                </div>
                
            </>
        ) : (
            <h2>Task with ID {taskId} not found</h2>
        )}
        <Link to={'/'} className="'buttonX'">
            <img src={ButtonCross} alt="" className='buttonCross'/>
        </Link>
        </div>
    )
}

export default TaskDetail;