const HeaderElem = (props) => {
    const classes = props.classes + ' headerElem';
    return (
        <div className={classes}>{props.text}</div>
    )
}

export default HeaderElem;