import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const position = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (position / winHeightPx) * 100;

    setScrollPosition(position);
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [scrollPosition, scrollProgress];
};
