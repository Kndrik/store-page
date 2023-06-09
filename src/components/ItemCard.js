import Button from './Button';

const ItemCard = (props) => {
    return (
        <div className="itemCard">
            <div className="itemImageContainer">
            <img src={props.image} alt="Product image" />
                <div onClick={props.onAddToBasket} className="itemOverlay">
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