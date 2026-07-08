import React from "react";

export default function Footer() {
  const handleSocialClick = (platform) => {
    alert(`Redirecting to mock ${platform} page...`);
  };

  return (
    <footer className="footer">
      <div className="footer-nav">
        {/* About column */}
        <div className="footer-col">
          <h5>Get to Know Us</h5>
          <ul>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); alert("About Us page placeholder"); }}>About Us</a></li>
            <li><a href="#careers" onClick={(e) => { e.preventDefault(); alert("Careers page placeholder"); }}>Careers</a></li>
            <li><a href="#press" onClick={(e) => { e.preventDefault(); alert("Press Releases placeholder"); }}>Press Releases</a></li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer-col">
          <h5>Contact & Support</h5>
          <ul>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); alert("Contact Details: support@amazonmock.com"); }}>Contact Us</a></li>
            <li><a href="#returns" onClick={(e) => { e.preventDefault(); alert("Returns & Replacements portal"); }}>Returns Center</a></li>
            <li><a href="#shipping" onClick={(e) => { e.preventDefault(); alert("Shipping rates & policies"); }}>Shipping Rates</a></li>
          </ul>
        </div>

        {/* Help column */}
        <div className="footer-col">
          <h5>Let Us Help You</h5>
          <ul>
            <li><a href="#account" onClick={(e) => { e.preventDefault(); alert("Account Settings"); }}>Your Account</a></li>
            <li><a href="#help" onClick={(e) => { e.preventDefault(); alert("Help Center & FAQs"); }}>Help Assistant</a></li>
            <li><a href="#recalls" onClick={(e) => { e.preventDefault(); alert("Recalls & Safety Alerts"); }}>Recalls & Product Safety</a></li>
          </ul>
        </div>

        {/* Social Media column */}
        <div className="footer-col">
          <h5>Connect with Us</h5>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
            Follow our mock accounts for updates and deals!
          </p>
          <div className="social-icons-row">
            <button
              className="social-icon-btn"
              onClick={() => handleSocialClick("Facebook")}
              title="Facebook"
            >
              f
            </button>
            <button
              className="social-icon-btn"
              onClick={() => handleSocialClick("X (Twitter)")}
              title="X (Twitter)"
            >
              𝕏
            </button>
            <button
              className="social-icon-btn"
              onClick={() => handleSocialClick("Instagram")}
              title="Instagram"
            >
              📷
            </button>
            <button
              className="social-icon-btn"
              onClick={() => handleSocialClick("LinkedIn")}
              title="LinkedIn"
            >
              in
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <span className="footer-bottom-text">
          © 2026 Amazon Catalog Mockup. Built with React (Vite) & CSS. All rights reserved.
        </span>

        <div className="footer-bottom-links">
          <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Notice details"); }}>Privacy Policy</a>
          <a href="#conditions" onClick={(e) => { e.preventDefault(); alert("Conditions of Use details"); }}>Conditions of Use</a>
          <a href="#ads" onClick={(e) => { e.preventDefault(); alert("Interest-Based Ads details"); }}>Ad Choices</a>
        </div>
      </div>
    </footer>
  );
}
