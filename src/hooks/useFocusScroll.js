import { useEffect, useState } from 'react';

export const useFocusScroll = () => {
  const [focusAnchor, setFocusAnchor] = useState(null);

  useEffect(() => {
    // Read ?focus= from URL
    const params = new URLSearchParams(window.location.search);
    const anchor = params.get('focus');

    if (anchor) {
      setFocusAnchor(anchor);

      // Give DOM time to render
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          // Check prefers-reduced-motion
          const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches;

          // Scroll to element
          if (prefersReducedMotion) {
            el.scrollIntoView();
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }

          // Add highlight
          el.setAttribute('data-focus-highlight', 'true');

          // Remove highlight after 2.5s
          setTimeout(() => {
            el.removeAttribute('data-focus-highlight');
          }, 2500);
        }
      }, 100);
    }
  }, []);

  return focusAnchor;
};
