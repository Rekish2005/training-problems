import React, { useState, useEffect } from "react";
import { products, categories } from "./data/products";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import ProductDetailsModal from "./components/ProductDetailsModal";
import Footer from "./components/Footer";
import "./App.css";

const INITIAL_FILTERS = {
  categories: [],
  brands: [],
  priceRange: { min: "", max: "" },
  rating: 0,
  inStockOnly: false
};

export default function App() {
  // Local storage initialization helpers
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("amazon_mock_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("amazon_mock_wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("All");
  const [activeCategoryShortcut, setActiveCategoryShortcut] = useState("All");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [sortBy, setSortBy] = useState("best-selling");

  // UI state
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem("amazon_mock_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("amazon_mock_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Cart Operations
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
    // Open cart drawer for immediate visual confirmation
    setCartOpen(true);
  };

  const handleBuyNow = (product) => {
    const inCart = cart.some((item) => item.product.id === product.id);
    if (!inCart) {
      handleAddToCart(product);
    } else {
      setCartOpen(true);
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist Operations
  const handleToggleWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter((id) => id !== productId);
      } else {
        return [...prevWishlist, productId];
      }
    });
  };

  const handleMoveToCart = (product) => {
    handleAddToCart(product);
    handleToggleWishlist(product.id);
  };

  // Search trigger
  const handleSearch = (query, category) => {
    setSearchQuery(query);
    setSearchCategory(category);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setSearchQuery("");
    setSearchCategory("All");
    setActiveCategoryShortcut("All");
    setSortBy("best-selling");
  };

  // Filter & Search matching logic
  const filteredProducts = products.filter((product) => {
    // 1. Search Query Match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesText =
        product.name.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);
      
      if (!matchesText) return false;
    }

    // 2. Search Select Dropdown Category Match
    if (searchCategory !== "All" && product.category !== searchCategory) {
      return false;
    }

    // 3. Hero Category Shortcut Match
    if (
      activeCategoryShortcut !== "All" &&
      product.category !== activeCategoryShortcut
    ) {
      return false;
    }

    // 4. Sidebar Category Multi-select Match
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) {
      return false;
    }

    // 5. Sidebar Brand Multi-select Match
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }

    // 6. Price Range Match
    if (filters.priceRange.min !== "" && product.price < filters.priceRange.min) {
      return false;
    }
    if (filters.priceRange.max !== "" && product.price > filters.priceRange.max) {
      return false;
    }

    // 7. Rating Match
    if (filters.rating > 0 && product.rating < filters.rating) {
      return false;
    }

    // 8. Stock Status Match
    if (
      filters.inStockOnly &&
      product.stockStatus.toLowerCase().includes("out of stock")
    ) {
      return false;
    }

    return true;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "new-arrivals":
        return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      case "best-selling":
      default:
        return b.salesCount - a.salesCount;
    }
  });

  // Dashboard Stats
  const allProductsCount = products.length;
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;
  const categoriesCount = categories.length;

  // Resolve products in wishlist
  const wishlistItems = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="app-container">
      {/* Header section */}
      <Header
        products={products}
        onSearch={handleSearch}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onLogoClick={handleResetFilters}
      />

      {/* Hero Section */}
      <Hero
        categories={categories}
        activeCategory={activeCategoryShortcut}
        onCategorySelect={setActiveCategoryShortcut}
        products={products}
        onSelectProduct={setSelectedProduct}
      />

      {/* Main layout: filters sidebar + catalog main grid */}
      <main className="catalog-section">
        <Filters
          products={products}
          filters={filters}
          onFilterChange={setFilters}
          onClearFilters={handleResetFilters}
        />

        <ProductGrid
          products={sortedProducts}
          allProductsCount={allProductsCount}
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          categoriesCount={categoriesCount}
          sortBy={sortBy}
          onSortChange={setSortBy}
          wishlist={wishlist}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          onToggleWishlist={handleToggleWishlist}
          onSelectProduct={setSelectedProduct}
          onResetFilters={handleResetFilters}
        />
      </main>

      {/* Shopping Cart Side Drawer */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Wishlist Side Drawer */}
      <Wishlist
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={handleToggleWishlist}
        onMoveToCart={handleMoveToCart}
      />

      {/* Product Details Modal Overlay */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          allProducts={products}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          isWishlisted={wishlist.includes(selectedProduct.id)}
          onToggleWishlist={handleToggleWishlist}
          onSelectProduct={setSelectedProduct}
        />
      )}

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
