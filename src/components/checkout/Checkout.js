import { useStateValue } from "../../store/StateProvider";
import CheckoutProduct from "./checkoutProduct/CheckoutProduct";
import Subtotal from "./subtotal/Subtotal";
import "./Checkout.css";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg"
          alt="ad"
          className="checout_ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2>Your Shopping Basket</h2>
          </div>
        )}

        {/* list of products in the basket */}
        {basket.map((item) => {
          return (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          );
        })}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
