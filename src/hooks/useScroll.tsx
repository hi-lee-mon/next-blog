import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  let handle: NodeJS.Timeout | null = null;

  const listener = (e: any) => {
    if (handle) {
      clearTimeout(handle);
    }
    setScrolling(true);
    setScrollTop(e.target.documentElement.scrollTop);
    handle = setTimeout(() => {
      setScrolling(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return { scrolling, scrollTop };
};
