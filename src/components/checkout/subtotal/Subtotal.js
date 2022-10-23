import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../../store/reducer";
import { useStateValue } from "../../../store/StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal: ({basket.length} item:) <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Checkout
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="amazonButton">Proccess to checkout</button>
    </div>
  );
};

export default Subtotal;
