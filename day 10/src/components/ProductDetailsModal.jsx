import React, { useState, useEffect } from "react";

export default function ProductDetailsModal({
  product,
  allProducts,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist
}) {
  const [activeImage, setActiveImage] = useState("");
  const [activeTab, setActiveTab] = useState("specs"); // 'specs' or 'reviews'

  // Sync active image when product changes
  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setActiveImage(product.images[0]);
    }
    setActiveTab("specs");
  }, [product]);

  if (!product) return null;

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
    description,
    images,
    specifications,
    reviews
  } = product;

  const originalPrice = Math.round(price / (1 - discountPercentage / 100));
  const isOutOfStock = stockStatus.toLowerCase().includes("out of stock");

  // Get related products (same category, excluding this one, limit to 4)
  const relatedProducts = allProducts
    .filter((p) => p.category === category && p.id !== id)
    .slice(0, 4);

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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details modal">
          ✕
        </button>

        <div className="modal-body">
          {/* Main product split (Gallery & Info) */}
          <div className="modal-product-split">
            {/* Gallery Left Column */}
            <div className="modal-gallery-container">
              <div className="modal-main-img-wrap">
                <img src={activeImage} alt={name} className="modal-main-img" />
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div className="modal-thumb-row">
                  {images.map((imgUrl, index) => (
                    <img
                      key={index}
                      src={imgUrl}
                      alt={`Thumbnail ${index + 1}`}
                      className={`modal-thumb ${activeImage === imgUrl ? "active" : ""}`}
                      onClick={() => setActiveImage(imgUrl)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Info Right Column */}
            <div className="modal-details-col">
              <div className="modal-meta-row">
                <span className="modal-brand">{brand}</span>
                <span>•</span>
                <span className="modal-category">{category}</span>
              </div>

              <h2 className="modal-title">{name}</h2>

              {/* Ratings row */}
              <div className="modal-ratings-row">
                <div className="rating-stars">{renderStars(rating)}</div>
                <span style={{ color: "var(--accent-gold)", fontWeight: "600" }}>{rating} out of 5</span>
                <span style={{ color: "var(--text-muted)" }}>({reviewsCount.toLocaleString()} global ratings)</span>
              </div>

              {/* Price Details Card */}
              <div className="modal-price-card">
                <div className="modal-price-row">
                  <span className="modal-price-actual">₹{price.toLocaleString()}</span>
                  {discountPercentage > 0 && (
                    <>
                      <span className="modal-price-original">₹{originalPrice.toLocaleString()}</span>
                      <span className="modal-price-discount">-{discountPercentage}%</span>
                    </>
                  )}
                </div>

                <div className="modal-stock-delivery">
                  <div>
                    Status:{" "}
                    <strong style={{ color: isOutOfStock ? "var(--text-danger)" : "var(--text-success)" }}>
                      {stockStatus}
                    </strong>
                  </div>
                  <div>
                    Delivery: <strong>{deliveryInfo}</strong>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="modal-desc">{description}</p>

              {/* CTA Buttons */}
              <div className="modal-actions-bar">
                <button
                  className="modal-wishlist-toggle"
                  onClick={() => onToggleWishlist(id)}
                  className={`modal-wishlist-toggle ${isWishlisted ? "active" : ""}`}
                  title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                  aria-label="Wishlist heart button"
                >
                  ♥
                </button>
                <button
                  className="modal-btn-cart"
                  onClick={() => onAddToCart(product)}
                  disabled={isOutOfStock}
                >
                  Add to Cart
                </button>
                <button
                  className="modal-btn-buy"
                  onClick={() => onBuyNow(product)}
                  disabled={isOutOfStock}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Specifications and Reviews Tab Panel */}
          <div className="modal-tabs-section">
            <div className="modal-tabs-header">
              <button
                className={`modal-tab-trigger ${activeTab === "specs" ? "active" : ""}`}
                onClick={() => setActiveTab("specs")}
              >
                Product Specifications
              </button>
              <button
                className={`modal-tab-trigger ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                Customer Reviews ({reviews.length})
              </button>
            </div>

            <div className="tab-pane-content">
              {activeTab === "specs" ? (
                <table className="specifications-table">
                  <tbody>
                    {Object.entries(specifications).map(([key, val]) => (
                      <tr key={key}>
                        <td className="spec-key">{key}</td>
                        <td className="spec-val">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="reviews-list-container">
                  {reviews.map((rev) => (
                    <div key={rev.id} className="review-item-card">
                      <div className="review-item-header">
                        <span className="review-user-name">👤 {rev.user}</span>
                        <span className="review-date">{rev.date}</span>
                      </div>
                      <div className="review-item-stars-title">
                        <div className="rating-stars" style={{ fontSize: "0.75rem" }}>
                          {renderStars(rev.rating)}
                        </div>
                        <span className="review-item-title">{rev.title}</span>
                      </div>
                      <p className="review-item-comment">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="related-products-section">
              <h4>Customers Who Bought This Also Bought</h4>
              <div className="related-products-grid">
                {relatedProducts.map((relProduct) => (
                  <div
                    key={relProduct.id}
                    className="related-card"
                    onClick={() => {
                      // Switch current product in details modal
                      // Find the product in allProducts to open
                      onSelectProduct(relProduct);
                    }}
                  >
                    <div className="related-card-img-wrap">
                      <img
                        src={relProduct.images[0]}
                        alt={relProduct.name}
                        className="related-card-img"
                      />
                    </div>
                    <h5 className="related-card-title">{relProduct.name}</h5>
                    <span className="related-card-price">₹{relProduct.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
