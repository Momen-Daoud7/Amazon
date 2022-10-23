import "./Home.css";
import Product from "./product/Product";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg"
        alt="Banner"
        className="home__image"
      />
      <div className="home__raw">
        <Product
          id="1221"
          title="Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistant College School Computer Bag Gifts for Men & Women Fits 15.6 Inch Notebook, Grey"
          price={11.3}
          rating={5}
          image="https://m.media-amazon.com/images/I/81OFxhFWmML.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="122"
          title="So Good They Can't Ignore You: Why Skills Trump Passion in the Quest for Work You Love"
          price={11.3}
          rating={4}
          image="https://m.media-amazon.com/images/I/81ZExXYKZJL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__raw">
        <Product
          id="1221"
          title="Playstation 3"
          price={11.3}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Playstation3.jpg"
        />
        <Product
          id="122"
          title="Invicta Men's 8926OB Pro Diver Collection Coin-Edge Automatic Watch"
          price={11.3}
          rating={4}
          image="https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY679_.jpg"
        />

        <Product
          id="122"
          title="Nike Men's Flex Control Tr4 Cross Trainer"
          price={11.3}
          rating={4}
          image="https://m.media-amazon.com/images/I/81r5BDuVz2L._AC_UX500_.jpg"
        />
      </div>
      <div className="home__raw">
        <Product
          id="122"
          title="Acer B247Y 23.8 LED LCD Monitor - 16:9-4 ms GTG"
          price={11.3}
          rating={4}
          image="https://m.media-amazon.com/images/I/41-3M9tpopL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
};
export default Home;
