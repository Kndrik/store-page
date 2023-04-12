import HeaderElem from "./HeaderElem";
import HeaderBasket from "./HeaderBasket";

const Header = (props) => {
    return (
        <div className="header">
            <div className="left">
                <HeaderElem linkTo="/" text="CAFE BUSINESS" classes="title"/>
                <HeaderElem linkTo="/shop" text="SHOP" />
                <HeaderElem linkTo="/about" text="ABOUT" />
            </div>
            <div className="right">
                <HeaderBasket amount={props.articlesAmount} />
            </div>
        </div>
    );
}

export default Header;