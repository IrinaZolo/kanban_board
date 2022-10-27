import './Select.css';

const Select = props => {
    const {tasks, type, changeStatus, setSelectVisible} = props

    // добавление задачи из другого блока (по id) и скрытие выпадающего списка
    const handleChange = (e) => {
        const newTask = tasks.find(task => task.id === e.target.value)
        if(e.target.value !== "empty") {
            changeStatus(newTask, type)
        }
        setSelectVisible(false)
    }

    return (
        <select className='select' onChange={handleChange}>
            <option className='option' defaultValue="empty"></option>
            {tasks.map(task => {
                    return <option className='option' key={task.id} value={task.id}>{task.title}</option>   
                })
            }    
        </select>
    )  
    
}

export default Select;