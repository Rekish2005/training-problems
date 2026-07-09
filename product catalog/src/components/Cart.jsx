import React from "react";

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart
}) {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    alert("Thank you for your purchase! Mock Order placed successfully.");
    onClearCart();
    onClose();
  };

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`drawer-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>
            <span>🛒</span> Shopping Cart ({totalItems})
          </h3>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close cart drawer">
            ✕
          </button>
        </div>

        <div className="drawer-body">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.product.id} className="drawer-item">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="drawer-item-img"
                />

                <div className="drawer-item-details">
                  <h4 className="drawer-item-title">{item.product.name}</h4>
                  
                  <div className="drawer-item-price-row">
                    <span className="drawer-item-price">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </span>

                    {/* Quantity controls */}
                    <div className="drawer-qty-controls">
                      <button
                        className="qty-btn"
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  className="drawer-item-remove-btn"
                  onClick={() => onRemoveFromCart(item.product.id)}
                  title="Remove item"
                  aria-label="Remove item from cart"
                >
                  ✕
                </button>
              </div>
            ))
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
              <div style={{ fontSize: "3rem" }}>🛒</div>
              <p>Your shopping cart is empty</p>
            </div>
          )}
        </div>

        {/* Footer info (only show if items exist) */}
        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div className="summary-row">
              <span>Items count:</span>
              <span>{totalItems}</span>
            </div>
            <div className="summary-row total">
              <span>Total Price:</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>

            <div className="drawer-action-buttons">
              <button className="btn-empty-cart" onClick={onClearCart}>
                Empty Cart
              </button>
              <button className="btn-checkout" onClick={handleCheckout}>
                Proceed to Buy
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
