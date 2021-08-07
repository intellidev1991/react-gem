/* eslint-disable */
import { useState, useEffect } from "react";
import { debounce } from "lodash";

export interface IScrollBarPos {
  x: number;
  y: number;
}

const useGetElementScrollPosition = (ref: any) => {
  const [elementPosition, setElementPosition] = useState<IScrollBarPos>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = debounce(() => {
      let x = {
        x: ref.current.pageXOffset || ref.current.scrollLeft,
        y: ref.current.pageYOffset || ref.current.scrollTop,
      };

      if (x.y !== 0) {
        setElementPosition(x);
      }
    }, 300);

    ref.current.addEventListener("scroll", handleScroll);

    return () => ref?.current?.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return elementPosition;
};

export { useGetElementScrollPosition };
