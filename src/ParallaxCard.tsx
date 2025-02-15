import { CSSProperties, useRef } from "react";
import { useTransform, motion, MotionValue } from "framer-motion";

interface ParallaxCardProps {
  children: React.ReactNode;
  color?: string;
  cardIndex?: number;
  scrollYProgress?: MotionValue<number>;
  containerStyle?: CSSProperties;
  cardStyle?: CSSProperties;
}

const ParallaxCard = ({ children, color = "#CDDDE4", cardIndex = 0, scrollYProgress, containerStyle: customContainerStyle = {}, cardStyle: customCardStyle = {} }: ParallaxCardProps) => {
  const container = useRef<HTMLDivElement>(null);

  if (!scrollYProgress) return null; // Prevents rendering issues

  // Compute range dynamically
  const range: [number, number] = [cardIndex * 0.25, 1]; // Adjust this value as needed

  // Compute targetScale dynamically
  const targetScale = 1 - (cardIndex * 0.05); // Example: Reduce scale for each card

  // Apply scale transformation
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  const containerStyle = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "sticky" as const,
    top: 0,
    padding: "0 1rem",
  };

  const cardStyle = {
    backgroundColor: color,
    scale,
    position: "relative" as const,
    display: "flex" as const,
    flexDirection: "column" as const,
    maxWidth: "95%",
    textAlign: "center" as const,
    color: "white",
    borderRadius: "1rem",
    padding: "1.5rem",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    transformOrigin: "top" as const,
  };

  return (
    <div ref={container} style={{...containerStyle, ...customContainerStyle}}>
      <motion.div style={{...cardStyle, ...customCardStyle}}>{children}</motion.div>
    </div>
  );
};

// Assign a displayName to identify it in `ParallaxCardContainer`
ParallaxCard.displayName = "ParallaxCard";

export default ParallaxCard;
