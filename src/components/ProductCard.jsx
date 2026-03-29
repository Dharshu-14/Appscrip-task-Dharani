import React from 'react';
import { Heart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product, isWishlisted, onToggleWishlist }) => (
  <article className="product-card" itemScope itemType="https://schema.org/Product">
    <div className="product-image">
      <img 
        src={product.image} 
        alt={`${product.title} - High quality fashion apparel`}
        title={product.title}
        loading="lazy"
        itemprop="image"
      />
      {product.id % 5 === 0 && <div className="oos-badge" aria-label="Out of stock">OUT OF STOCK</div>}
    </div>
    <div className="product-info">
      <h3 className="product-name" itemprop="name">{product.title.toUpperCase()}</h3>
      <p className="product-description" itemprop="description" style={{ display: 'none' }}>
        {product.description || `${product.title} from Appscrip - Premium quality apparel for timeless elegance`}
      </p>
      <div className="product-meta">
        <p className="pricing-text">
          <span className="underline">Sign in</span> or Create an account to see pricing
        </p>
        <Heart 
          size={20} 
          onClick={() => onToggleWishlist(product.id)}
          className={`wishlist-icon ${isWishlisted ? 'active' : ''}`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          role="button"
          tabIndex="0"
        />
      </div>
    </div>
  </article>
);
export default ProductCard;