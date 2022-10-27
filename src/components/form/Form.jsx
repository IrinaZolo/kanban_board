import { useState } from "react";
import "./Form.css";


const Form = (props) => {
    const {addNewTask, setFormVisible} = props;
    const [values, setValues] = useState("")

    // изменение значения в инпуте с наименованием задачи
    const handleChange = (e) => {
        setValues(e.target.value)
    }

    // добавление задачи с записанным наименованием и закрытие формы по кнопке submit
    const handleSubmit = (e) => {
        e.preventDefault()
        if (values) {
            addNewTask(values)
        }
        setFormVisible(false)
    }
      

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                className="input" 
                id="taskTitle" 
                name="title"
                type="text"
                onChange={handleChange}
                value={values}
            />
            <button className="submit" type="submit">Submit</button>
        </form>
    )
}

export default Form;