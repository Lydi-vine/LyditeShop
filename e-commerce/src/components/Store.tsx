import React, { useState } from 'react';
import { useCart } from '../components/CartContext'; 
import { AiFillStar } from 'react-icons/ai';
import c from '../images/store/iphone1.jpg';
import g from '../images/store/iphone2.jpg';
import h from '../images/store/iphone3.jpg';
import i from '../images/store/pixel1.jpg';
import j from '../images/store/pixel2.jpg';
import l from '../images/store/pixel10.jpg';
import m from '../images/store/samsung1.jpg';
import n from '../images/store/samsung2.jpg';
import o from '../images/store/samsung3.jpg';
import p from '../images/store/grip1.jpg';
import s from '../images/store/gripst2.jpg';
import t from '../images/store/iphone4.jpg';
import u from '../images/store/gripst3.jpg';
import v from '../images/store/pixel4.jpg';
import w from '../images/store/grip4.jpg';
import x from '../images/store/samsung4.jpg';
import q from '../images/lat1.jpeg';
import b from '../images/lat2.jpeg';
import k from '../images/lat3.jpeg';
import r from '../images/lat4.jpeg';
import d from '../images/pop1.jpeg';
import e from '../images/pop2.jpeg';
import f from '../images/pop3.jpeg';
import a from '../images/pop4.jpeg';
import Footer from './Footer';

const allProducts = [
  { id: 1, name: 'Wallet case', price: 6.94, image: a, category: 'iPhone 13 Pro', rating: 5 },
  { id: 2, name: 'Underwater phone case', price: 346, image: b, category: 'Any phone', rating: 5 },
  { id: 3, name: 'Mirror hearts', price: 3.81, image: c, category: 'iPhone 14', rating: 2 },
  { id: 4, name: 'Transparent Shockproof Case', image: d, price: 15, category: 'Iphone 11', rating: 4 },
  { id: 5, name: 'Monica Case', image: e, price: 12, category: 'Iphone 12', rating: 5 },
  { id: 6, name: 'Matte Black Case', image: f, price: 18, category: 'Samsung S6 Edge', rating: 4 },
  { id: 7, name: 'Aesthetic girly', price: 4.16, image: g, category: 'iPhone11', rating: 5 },
  { id: 8, name: 'Bear Face', price: 3.12, image: h, category: 'iPhone X', rating: 3 },
  { id: 9, name: 'Girly quote', price: 3.12, image: i, category: 'Google Pixel 4', rating: 4 },
  { id: 10, name: 'Black Magsafe-compatible', price: 3.47, image: j, category: 'Google Pixel 9 Pro', rating: 4 },
  { id: 11, name: 'With desired Name', price: 4.16, image: k, category: 'Google Pixel 5', rating: 4 },
  { id: 12, name: 'Gray/Black vector', price: 2.77, image: l, category: 'Google Pixel 3', rating: 3 },
  { id: 13, name: 'Black shiny petals', price: 3.12, image: m, category: 'Samsung Galaxy S21', rating: 3 },
  { id: 14, name: 'Black magnetic coinel', price: 3.47, image: n, category: 'Samsung Galaxy S24', rating: 4 },
  { id: 15, name: 'Galaxy Planet', price: 3.12, image: o, category: 'Samsung A05s', rating: 3 },
  { id: 16, name: 'Black $ White', price: 1.73, image: p, category: 'Phone sockets', rating: 3 },
  { id: 17, name: 'Shiny with phone grip', price: 3.12, image: q, category: 'Iphone 13', rating: 4 },
  { id: 18, name: 'Simple Butterfly', price : 2.77, image: r, category: 'Tecno pop 5', rating: 3 },
  { id: 19, name: 'Round Phone stickers', price: 2.08, image: s, category: 'Phone stickers', rating: 4 },
  { id: 20, name: 'Chinese dynasty case', price: 2.98, image: t, category: 'iPhone 12 Pro', rating: 4 },
  { id: 21, name: 'Rectangular Phone stickers', price: 2.08, image: u, category: 'Phone stickers', rating: 4 },
  { id: 22, name: 'Dragon chain', price: 3.12, image: v, category: 'Google Pixel 6', rating: 3 },
  { id: 23, name: 'White Heart', price: 1.73, image: w, category: 'Phone sockets', rating: 2 },
  { id: 24, name: 'Hello Kitty Baby', price: 3.12, image: x, category: 'Samsung S8', rating: 3 },
];

const ProductCard: React.FC<{
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
  };
}> = ({ product }) => {
  const { addToCart } = useCart();
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000); // Hide notification after 2 seconds
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-70 h-80 m-auto" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <div className="flex items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <AiFillStar
              key={i}
              className={i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
        <p className="text-xl font-bold mt-2">${product.price}</p>
        <button
          onClick={handleAddToCart} // Add to cart button
          className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-sm mr-2 cursor-pointer">
          Add to Cart
        </button>
        {notificationVisible && (
          <div className="absolute top-0 right-0 mt-2 mr-2 bg-green-500 text-white text-sm rounded px-2 py-1">
            Item added to cart
          </div>
        )}
      </div>
    </div>
  );
};

const Store: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const filterProducts = (term: string) => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.category.toLowerCase().includes(term.toLowerCase()) ||
      product.price.toString().includes(term)
    );
    setFilteredProducts(filtered);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterProducts(value);
  };

  return (
    <div className="py-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">All Products</h2>

      {/* Search Input */}
      <div className="mb-4 text-center">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-300 rounded-md"
          placeholder="Search by name, category, or price"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Store;