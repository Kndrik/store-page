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
                        props.categories?.map((c, i) => {
                            const link = "/shop/" + c;
                            return (
                                <li key={i} className="categoryElem">
                                    <Link onClick={props.onChange} className="categoryLink" to={link}>{c}</Link>
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