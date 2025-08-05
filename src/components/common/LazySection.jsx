// src/components/common/LazySection.jsx (Nayi File)

import React, { useState, useRef, useEffect, Suspense } from 'react';

// Loader component
const Loader = ({ height }) => (
  <div
    style={{ minHeight: height }}
    className='flex w-full items-center justify-center'
  >
    <div className='border-my-accent size-12 animate-spin rounded-full border-4 border-dashed'></div>
  </div>
);

const LazySection = ({ children, placeholderHeight = '400px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px 150px 0px', // Thora pehle load karna shuru karein
      },
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      if (placeholderRef.current) {
        observer.unobserve(placeholderRef.current);
      }
    };
  }, []);

  return (
    <div ref={placeholderRef}>
      {isVisible ? (
        <Suspense fallback={<Loader height={placeholderHeight} />}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight: placeholderHeight }} />
      )}
    </div>
  );
};

export default LazySection;
