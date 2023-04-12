import HeaderElem from "./HeaderElem";
import HeaderBasket from "./HeaderBasket";

const Header = (props) => {
    return (
        <div className="header">
            <div className="left">
                <HeaderElem text="Cafe Business" classes="title"/>
                <HeaderElem text="Shop" />
                <HeaderElem text="About" />
            </div>
            <div className="right">
                <HeaderBasket amount={props.articlesAmount} />
            </div>
        </div>
    );
}

export default Header;