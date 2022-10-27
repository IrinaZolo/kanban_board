
import "./Button.css";

const Button = (props) => {
    const {handleClick, disabled} = props;
    return (
        <button className="button" onClick={handleClick} disabled={disabled}>+ Add card</button>
    )
}

export default Button;