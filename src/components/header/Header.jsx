import "./Header.css";
import { useState } from "react";
import ArrowDown from '../../assets/arrow-down.svg';
import ArrowUp from '../../assets/arrow-up.svg'


const Header = props => {

    const [ userMenuVisible, setUserMenuVisible ] = useState(false)

    // функция для отображения и скрытия выпадающего меню пользователя
    const handleClick = () => {
        setUserMenuVisible(!userMenuVisible);
    }

    return (
        <header className="header">
            <h1 className="title">Awesome Kanban Board</h1>
            <div className="user" >
                <div className="user-icon" onClick={handleClick}>
                    <div className="img-icon"></div>
                    {/* отображение срелки вверх или вниз в зависимости от отображения или скрытия выпадающего меню */}
                    {!userMenuVisible && (
                        <img className="arrow" src={ArrowDown} alt="" />
                    )}
                    {userMenuVisible && (
                        <img className="arrow" src={ArrowUp} alt="" />
                    )}
                </div>
                {userMenuVisible && (
                    <div className="user-menu">
                        <div className="triangle"></div>
                        <div className="user-link">
                            <a href="/" className="link">Profile</a>
                            <a href="/" className="link">Log Out</a>
                        </div>
                    </div>
                )}    
            </div>
        </header>
    )
}

export default Header;