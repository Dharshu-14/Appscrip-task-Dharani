import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-bg">
    <div className="container footer-container">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for exclusive offers and new arrivals from LUXE.</p>
          <div className="input-group">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>+1 (800) 123-5360</p>
          <p>support@luxefashion.com</p>
          <h4>CURRENCY</h4>
          <p className="currency">🇺🇸 USD</p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div>
          <h4>LUXE</h4>
          <ul><li>About Us</li><li>Collections</li><li>Sustainability</li></ul>
        </div>
        <div>
          <h4>QUICK LINKS</h4>
          <ul><li>Orders & Shipping</li><li>Returns & Exchanges</li><li>FAQs</li></ul>
        </div>
        <div className="footer-social">
          <h4>FOLLOW US</h4>
          <div className="social-icons" aria-label="Social Media Links">
            <a href="#" aria-label="Instagram" className="footer-icon" tabIndex={0}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="#fff"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="footer-icon" tabIndex={0}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="22" height="22" rx="5" fill="#fff" fillOpacity="0.1"/><path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 2H12v6h-2v-6H8v-2h2V9a3 3 0 0 1 3-3h2v2Z" stroke="#fff" strokeWidth="2"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="footer-icon" tabIndex={0}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="22" height="22" rx="5" fill="#fff" fillOpacity="0.1"/><path d="M21 7.5a7.5 7.5 0 0 1-2.1.6A3.75 3.75 0 0 0 20.5 6a7.5 7.5 0 0 1-2.4.9A3.75 3.75 0 0 0 12 10.5v.5A10.7 10.7 0 0 1 4 6.5s-4 9 5 13a11.5 11.5 0 0 1-7 2c9 5 20 0 20-11.5 0-.2 0-.4 0-.5A7.5 7.5 0 0 0 21 7.5Z" stroke="#fff" strokeWidth="2"/></svg>
            </a>
          </div>
          <h4 style={{marginTop: 24}}>LUXE ACCEPTS</h4>
          <div className="payment-icons" aria-label="Payment Methods">
            <span className="footer-icon" title="Visa"><svg width="32" height="20" viewBox="0 0 32 20"><rect width="32" height="20" rx="4" fill="#fff"/><text x="16" y="14" textAnchor="middle" fontSize="10" fill="#1a1f71" fontWeight="bold">VISA</text></svg></span>
            <span className="footer-icon" title="MasterCard"><svg width="32" height="20" viewBox="0 0 32 20"><rect width="32" height="20" rx="4" fill="#fff"/><circle cx="13" cy="10" r="6" fill="#eb001b"/><circle cx="19" cy="10" r="6" fill="#f79e1b" fillOpacity=".8"/></svg></span>
            <span className="footer-icon" title="PayPal"><svg width="32" height="20" viewBox="0 0 32 20"><rect width="32" height="20" rx="4" fill="#fff"/><text x="16" y="14" textAnchor="middle" fontSize="10" fill="#003087" fontWeight="bold">PayPal</text></svg></span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;