
import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* TOP STRIP - BLACK BAR */}
      <div className="top-strip">
        <div className="strip-inner">
          <span>✦ FREE SHIPPING ON ORDERS OVER $50 ✦</span>
          <span className="desktop-only">✦ PREMIUM QUALITY GUARANTEED ✦</span>
          <span className="desktop-only">✦ SECURE CHECKOUT ✦</span>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <div className="nav-main">
        {/* NAV ROW 1 - LOGO + ICONS */}
        <div className="nav-row-1">
          {/* Left: Hamburger + Logo */}
          <div className="nav-left">
            <button
              className="mobile-only menu-icon"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              tabIndex={0}
              type="button"
            >
              <Menu size={24} />
            </button>
            <div className="logo-square">
              <ShoppingBag size={20} strokeWidth={3} />
            </div>
            <h1 className="logo-text">LUXE</h1>
          </div>

          {/* Right: Nav Icons */}
          <div className="nav-icons">
            <button type="button" aria-label="Search">
              <Search size={22} />
            </button>
            <button type="button" aria-label="Wishlist">
              <Heart size={22} />
            </button>
            <button type="button" aria-label="Shopping Bag">
              <ShoppingBag size={22} />
            </button>
            <button type="button" className="desktop-only" aria-label="User Account">
              <User size={22} />
            </button>
            <div className="lang desktop-only">
              <strong>ENG</strong>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* NAV ROW 2 - NAVIGATION LINKS (DESKTOP ONLY) */}
        <nav className="nav-row-2 desktop-only">
          <a href="#">SHOP</a>
          <a href="#">COLLECTIONS</a>
          <a href="#">ABOUT</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
        </nav>
      </div>

      {/* MOBILE MENU DRAWER */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;