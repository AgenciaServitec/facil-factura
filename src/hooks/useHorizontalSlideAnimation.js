import { useState, useEffect } from "react";
import { useSpring } from "react-spring";

const animationType = {
  right: "-100%",
  left: "150%",
};

export const useHorizontalSlideAnimation = (elementRef, type = "left") => {
  const animation = animationType[type];

  const [isVisible, setIsVisible] = useState(false);
  const animationProps = useSpring({
    transform: isVisible ? "translateX(0%)" : `translateX(${animation})`,
  });

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
