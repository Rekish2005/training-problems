import React from "react";

export default function Filters({
  products,
  filters,
  onFilterChange,
  onClearFilters
}) {
  // Extract unique categories and brands dynamically
  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];

  const handleCategoryToggle = (category) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    
    onFilterChange({ ...filters, categories: updatedCategories });
  };

  const handleBrandToggle = (brand) => {
    const updatedBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    
    onFilterChange({ ...filters, brands: updatedBrands });
  };

  const handlePriceChange = (key, value) => {
    const numericValue = value === "" ? "" : Number(value);
    onFilterChange({
      ...filters,
      priceRange: { ...filters.priceRange, [key]: numericValue }
    });
  };

  const handleRatingChange = (rating) => {
    // If user clicks the currently selected rating, toggle it off (set to 0)
    const newRating = filters.rating === rating ? 0 : rating;
    onFilterChange({ ...filters, rating: newRating });
  };

  const handleAvailabilityToggle = () => {
    onFilterChange({ ...filters, inStockOnly: !filters.inStockOnly });
  };

  // Helper to render star row
  const renderStarRow = (ratingThreshold) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= ratingThreshold ? "#ff9900" : "#cbd5e1", marginRight: "2px" }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <aside className="filters-sidebar">
      <div className="filters-header">
        <h3>Filters</h3>
        <button className="clear-filters-btn" onClick={onClearFilters}>
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className="filter-group">
        <h4>Category</h4>
        <div className="filter-options">
          {categories.map((category) => (
            <label key={category} className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="filter-group">
        <h4>Brand</h4>
        <div className="filter-options">
          {brands.map((brand) => (
            <label key={brand} className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <h4>Price Range</h4>
        <div className="price-range-inputs">
          <input
            type="number"
            placeholder="Min"
            className="price-box-input"
            value={filters.priceRange.min}
            onChange={(e) => handlePriceChange("min", e.target.value)}
            min="0"
          />
          <span style={{ color: "var(--text-muted)" }}>to</span>
          <input
            type="number"
            placeholder="Max"
            className="price-box-input"
            value={filters.priceRange.max}
            onChange={(e) => handlePriceChange("max", e.target.value)}
            min="0"
          />
        </div>
      </div>

      {/* Star Rating Filter */}
      <div className="filter-group">
        <h4>Customer Review</h4>
        <div className="filter-options">
          {[4, 3, 2, 1].map((stars) => (
            <div
              key={stars}
              className={`rating-filter-item ${filters.rating === stars ? "active" : ""}`}
              onClick={() => handleRatingChange(stars)}
            >
              <div className="stars-container">{renderStarRow(stars)}</div>
              <span>& Up</span>
            </div>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="filter-group">
        <h4>Availability</h4>
        <div className="filter-options">
          <label className="filter-checkbox-label">
            <input
              type="checkbox"
              checked={filters.inStockOnly}
              onChange={handleAvailabilityToggle}
            />
            Exclude Out of Stock
          </label>
        </div>
      </div>
    </aside>
  );
}
