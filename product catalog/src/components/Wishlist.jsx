import React from "react";

export default function Wishlist({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onMoveToCart
}) {
  return (
    <>
      {/* Background Overlay */}
      <div
        className={`drawer-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      {/* Wishlist Drawer */}
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>
            <span>♥</span> Wishlist ({wishlistItems.length})
          </h3>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close wishlist drawer">
            ✕
          </button>
        </div>

        <div className="drawer-body">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((product) => {
              const isOutOfStock = product.stockStatus.toLowerCase().includes("out of stock");
              return (
                <div key={product.id} className="drawer-item">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="drawer-item-img"
                  />

                  <div className="drawer-item-details">
                    <h4 className="drawer-item-title">{product.name}</h4>
                    
                    <div className="drawer-item-price-row">
                      <span className="drawer-item-price">
                        ₹{product.price.toLocaleString()}
                      </span>

                      {/* Move to Cart actions */}
                      <button
                        className="btn-add-cart"
                        style={{ padding: "0.3rem 0.6rem", width: "auto", fontSize: "0.75rem" }}
                        onClick={() => onMoveToCart(product)}
                        disabled={isOutOfStock}
                      >
                        {isOutOfStock ? "Out of Stock" : "Move to Cart"}
                      </button>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    className="drawer-item-remove-btn"
                    onClick={() => onRemoveFromWishlist(product.id)}
                    title="Remove from wishlist"
                    aria-label="Remove item from wishlist"
                  >
                    ✕
                  </button>
                </div>
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                color: "var(--text-muted)",
                gap: "1rem"
              }}
            >
              <div style={{ fontSize: "3rem", color: "#f87171" }}>♥</div>
              <p>Your wishlist is empty</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
