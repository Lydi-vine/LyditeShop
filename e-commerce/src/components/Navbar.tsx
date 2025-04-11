import { FC } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom"; 
import logo from "../images/logo2.jpg";
import { useCart } from "./CartContext";

const Navbar: FC = () => {
  const { cart } = useCart();

  // Sum total quantities of all items in the cart
  const cartItemCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <nav className="w-full flex flex-wrap justify-between items-center px-6 py-4 bg-white shadow-lg cursor-pointer">
        <Link to="/">
        <img src={logo} alt="Logo" className="w-60 h-auto object-contain" />
        </Link>

        {/* Nav Links */}
        <ul className="flex flex-row gap-6 text-[20px] font-medium text-orange-500">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/store">Store</Link>
          </li>
          <a href="#popular">
            <li className="">Popular</li>
          </a>
          <a href="#latest">
            <li className="">Latest</li>
          </a>
        </ul>

        {/* Cart Icon */}
        <div className="relative mt-4 lg:mt-0">
          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-orange-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;