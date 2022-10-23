import { Star } from "@material-ui/icons";
import { useStateValue } from "../../../store/StateProvider";
import "./Product.css";

const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, price, rating, image },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <Star className="product__star" />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
