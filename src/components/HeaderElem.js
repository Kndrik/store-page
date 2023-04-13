import { NavLink, Link } from "react-router-dom";

const HeaderElem = (props) => {
    const classes = props.classes + ' headerElem';
    return (
        <NavLink 
        to={props.linkTo} 
        className={({ isActive, isPending }) =>
            isPending ? "pending " + classes : isActive ? "active " + classes : classes
        }
        onClick={props.onChange}
        >
            <nav className="headerElemText">{props.text}</nav>
            <div className="dropDown">
                <ul className="dropDownList">
                    {
                        props.categories?.map((c) => {
                            console.log('hello');
                            return (
                                <li className="categoryElem">
                                    <Link to="/shop">{c}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </NavLink>
    )
}

export default HeaderElem;