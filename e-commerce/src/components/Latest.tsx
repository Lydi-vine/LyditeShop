import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import Shiny from '../images/lat1.jpeg';
import Water from '../images/lat2.jpeg';
import Name from '../images/lat3.jpeg';
import Butterfly from '../images/lat4.jpeg';
import { useCart } from '../components/CartContext'; 

const latestArrivalsData = [
  { id: 1, name: 'Shiny with phone grip', price: 3.12, image: Shiny, category: 'Iphone 13', rating: 4 },
  { id: 2, name: 'Underwater phone case', price: 346, image: Water, category: 'Techno Pop 5', rating: 5 },
  { id: 3, name: 'With desired Name', price: 4.16, image: Name, category: 'Google Pixel 5', rating: 4 },
  { id: 4, name: 'Simple Butterfly', price: 2.77, image: Butterfly, category: 'Tecno pop 5', rating: 3 },
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
  const { addToCart } = useCart(); // Destructure addToCart from useCart
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 2000); // Hide notification after 2 seconds
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
              className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}
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

const LatestArrivals: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(latestArrivalsData);

  const filterProducts = (term: string) => {
    const filtered = latestArrivalsData.filter((product) => {
      return (
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase()) ||
        product.price.toString().includes(term)
      );
    });
    setFilteredProducts(filtered);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterProducts(value);
  };

  return (
    <div id="latest" className="py-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800">Latest Arrivals</h2>
      <p className="text-gray-500 mb-6">Browse our new-in-stock phone cases</p>

      {/* Search Input */}
      <div className="mb-8 text-center">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-300 rounded-md"
          placeholder="Search by name, category, or price"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestArrivals;