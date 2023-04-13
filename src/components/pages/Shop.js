import { useEffect } from "react";
import ItemCard from "../ItemCard";

const Shop = (props) => {
    useEffect(() => {
        props.onChange();
    }, []);

    return (
        <div className="shop">
            <ItemCard price={59} name={"Jeans"} image={"https://s7d2.scene7.com/is/image/PoloGSI/s7-1464520_lifestyle?$jp_plp_lif$"} />
            <ItemCard price={61} name={"Hoodie"} image={"https://s7d2.scene7.com/is/image/PoloGSI/s7-1464520_lifestyle?$jp_plp_lif$"} />
            <ItemCard price={61} name={"Hoodie"} image={"https://s7d2.scene7.com/is/image/PoloGSI/s7-1464520_lifestyle?$jp_plp_lif$"} />
            <ItemCard price={61} name={"Hoodie"} image={"https://s7d2.scene7.com/is/image/PoloGSI/s7-1464520_lifestyle?$jp_plp_lif$"} />
            <ItemCard price={61} name={"Hoodie"} description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday" image={"https://s7d2.scene7.com/is/image/PoloGSI/s7-1464520_lifestyle?$jp_plp_lif$"} />
        </div>
    );
}

export default Shop;