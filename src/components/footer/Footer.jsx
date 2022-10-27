import "./Footer.css";
import { LIST_TYPES } from '../../config'

function Footer(props) {
    const {tasks} = props;

    // выборка задач из определенного блока (по статусу)
    const listTaskBacklog = tasks.filter(task => task.status === LIST_TYPES.BACKLOG)
    const listTaskFinished = tasks.filter(task => task.status === LIST_TYPES.FINISHED)

    return (
        <footer className="footer">
            <div className="counts">
                {/* подсчет кол-ва задач в backlog и finished */}
                <div className="count">Active tasks: {listTaskBacklog.length}</div>
                <div className="count">Finished tasks: {listTaskFinished.length}</div>
            </div>

            <div className="copy">
                Kanban board by <a href='https://github.com/IrinaZolo' target='_blank' rel='noreferrer'>@zolotareva</a>, 2022
			</div>
        </footer>
    )
}

export default Footer;