const Badge = (props) => {
    return (
        <div className="badge" hidden={props.value <= 0}>{props.value}</div>
    );
};

export default Badge;