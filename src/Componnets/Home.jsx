
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {

  return (
    <div className="home">
        <nav>
            <ul className="first-nav">
                <a>Men</a>
                <a>Women</a>
                <a>Kids</a>
            </ul>
            <div className="logo">
                <h3>SHOP</h3>
            </div>
            <ul className="second-nav">
                <a>Login</a>
                <span>|</span>
                <a>Contact us</a>
                <span>|</span>
                <a className="shop-cart"><FaShoppingCart /></a>
            </ul>
        </nav>

        <div className="home-text">
            <h5>Check out our shirts now!</h5>
            <h4>Learn More</h4>
        </div>
    </div>
  );
};

export default Home;
