import BasketItem from "../BasketItem";
import Button from "../Button";

const Cart = (props) => {
    return (
        <div className="cart">
            <h2>Your basket</h2>
            <ul className="basketList">
                {
                    props.basket.map((elem) => {
                        const item = elem[0];
                        const amount = elem[1];
                        return (
                            <li key={item.id}>
                                <BasketItem updateBasket={props.updateBasket} item={item} amount={amount} />
                            </li>
                        )
                    })
                }
            </ul>
            <div className="cartRecap">
                <div className="cartRecapLeft">
                    <span className="recapTotal">Total: </span>
                    <span className="total">{
                        Math.round(props.basket.reduce((acc, curr) => {
                            return acc + curr[0].price * curr[1];
                        }, 0) * 100) / 100
                        + "$"}
                    </span>
                </div>
                <Button text="Checkout" />
            </div>
        </div>
    );
};

export default Cart;