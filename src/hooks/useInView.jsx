import { useEffect, useState } from "react";

export const useInView = (element, rootMargin) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin }
    );

    current && observer?.observe(current);

    return () => current && observer.unobserve(current);
  }, []);

  return isVisible;
};
