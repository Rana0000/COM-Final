import { useContext } from "react";
import { ShopContext } from './../../context/context';
import "./home.css";

export default function Home() {
  const { data } = useContext(ShopContext);

  return (
    <>
      <div className="img-wrapper">
        <div className="img-content">
          <h1>Welcome to My Shop</h1>
          <p>Discover unique products that inspire your creativity.</p>
          <button className="discover-button"><a href="products">Discover Now</a></button>
        </div>
      </div>
    </>
  );
}
