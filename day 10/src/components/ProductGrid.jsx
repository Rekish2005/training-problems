import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  allProductsCount,
  cartCount,
  wishlistCount,
  categoriesCount,
  sortBy,
  onSortChange,
  wishlist,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  onSelectProduct,
  onResetFilters
}) {
  return (
    <section className="catalog-main">
      {/* Metrics Dashboard */}
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="db-card-info">
            <h4>Total Products</h4>
            <div className="db-card-value">{allProductsCount}</div>
          </div>
          <div className="db-card-icon">📦</div>
        </div>

        <div className="dashboard-card">
          <div className="db-card-info">
            <h4>Cart Items</h4>
            <div className="db-card-value">{cartCount}</div>
          </div>
          <div className="db-card-icon">🛒</div>
        </div>

        <div className="dashboard-card">
          <div className="db-card-info">
            <h4>Wishlist</h4>
            <div className="db-card-value">{wishlistCount}</div>
          </div>
          <div className="db-card-icon">♥</div>
        </div>

        <div className="dashboard-card">
          <div className="db-card-info">
            <h4>Categories</h4>
            <div className="db-card-value">{categoriesCount}</div>
          </div>
          <div className="db-card-icon">🏷️</div>
        </div>
      </div>

      {/* Grid Controls (Sorting & Info) */}
      <div className="catalog-controls">
        <div className="results-info">
          Showing <span>{products.length}</span> of <span>{allProductsCount}</span> products
        </div>

        <div className="sorting-wrapper">
          <label htmlFor="sort-by-select">Sort by:</label>
          <select
            id="sort-by-select"
            className="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="best-selling">Best Selling</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="new-arrivals">New Arrivals</option>
          </select>
        </div>
      </div>

      {/* Grid Display */}
      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onAddToCart={onAddToCart}
              onBuyNow={onBuyNow}
              onToggleWishlist={onToggleWishlist}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No products match your search or filters</h3>
          <p>Try clearing some filters or search for something else.</p>
          <button className="empty-btn" onClick={onResetFilters}>
            Clear All Filters
          </button>
        </div>
      )}
    </section>
  );
}
