//Utility function to get window scroll speed in Y direction (horizontal)

import { useEffect, useState } from 'react';

const useCustomParallax = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [offsetY];
};

export default useCustomParallax;
