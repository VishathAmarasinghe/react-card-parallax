import { useScroll } from "framer-motion";
import { ReactElement, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import * as React from "react";

interface ParallaxCardContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const containerStyles: React.CSSProperties = {
  position: "relative"
};

const ParallaxCardContainer = ({ children,style = {} }: ParallaxCardContainerProps) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} style={{ ...containerStyles, ...style }}>
      {/* Automatically pass scrollYProgress and cardIndex to children */}
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && (child.type as any).displayName === "ParallaxCard") {
          return React.cloneElement(child as ReactElement<any>, {
            scrollYProgress,
            cardIndex: index,
          });
        }
        return child;
      })}
    </main>
  );
};

export default ParallaxCardContainer;
