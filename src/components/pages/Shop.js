import { useEffect, useState } from "react";
import ItemCard from "../ItemCard";
import { useParams } from "react-router-dom";

const Shop = (props) => {
    const [items, setItems] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        props.onChange();
        fetchItemsFromCategory();
        // category.forEach((category) => {
        //     fetchItemsFromCategory(category);
        // });
    }, [category]);

    async function fetchItemsFromCategory() {
        let result = category === 'all' ? 
            await fetch('https://fakestoreapi.com/products') :
            await fetch(`https://fakestoreapi.com/products/category/${category}`);
        result = await result.json();
        console.log(result);
        setItems(result);
        console.log(items);
    }

    return (
        <div className="shop">
            {
                items.map((item, i) => {
                    return (
                        <ItemCard price={item.price}
                                  name={item.title}
                                  image={item.image}
                                  description={item.description}
                                  key={i}
                        />
                    );
                })
            }
        </div>
    );
}

export default Shop;