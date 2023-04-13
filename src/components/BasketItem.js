const BasketItem = (props) => {
    return (
        <div className="basketItem">
            <div className="basketImageContainer">
                <img src={props.item.image} alt="item image" className="basketItemImage" />
            </div>
            <div className="basketItemRight">
                <div className="top">
                    <span className="basketItemTitle">{props.item.title}</span>
                    <button onClick={() => props.deleteItem(props.item)} className="basketItemCross">x</button>
                </div>
                <div className="bottom">
                    <input type="number" min="1" max="100" value={props.amount} 
                        onChange={(e) => {
                            props.updateBasket(props.item, e.target.value);
                        }}
                    />
                    <span className="basketItemPrice">{Math.round((props.item.price * props.amount)*100)/100 + "$"}</span>
                </div>
            </div>
        </div>
    );
};

export default BasketItem;