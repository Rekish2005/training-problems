import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    badge: "Limited Time Deal",
    title: "Next-Gen Titanium Power",
    desc: "Experience the new iPhone 15 Pro Max with the aerospace-grade titanium design and custom Action button.",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1600&auto=format&fit=crop&q=80",
    productId: 1
  },
  {
    id: 3,
    badge: "Pro Workflows Unleashed",
    title: "Outrageous M3 Max Performance",
    desc: "Speed up your creation with the new 16-inch MacBook Pro. Extreme power meets unmatched battery life.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&auto=format&fit=crop&q=80",
    productId: 3
  },
  {
    id: 5,
    badge: "Best Seller",
    title: "Silence The Noise",
    desc: "Elevate your audio with Sony WH-1000XM5 wireless active noise-cancelling headphones.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&auto=format&fit=crop&q=80",
    productId: 5
  },
  {
    id: 19,
    badge: "Collectors Choice",
    title: "Build the Galaxy",
    desc: "Recreate the iconic LEGO Star Wars Millennium Falcon with 1,351 detailed pieces.",
    image: "https://images.unsplash.com/photo-1585366119957-e5730f3d5827?w=1600&auto=format&fit=crop&q=80",
    productId: 19
  }
];

export default function Hero({
  categories,
  activeCategory,
  onCategorySelect,
  products,
  onSelectProduct
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleShopNow = (productId) => {
    const matched = products.find((p) => p.id === productId);
    if (matched) {
      onSelectProduct(matched);
    }
  };

  // Category Icons Map
  const categoryIcons = {
    "Electronics": "🎧",
    "Fashion": "🧥",
    "Mobiles": "📱",
    "Laptops": "💻",
    "Home Appliances": "🧹",
    "Grocery": "🍎",
    "Books": "📚",
    "Sports": "🚴",
    "Beauty": "💄",
    "Toys": "🧸"
  };

  return (
    <section className="hero">
      {/* Sliding Carousel Banner */}
      <div className="carousel-wrapper">
        <div
          className="carousel-slide"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="carousel-content">
            <span className="carousel-badge">{slides[currentSlide].badge}</span>
            <h2 className="carousel-title">{slides[currentSlide].title}</h2>
            <p className="carousel-desc">{slides[currentSlide].desc}</p>
            <button
              className="carousel-btn"
              onClick={() => handleShopNow(slides[currentSlide].productId)}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="carousel-nav-btn prev"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="carousel-nav-btn next"
          onClick={handleNext}
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`indicator ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>

      {/* Category Shortcut Cards */}
      <div className="category-shortcuts">
        <div
          className={`shortcut-card ${activeCategory === "All" ? "active" : ""}`}
          onClick={() => onCategorySelect("All")}
        >
          <span className="shortcut-icon">🌐</span> All Departments
        </div>
        {categories.map((cat) => (
          <div
            key={cat}
            className={`shortcut-card ${activeCategory === cat ? "active" : ""}`}
            onClick={() => onCategorySelect(cat)}
          >
            <span className="shortcut-icon">
              {categoryIcons[cat] || "🏷️"}
            </span>{" "}
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
