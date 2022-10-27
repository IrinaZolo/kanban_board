import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  // поключаем local.storage для сохраниения данных при перерзагрузке приложения

  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  // для передачи в state преобразовываем строку обратно в js-объект
  
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
    // local.storage хранит строковые данные, поэтому преобразовали js-объект в строку
  }, [tasks])

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
