import React, { useEffect } from 'react';
import { setSEOMetadata } from '../utils/seoHelpers';

/**
 * SEO Meta Tags Component
 * Updates document head with SEO metadata
 */
const SEOHead = ({
  title = 'Appscrip - Fashion & Clothing Store | Premium Quality Products',
  description = 'Shop premium fashion and clothing at Appscrip. Discover our exclusive collection of high-quality apparel, accessories, and more.',
  keywords = 'fashion, clothing, apparel, online shopping, premium quality',
  canonical,
  og = {},
  structuredData = null,
}) => {
  useEffect(() => {
    setSEOMetadata({
      title,
      description,
      keywords,
      canonical,
      og,
      structuredData,
    });
  }, [title, description, keywords, canonical, og, structuredData]);

  return null; // This component only handles side effects
};

export default SEOHead;
