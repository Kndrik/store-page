import HeaderElem from "./HeaderElem";
import HeaderBasket from "./HeaderBasket";
import { useEffect, useState } from "react";

const Header = (props) => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories() {
        let result = await fetch('https://fakestoreapi.com/products/categories');
        result = await result.json();
        setCategories(result);
    }

    let classes = "header" + (props.isHome ? " transparent" : "");
    return (
        <div className={classes}>
            <div className="left">
                <HeaderElem linkTo="/" text="CAFE BUSINESS" classes="title"/>
                <HeaderElem categories={categories} linkTo="/shop/all" text="SHOP" />
                <HeaderElem linkTo="/about" text="ABOUT" />
            </div>
            <div className="right">
                <HeaderBasket amount={props.articlesAmount} />
            </div>
        </div>
    );
}

export default Header;