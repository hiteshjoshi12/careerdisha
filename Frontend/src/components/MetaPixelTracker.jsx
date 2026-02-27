import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MetaPixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Every time the URL (location.pathname) changes, fire a PageView to Facebook
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null; // This component works in the background and renders nothing!
};

export default MetaPixelTracker;