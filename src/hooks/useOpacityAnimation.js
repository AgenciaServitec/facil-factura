import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";

export const useOpacityAnimation = (elementRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const animationProps = useSpring({ opacity: isVisible ? 1 : 0 });

  const isElementVisible = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        setIsVisible(isElementVisible(element));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);

  return animationProps;
};
