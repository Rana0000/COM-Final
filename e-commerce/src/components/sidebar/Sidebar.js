import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import { useContext } from "react";
import { ShopContext } from "../../context/context";

export default function Sidebar() {
  const { pathname } = useLocation();
  const { toggleMenu, setToggleMenu } = useContext(ShopContext);

  return (
    <div className={`navigation ${!toggleMenu ? "active" : ""} `}>
      <ul>
        <li>
          <Link to="/">
            <span className="title">
              <b>E-commerce</b>
            </span>
          </Link>
        </li>
        <li className={pathname === "/" ? "hovered" : ""}>
          <Link to="/" onClick={() => setToggleMenu(false)}>
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="title">Home</span>
          </Link>
        </li>
        <li className={pathname.slice(0, 9) === "/products" ? "hovered" : ""}>
          <Link to="/products" onClick={() => setToggleMenu(false)}>
            <span className="icon">
              <ion-icon name="bag-handle-outline"></ion-icon>
            </span>
            <span className="title">Products</span>
          </Link>
        </li>
        <li className={pathname === "/basket" ? "hovered" : ""}>
          <Link to="/basket" onClick={() => setToggleMenu(false)}>
            <span className="icon">
              <ion-icon name="basket-outline"></ion-icon>
            </span>
            <span className="title">Basket</span>
          </Link>
        </li>

      </ul>
    </div>
  );
}
