import { Search, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../store/StateProvider";
import "./Header.css";

const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      <Link to={"/"}>
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
          className="header__logo"
        />
      </Link>
      {/* Search box */}
      <div className="header__search">
        <input className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>
      {/* Header nav */}
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Momen</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
