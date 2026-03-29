/**
 * SEO Helpers - Utility functions for managing meta tags and SEO
 */

/**
 * Update document title
 * @param {string} title - Page title
 */
export const updatePageTitle = (title) => {
  document.title = title;
};

/**
 * Update meta tag
 * @param {string} name - Meta tag name attribute
 * @param {string} content - Meta tag content
 */
export const updateMetaTag = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

/**
 * Update Open Graph meta tag
 * @param {string} property - OG property name
 * @param {string} content - Content value
 */
export const updateOGTag = (property, content) => {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

/**
 * Update canonical URL
 * @param {string} url - Canonical URL
 */
export const updateCanonical = (url) => {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
};

/**
 * Update structured data (JSON-LD)
 * @param {object} data - Structured data object
 */
export const updateStructuredData = (data) => {
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

/**
 * Set SEO metadata for a page
 * @param {object} config - Configuration object
 * @param {string} config.title - Page title
 * @param {string} config.description - Meta description
 * @param {string} config.keywords - Meta keywords
 * @param {string} config.canonical - Canonical URL
 * @param {object} config.og - Open Graph tags
 * @param {object} config.structuredData - JSON-LD structured data
 */
export const setSEOMetadata = (config) => {
  const {
    title,
    description,
    keywords,
    canonical,
    og = {},
    structuredData = null,
  } = config;

  if (title) {
    updatePageTitle(title);
    updateMetaTag('title', title);
    updateOGTag('og:title', title);
  }

  if (description) {
    updateMetaTag('description', description);
    updateOGTag('og:description', description);
  }

  if (keywords) {
    updateMetaTag('keywords', keywords);
  }

  if (canonical) {
    updateCanonical(canonical);
  }

  // Update Open Graph tags
  Object.entries(og).forEach(([key, value]) => {
    updateOGTag(`og:${key}`, value);
  });

  // Update structured data
  if (structuredData) {
    updateStructuredData(structuredData);
  }
};

/**
 * Generate schema for product
 * @param {object} product - Product data
 * @returns {object} Product schema
 */
export const generateProductSchema = (product) => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title || 'Product',
    description: product.description || '',
    image: product.image || '',
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Appscrip',
    },
    offers: {
      '@type': 'Offer',
      url: product.url || '',
      priceCurrency: 'USD',
      price: product.price || '0',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
    aggregateRating: product.rating ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      ratingCount: product.ratingCount || 0,
    } : undefined,
  };
};

/**
 * Generate schema for breadcrumb navigation
 * @param {array} items - Breadcrumb items [{name: '', url: ''}]
 * @returns {object} Breadcrumb schema
 */
export const generateBreadcrumbSchema = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Get base URL
 * @returns {string} Base URL
 */
export const getBaseURL = () => {
  return typeof window !== 'undefined' ? window.location.origin : 'https://appscrip.com';
};
