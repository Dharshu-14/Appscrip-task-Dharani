import React from 'react';
import { X } from 'lucide-react';
import './MobileMenu.css';

const navLinks = [
  { label: 'SHOP', href: '#' },
  { label: 'COLLECTIONS', href: '#' },
  { label: 'ABOUT', href: '#' },
  { label: 'BLOG', href: '#' },
  { label: 'CONTACT', href: '#' },
];

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* OVERLAY - CLICK TO CLOSE */}
      <div
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        role="presentation"
      />

      {/* DRAWER */}
      <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
        {/* HEADER */}
        <div className="mobile-menu-header">
          <h2>MENU</h2>
          <button
            className="mobile-menu-close-btn"
            onClick={onClose}
            aria-label="Close menu"
            type="button"
          >
            <X size={24} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="mobile-menu-nav">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* FOOTER - LANGUAGE */}
        <div className="mobile-menu-footer">
          <button
            className="mobile-menu-language-btn"
            type="button"
            aria-label="Language selector"
          >
            <span>LANGUAGE</span>
            <span className="mobile-menu-language-badge">ENG</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;