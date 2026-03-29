import React from 'react';
import { Heart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product, isWishlisted, onToggleWishlist }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={product.image} alt={product.title} />
      {product.id % 5 === 0 && <div className="oos-badge">OUT OF STOCK</div>}
    </div>
    <div className="product-info">
      <h3 className="product-name">{product.title.toUpperCase()}</h3>
      <div className="product-meta">
        <p className="pricing-text">
          <span className="underline">Sign in</span> or Create an account to see pricing
        </p>
        <Heart 
          size={20} 
          onClick={() => onToggleWishlist(product.id)}
          className={`wishlist-icon ${isWishlisted ? 'active' : ''}`}
        />
      </div>
    </div>
  </div>
);
export default ProductCard;