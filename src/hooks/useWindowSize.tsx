import { useEffect, useState } from "react";


export function useWindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerWidth);


  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log('Window has been resized!');
  };

  useEffect(() => {
    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, height };
}

