import { useEffect } from 'react';

type MouseEventType =
  | 'mousedown'
  | 'mouseenter'
  | 'mouseleave'
  | 'mousemove'
  | 'mouseout'
  | 'mouseover'
  | 'mouseup';

export const useMouseEvent = (
  element: HTMLElement | null,
  mouseEvent: MouseEventType,
  handlerFunc: () => void
) => {
  useEffect(() => {
    if (element) {
      element.addEventListener(mouseEvent, handlerFunc);
    }
    return () => {
      if (element) {
        element.removeEventListener(mouseEvent, handlerFunc);
      }
    };
  }, [element, handlerFunc, mouseEvent]);
};
