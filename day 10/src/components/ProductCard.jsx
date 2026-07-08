import React from "react";

export default function ProductCard({
  product,
  isWishlisted,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  onSelectProduct
}) {
  const {
    id,
    name,
    brand,
    category,
    price,
    discountPercentage,
    rating,
    reviewsCount,
    stockStatus,
    deliveryInfo,
    images,
    isBestSeller,
    isNewArrival
  } = product;

  // Calculate original price based on price and discount percentage
  const originalPrice = Math.round(price / (1 - discountPercentage / 100));

  // Determine stock class
  const getStockClass = () => {
    if (stockStatus.toLowerCase().includes("out of stock")) {
      return "stock-out";
    }
    if (stockStatus.toLowerCase().includes("only") || stockStatus.toLowerCase().includes("left")) {
      return "stock-lowstock";
    }
    return "stock-instock";
  };

  // Render stars helper
  const renderStars = (score) => {
    const stars = [];
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i}>★</span>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <span key={i} style={{ position: "relative", display: "inline-block" }}>
            <span style={{ color: "#cbd5e1" }}>☆</span>
            <span style={{ position: "absolute", top: 0, left: 0, overflow: "hidden", width: "50%", color: "var(--text-gold)" }}>★</span>
          </span>
        );
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return stars;
  };

  const isOutOfStock = stockStatus.toLowerCase().includes("out of stock");

  return (
    <article className="product-card">
      {/* Badges */}
      {isBestSeller && <div className="badge-tag badge-bestseller">Best Seller</div>}
      {!isBestSeller && isNewArrival && <div className="badge-tag badge-new">New</div>}

      {/* Wishlist Heart Button */}
      <button
        className={`wishlist-heart-btn ${isWishlisted ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleWishlist(id);
        }}
        title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        aria-label="Wishlist heart toggle"
      >
        ♥
      </button>

      {/* Product Image */}
      <div className="card-img-wrapper" onClick={() => onSelectProduct(product)}>
        <img src={images[0]} alt={name} className="card-img" loading="lazy" />
      </div>

      {/* Details */}
      <div className="card-details">
        <div className="card-meta">
          <span className="card-brand">{brand}</span>
          <span className="card-category">{category}</span>
        </div>

        <h3 className="card-title" onClick={() => onSelectProduct(product)}>
          {name}
        </h3>

        {/* Ratings */}
        <div className="ratings-row">
          <div className="rating-stars">{renderStars(rating)}</div>
          <span style={{ color: "var(--accent-gold)", fontWeight: "600" }}>{rating}</span>
          <span className="rating-count">({reviewsCount.toLocaleString()})</span>
        </div>

        {/* Price Row */}
        <div className="price-row">
          <span className="price-actual">₹{price.toLocaleString()}</span>
          {discountPercentage > 0 && (
            <>
              <span className="price-original">₹{originalPrice.toLocaleString()}</span>
              <span className="price-discount">({discountPercentage}% off)</span>
            </>
          )}
        </div>

        {/* Stock Status */}
        <div className={`stock-info ${getStockClass()}`}>{stockStatus}</div>

        {/* Delivery Info */}
        <div className="delivery-info">{deliveryInfo}</div>

        {/* Card Actions */}
        <div className="card-actions">
          <button
            className="btn-add-cart"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            disabled={isOutOfStock}
          >
            Add to Cart
          </button>
          <button
            className="btn-buy-now"
            onClick={(e) => {
              e.stopPropagation();
              onBuyNow(product);
            }}
            disabled={isOutOfStock}
          >
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}
