import { useMouseEvent } from './useMouseEvent';
import { useState, useCallback } from 'react';

export const useHoverDetector = (elementToHover: HTMLElement | null, defaultHoverValue = false) => {
  const [isHovering, setIsHovering] = useState(defaultHoverValue);

  const handleMouseLeave = useCallback(() => {
    if (isHovering) {
      setIsHovering(false);
    }
  }, [isHovering]);

  const handleMouseEnter = useCallback(() => {
    if (!isHovering) {
      setIsHovering(true);
    }
  }, [isHovering]);

  useMouseEvent(elementToHover, 'mouseleave', handleMouseLeave);
  useMouseEvent(elementToHover, 'mouseenter', handleMouseEnter);
  useMouseEvent(elementToHover, 'mouseover', handleMouseEnter);

  return isHovering;
};
