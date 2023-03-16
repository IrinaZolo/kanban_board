import { useState } from "react";
import { Link } from "react-router-dom";
import "./List.css";
import Form from "../form/Form";
import { LIST_TYPES } from "../../config.js";
import Button from "../button/Button";
import Select from "../select/Select"
import DeleteButton from "../../assets/delete-button.svg"

const List = props => {
    const {title, type, tasks, handleDelete, addNewTask, allTasks, changeStatus} = props;
    const [isFormVisible, setFormVisible] = useState(false);
    const [isSelectVisible, setSelectVisible] = useState(false);

    // выборка задач из определенного блока (по статусу)
    const listTaskBacklog = allTasks.filter(taskDef => taskDef.status === LIST_TYPES.BACKLOG)
    const listTaskReady = allTasks.filter(taskDef => taskDef.status === LIST_TYPES.READY)
    const listTaskInProgress = allTasks.filter(taskDef => taskDef.status === LIST_TYPES.IN_PROGRESS)

    // отображение формы и выпадающего списка (в зависимости от блока) кнопкой +Add card
    const handleClick=() => {
        setFormVisible(!isFormVisible);
        setSelectVisible(!isSelectVisible);
    }


    return (
        <div className="list">
            <h2 className="listTitle">{title}</h2>
            <div className="taskList">
                {tasks.length?
                    tasks.map(task =>
                        <div key={task.id} className="taskArea">
                            <Link  to={`/tasks/${task.id}`} className="task">{task.title}</Link>
                            <button  className="deleteButton" onClick={() => handleDelete(task.id)}>
                                <img src={DeleteButton} alt="" />
                            </button>
                        </div>

                )   :
                        <p>No tasks added yet</p>        
                }
            </div>
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
				<Form 
                    addNewTask={addNewTask} 
                    handleClick={handleClick} 
                    setFormVisible={setFormVisible}
                />
			)}

            {/* добавление выпадающего списка с определенными задачами для соответствующего блока */}

            {type === LIST_TYPES.READY && isSelectVisible && (   
                <Select 
                    tasks={listTaskBacklog}
                    type={type}
                    changeStatus={changeStatus}
                    setSelectVisible={setSelectVisible}
                />      
            )}
            {type === LIST_TYPES.IN_PROGRESS && isSelectVisible && (   
                <Select 
                    tasks={listTaskReady}
                    type={type}
                    changeStatus={changeStatus}
                    setSelectVisible={setSelectVisible}
                />      
            )}
            {type === LIST_TYPES.FINISHED && isSelectVisible && (   
                <Select 
                    tasks={listTaskInProgress}
                    type={type}
                    changeStatus={changeStatus}
                    setSelectVisible={setSelectVisible}
                />       
            )}

            {/* добавление кнопки для backlog, которая всегда активна */}
            
            {type === LIST_TYPES.BACKLOG && (!isFormVisible) && (
                    <Button handleClick={handleClick} disabled={false}/>
                )
            }

            {/* добавление кнопки для отсальных блоков, становится неактивная в случае отстутствия задач для добавления*/}

            {type !== LIST_TYPES.BACKLOG && (!isSelectVisible) &&(
                    <Button 
                        handleClick={handleClick} 
                        disabled={
                            (type === LIST_TYPES.READY)? (listTaskBacklog.length? false:true)
                            :
                                (type === LIST_TYPES.IN_PROGRESS)? (listTaskReady.length? false:true)
                                : 
                                    (type === LIST_TYPES.FINISHED)? (listTaskInProgress.length? false:true)
                                    : 
                                        false
                        }
                    />

                )    
            }
        </div>
    )
}

export default List;