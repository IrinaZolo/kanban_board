import {Route, Routes} from 'react-router-dom';
import "./Main.css"
import Board from "../board/Board";
import TaskDetail from '../taskDetail/TaskDetail';

const Main = (props) => {
    // добавление двух страниц: главной и страницы с задачей с разными URL
    return (
        <main className="main">
            <Routes>
                <Route path='/kanban_board' element={<Board {...props}/>}/>
                <Route path='/tasks/:taskId' element={<TaskDetail {...props}/>}/>
            </Routes>
        </main>
    )
}

export default Main;