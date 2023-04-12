import { NavLink } from "react-router-dom";

const HeaderElem = (props) => {
    const classes = props.classes + ' headerElem';
    return (
        <NavLink 
        to={props.linkTo} 
        className={({ isActive, isPending }) =>
            isPending ? "pending " + classes : isActive ? "active " + classes : classes
        }
        >{props.text}</NavLink>
    )
}

export default HeaderElem;