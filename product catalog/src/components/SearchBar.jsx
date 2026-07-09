import React, { useState, useEffect, useRef } from "react";

export default function SearchBar({ products, onSearch, initialCategory = "All" }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dropdownRef = useRef(null);

  // Categories extracted from products
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Close suggestions dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update suggestions on query or category change
  useEffect(() => {
    if (query.trim().length < 1) {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter((product) => {
      const matchCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchText =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchText;
    });

    // Limit to 6 suggestions
    setSuggestions(filtered.slice(0, 6));
  }, [query, selectedCategory, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, selectedCategory);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name);
    onSearch(suggestion.name, selectedCategory);
    setShowSuggestions(false);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("", selectedCategory);
    setSuggestions([]);
  };

  return (
    <div className="search-container" ref={dropdownRef}>
      <form onSubmit={handleSubmit} className="search-bar-wrapper">
        <select
          className="search-select"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            onSearch(query, e.target.value);
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search Amazon Catalog..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
              // Trigger instant filter
              onSearch(e.target.value, selectedCategory);
            }}
            onFocus={() => setShowSuggestions(true)}
          />
          {query && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={handleClear}
            >
              ✕
            </button>
          )}
        </div>

        <button type="submit" className="search-btn" aria-label="Search button">
          🔍
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions-dropdown">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <div>
                <strong>{suggestion.brand}</strong> - {suggestion.name}
              </div>
              <span className="suggestion-category">{suggestion.category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
