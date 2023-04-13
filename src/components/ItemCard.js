import Button from './Button';

const ItemCard = (props) => {
    return (
        <div className="itemCard" onClick={props.onAddToBasket}>
            <div className="itemImageContainer">
            <img src={props.image} alt="Product image" />
                <div className="itemOverlay">
                    <Button text="Add to basket"/>
                </div>
            </div>
            <div className="bottom">
                <div className="priceContainer">
                    <span className="name">{props.name}</span>
                    <span className="price">{props.price}$</span>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;