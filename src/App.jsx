import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import { FILTER_CATEGORIES } from './constants/mockData';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { ChevronLeft, ChevronRight, ChevronDown, Check } from 'lucide-react';
import './App.css';

const SORT_OPTIONS = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE: HIGH TO LOW",
  "PRICE: LOW TO HIGH"
];

function App() {
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(window.innerWidth > 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [wishlist, setWishlist] = useState(new Set());
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");
  const filterToggleRef = useRef(null);
  const sidebarRef = useRef(null);
  const productsRef = useRef(null);
  // Filter state: one Set per filter group
  const [selectedFilters, setSelectedFilters] = useState(() => {
    const obj = {};
    FILTER_CATEGORIES.forEach(cat => {
      if (cat.options) obj[cat.id] = new Set();
    });
    return obj;
  });
  // Refined filter logic: map filter categories to real product fields
  const filterProduct = (product) => {
    // Map filter category id to product field
    const mapping = {
      idealFor: 'title', // not a real field, so fallback to title
      occasion: 'category',
      work: 'description',
      fabric: 'description',
      segment: 'category',
      suitableFor: 'description',
      rawMaterials: 'description',
      pattern: 'title', // fallback to title
    };
    for (const cat of FILTER_CATEGORIES) {
      if (!cat.options) continue;
      const selected = selectedFilters[cat.id];
      if (selected && selected.size > 0) {
        const field = mapping[cat.id];
        const values = Array.from(selected);
        const match = values.some(val => {
          const valLower = val.toLowerCase();
          if (field && product[field]) {
            return product[field].toLowerCase().includes(valLower);
          }
          // fallback: check all string fields
          return Object.values(product).some(v =>
            typeof v === 'string' && v.toLowerCase().includes(valLower)
          );
        });
        if (!match) return false;
      }
    }
    return true;
  };

  const filteredProducts = products.filter(filterProduct);

  // Handle Resize for Responsiveness
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      // Automatically hide sidebar when moving to mobile to prevent layout shift
      if (mobile) setShowFilters(false);
      else setShowFilters(true);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch Products
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  // Prevent Body Scroll when Mobile Filter is Open
  useEffect(() => {
    if (isMobile && showFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showFilters, isMobile]);

  // Accessibility: Close on Escape and trap focus when mobile drawer open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (sortOpen) setSortOpen(false);
        if (isMobile && showFilters) setShowFilters(false);
      }
      // If drawer is open, trap focus inside
      if (isMobile && showFilters && sidebarRef.current) {
        if (e.key === 'Tab') {
          const focusable = sidebarRef.current.querySelectorAll(
            'a, button, input, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusable || focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMobile, showFilters, sortOpen]);

  const toggleWishlist = (id) => {
    const next = new Set(wishlist);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setWishlist(next);
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>TIMELESS ELEGANCE MEETS MODERN STYLE</h1>
          <p>
            Discover our exclusive collection of premium fashion and lifestyle products. 
            Curated with passion, crafted with precision, and designed for those who appreciate the finer things in life.
          </p>
        </section>

        {/* Toolbar: Filter Toggle & Sort */}
        <div className="toolbar">
          <div className="toolbar-left">
            <span className="product-count">{products.length} ITEMS</span>
            <button 
              className="filter-toggle-btn" 
              onClick={() => {
                const next = !showFilters;
                setShowFilters(next);
                // When opening on mobile, focus the sidebar close button (handled in FilterSidebar via prop)
                if (!showFilters && isMobile) {
                  // focus will be handled after sidebar renders
                  setTimeout(() => {
                    if (sidebarRef.current) {
                      const firstFocusable = sidebarRef.current.querySelector('button, [tabindex], input, a');
                      if (firstFocusable) firstFocusable.focus();
                    }
                  }, 50);
                }
                // When closing on mobile, return focus to the filter toggle
                if (showFilters && filterToggleRef.current) {
                  setTimeout(() => filterToggleRef.current.focus(), 50);
                }
              }}
              ref={filterToggleRef}
            >
              {isMobile ? (
                "FILTER"
              ) : (
                showFilters ? (
                  <><ChevronLeft size={16}/> HIDE FILTER</>
                ) : (
                  <><ChevronRight size={16}/> SHOW FILTER</>
                )
              )}
            </button>
          </div>

          <div className="sort-container">
            <button className="sort-dropdown-btn" onClick={() => setSortOpen(!sortOpen)}>
              {selectedSort} <ChevronDown size={20} className={sortOpen ? 'rotate' : ''} />
            </button>
            
            {sortOpen && (
              <>
                <div className="sort-overlay" onClick={() => setSortOpen(false)} />
                <div className="sort-menu">
                  {SORT_OPTIONS.map(option => (
                    <div 
                      key={option} 
                      className={`sort-item ${selectedSort === option ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedSort(option);
                        setSortOpen(false);
                      }}
                    >
                      {selectedSort === option && <Check size={14} />}
                      {option}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="main-layout">
          {/* Sidebar Overlay for Mobile */}
          {isMobile && showFilters && (
            <div className="sidebar-backdrop" onClick={() => setShowFilters(false)} />
          )}

          {/* Use the same `.sidebar` + `.visible` classes the CSS expects */}
          <aside
            className={`sidebar ${showFilters ? 'visible' : ''}`}
            ref={sidebarRef}
            aria-hidden={isMobile && showFilters ? 'false' : 'true'}
          >
             <FilterSidebar
               onClose={() => setShowFilters(false)}
               selected={selectedFilters}
               setSelected={setSelectedFilters}
             />
          </aside>

          <section
            className={`products-container ${!showFilters ? 'full-width' : ''}`}
            ref={productsRef}
            aria-hidden={false}
          >
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  isWishlisted={wishlist.has(product.id)}
                  onToggleWishlist={toggleWishlist}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;