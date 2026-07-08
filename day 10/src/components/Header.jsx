import React, { useState } from "react";
import SearchBar from "./SearchBar";

export default function Header({
  products,
  onSearch,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onLogoClick
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileSearchActive, setMobileSearchActive] = useState(false);

  const handleLoginToggle = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      alert("Signed out successfully.");
    } else {
      setIsLoggedIn(true);
      alert("Signed in successfully to Mock Amazon Account.");
    }
  };

  return (
    <header className="header">
      {/* Mobile Burger Menu & Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="menu-toggle-btn"
          onClick={() => alert("Mobile Navigation Menu toggled (mock)")}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <div className="logo-section" onClick={onLogoClick}>
          <span className="logo-icon">⚡</span>
          <h1 className="logo-text">
            Amazon<span>mock</span>
          </h1>
        </div>
      </div>

      {/* Embedded SearchBar - Desktop */}
      <SearchBar products={products} onSearch={onSearch} />

      {/* Action Navigation Items */}
      <div className="header-actions">
        {/* Mobile Search Trigger Icon */}
        <button
          className="action-icon-btn"
          style={{ display: "none" }} /* Styled in CSS media queries if needed */
          onClick={() => setMobileSearchActive(!mobileSearchActive)}
          aria-label="Toggle mobile search"
        >
          🔍
        </button>

        {/* Login / Profile */}
        <button
          className="login-btn desktop-only"
          onClick={handleLoginToggle}
        >
          {isLoggedIn ? "Hello, Sign Out" : "Sign In"}
        </button>

        {/* Wishlist Link */}
        <button
          className="action-icon-btn"
          onClick={onOpenWishlist}
          title="Open Wishlist"
          aria-label="Open wishlist"
        >
          ♥
          {wishlistCount > 0 && (
            <span className="badge-count">{wishlistCount}</span>
          )}
        </button>

        {/* Cart Link */}
        <button
          className="action-icon-btn"
          onClick={onOpenCart}
          title="Open Cart"
          aria-label="Open cart"
        >
          🛒
          {cartCount > 0 && (
            <span className="badge-count">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
