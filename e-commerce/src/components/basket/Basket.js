import BasketItem from "./BasketItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from '../../context/context';
import "./basket.css";

export default function BasketList() {
  const { order } = useContext(ShopContext);

  const formatCurrency = (currency) => {
    return currency.toLocaleString("en-US", {
      style: 'currency',
      currency: 'USD',
    })
  }

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  const totalCost = +totalPrice

  return (
    <div className="basket">
      <div className="basket_header" data-aos="zoom-in" data-aos-delay="100">
        <h1>Shopping cart</h1>
      </div>
      {order.length ? (
        order.map((item) => {
          return <BasketItem key={item.id} {...item} formatCurrency={formatCurrency} />;
        })
      ) : (
        <span className="empty" data-aos="fade-up" data-aos-delay="350">
          Basket is empty! Want to buy anything?
          <Link to="/products" className="go_product">
            Go to products
            <ion-icon
              name="open-outline"
              style={{ marginLeft: ".5rem" }}
            ></ion-icon>
          </Link>
        </span>
      )}

      <div className="total_price" data-aos="fade-up" data-aos-delay="350">
        <div className="allCost" data-aos="fade-left" data-aos-delay="450">
          <h3>All Costs: {formatCurrency(totalCost)}</h3>
          <button className="btn check">
            Checkout <ion-icon name="shield-checkmark-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
