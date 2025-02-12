// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Scroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of the page whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
