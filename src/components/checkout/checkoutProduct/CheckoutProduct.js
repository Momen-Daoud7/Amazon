import React from "react";
import { Star } from "@material-ui/icons";
import "./CheckoutProduct.css";
import { useStateValue } from "../../../store/StateProvider";

const CheckoutProduct = ({ id, title, image, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="chekoutProduct__info">
        <p className="chekoutProduct__title">{title}</p>
        <p className="chekoutProduct__info">
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
        <button onClick={removeFromBasket} className="amazonButton">
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
