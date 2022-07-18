import { useMemo, useState } from "react";
import { breakPoints } from "../styles/constants/breakPoints";

// interface Return {
//   currentScreenWidth: number;
//   currentScreenHeight: number;
//   isMobile: boolean;
// }

export const useDevice = () => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(
    window.innerWidth
  );
  const [currentScreenHeight, setCurrentScreenHeight] = useState(
    window.innerHeight
  );

  useMemo(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { clientWidth, clientHeight } = entries[0]?.target;

      setCurrentScreenWidth(clientWidth);
      setCurrentScreenHeight(clientHeight);
    });

    resizeObserver.observe(document.body);
  }, []);

  return {
    currentScreenHeight,
    currentScreenWidth,
    isMobile: currentScreenWidth < breakPoints.desktop,
  };
};
