import { useEffect } from "react";

const Shop = (props) => {
    useEffect(() => {
        props.onChange();
    }, []);

    return (
        <div className="shop">Shop</div>
    );
}

export default Shop;