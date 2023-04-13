import HeaderElem from "./HeaderElem";
import HeaderBasket from "./HeaderBasket";

const Header = (props) => {
    let classes = "header" + (props.isHome ? " transparent" : "");
    return (
        <div className={classes}>
            <div className="left">
                <HeaderElem linkTo="/" text="CAFE BUSINESS" classes="title"/>
                <HeaderElem categories={['men', 'women', 'accessories', 'things']} linkTo="/shop" text="SHOP" />
                <HeaderElem linkTo="/about" text="ABOUT" />
            </div>
            <div className="right">
                <HeaderBasket amount={props.articlesAmount} />
            </div>
        </div>
    );
}

export default Header;