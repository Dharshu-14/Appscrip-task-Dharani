
import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header" role="banner">
      {/* TOP STRIP - BLACK BAR */}
      <div className="top-strip" aria-label="Promotional banner">
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
            <div className="logo-square" aria-label="Luxe Fashion Store Logo">
              <ShoppingBag size={20} strokeWidth={3} />
            </div>
            <h1 className="logo-text">
              <a href="/" title="Appscrip - Premium Fashion Store">LUXE</a>
            </h1>
          </div>

          {/* Right: Nav Icons */}
          <div className="nav-icons">
            <button type="button" aria-label="Search products">
              <Search size={22} />
            </button>
            <button type="button" aria-label="View wishlist">
              <Heart size={22} />
            </button>
            <button type="button" aria-label="View shopping bag">
              <ShoppingBag size={22} />
            </button>
            <button type="button" className="desktop-only" aria-label="User account">
              <User size={22} />
            </button>
            <div className="lang desktop-only">
              <strong>ENG</strong>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* NAV ROW 2 - NAVIGATION LINKS (DESKTOP ONLY) */}
        <nav className="nav-row-2 desktop-only" aria-label="Main navigation">
          <a href="#shop">SHOP</a>
          <a href="#collections">COLLECTIONS</a>
          <a href="#about">ABOUT</a>
          <a href="#blog">BLOG</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>

      {/* MOBILE MENU DRAWER */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;