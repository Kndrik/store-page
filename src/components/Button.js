const Button = (props) => {
    return (
        <button className="customButton" onClick={props.clickEvent}><span>{props.text}</span></button>
    );
}

export default Button;