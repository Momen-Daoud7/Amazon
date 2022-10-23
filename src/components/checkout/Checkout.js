import { useStateValue } from "../../store/StateProvider";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        src="https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg"
        alt="ad"
        className="checout_ad"
      />
    </div>
  );
};

export default Checkout;
