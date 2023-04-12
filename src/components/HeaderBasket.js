import { useState } from "react";
import Badge from "./Badge";

const HeaderBasket = (props) => {
    let badge;
    if (props.amount > 0) {
        badge = <Badge value={props.amount} />;
    } else {
        badge = null;
    }

    return (
        <div className="headerBasket">
            <span className="material-symbols-outlined basket">shopping_basket</span>
            {badge}
        </div>
    );  
};

export default HeaderBasket;