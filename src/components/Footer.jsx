import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-bg" role="contentinfo">
    <div className="container footer-container">
      <div className="footer-top">
        <section className="footer-newsletter">
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for exclusive offers and new arrivals from LUXE.</p>
          <form className="input-group" aria-label="Newsletter subscription">
            <input 
              type="email" 
              placeholder="Enter your e-mail..." 
              aria-label="Email address"
              required
            />
            <button type="submit" aria-label="Subscribe to newsletter">SUBSCRIBE</button>
          </form>
        </section>
        <section className="footer-contact">
          <h2>CONTACT US</h2>
          <address>
            <p><a href="tel:+18001235360">+1 (800) 123-5360</a></p>
            <p><a href="mailto:support@luxefashion.com">support@luxefashion.com</a></p>
          </address>
          <h3>CURRENCY</h3>
          <p className="currency">🇺🇸 USD</p>
        </section>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <section>
          <h3>LUXE</h3>
          <ul>
            <li>About Us</li>
            <li>Collections</li>
            <li>Sustainability</li>
          </ul>
        </section>
        <section>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Returns & Exchanges</li>
            <li>FAQs</li>
          </ul>
        </section>
        <section className="footer-social">
          <h3>FOLLOW US</h3>
          <nav className="social-icons" aria-label="Social media links">
            <a href="https://instagram.com" aria-label="Follow us on Instagram" className="footer-icon" target="_blank" rel="noopener noreferrer">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="#fff"/></svg>
            </a>
            <a href="https://facebook.com" aria-label="Follow us on Facebook" className="footer-icon" target="_blank" rel="noopener noreferrer">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="22" height="22" rx="5" fill="#fff" fillOpacity="0.1"/><path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 2H12v6h-2v-6H8v-2h2V9a3 3 0 0 1 3-3h2v2Z" stroke="#fff" strokeWidth="2"/></svg>
            </a>
            <a href="https://twitter.com" aria-label="Follow us on Twitter" className="footer-icon" target="_blank" rel="noopener noreferrer">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="22" height="22" rx="5" fill="#fff" fillOpacity="0.1"/><path d="M21 7.5a7.5 7.5 0 0 1-2.1.6A3.75 3.75 0 0 0 20.5 6a7.5 7.5 0 0 1-2.4.9A3.75 3.75 0 0 0 12 10.5v.5A10.7 10.7 0 0 1 4 6.5s-4 9 5 13a11.5 11.5 0 0 1-7 2c9 5 20 0 20-11.5 0-.2 0-.4 0-.5A7.5 7.5 0 0 0 21 7.5Z" stroke="#fff" strokeWidth="2"/></svg>
            </a>
          </nav>
          <h3 style={{marginTop: 24}}>LUXE ACCEPTS</h3>
          <div className="payment-icons" aria-label="Accepted payment methods">
            <span className="footer-icon" title="Visa"><svg width="32" height="20" viewBox="0 0 32 20"><rect width="32" height="20" rx="4" fill="#fff"/><text x="16" y="14" textAnchor="middle" fontSize="10" fill="#1a1f71" fontWeight="bold">VISA</text></svg></span>
            <span className="footer-icon" title="MasterCard"><svg width="32" height="20" viewBox="0 0 32 20"><rect width="32" height="20" rx="4" fill="#fff"/><circle cx="13" cy="10" r="6" fill="#eb001b"/><circle cx="19" cy="10" r="6" fill="#f79e1b" fillOpacity=".8"/></svg></span>
            <span className="footer-icon" title="PayPal"><svg width="32" height="20" viewBox="0 0 32 20"><rect width="32" height="20" rx="4" fill="#fff"/><text x="16" y="14" textAnchor="middle" fontSize="10" fill="#003087" fontWeight="bold">PayPal</text></svg></span>
          </div>
        </section>
      </div>
    </div>
  </footer>
);

export default Footer;