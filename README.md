# react-card-parallax
react card parallax animation

Parallax Card Package
This package provides a Parallax Card component that creates a parallax effect for each card based on the scroll position. The ParallaxCard component dynamically adjusts the scale and range of the card as the user scrolls down the page, offering a smooth and engaging user experience.

Features:
Sticky card behavior with parallax effect.
Scalable cards based on scroll position.
Customizable range and scale multipliers for dynamic effects.
Simple integration with the ParallaxCardContainer for managing scroll events.
Installation
To install the package, you can use npm or yarn:

Using npm:
bash
Copy
Edit
npm install react-card-parallax
Using yarn:
bash
Copy
Edit
yarn add react-card-parallax
Usage
ParallaxCardContainer:
This component acts as a wrapper for multiple ParallaxCard components. It listens for the scroll position and automatically passes the necessary scrollYProgress and cardIndex to the child ParallaxCard components.

tsx
Copy
Edit
import { ParallaxCard, ParallaxCardContainer } from "react-card-parallax";

const App = () => {
  return (
    <ParallaxCardContainer>
      <ParallaxCard>
        <h1>Card 1</h1>
      </ParallaxCard>
      <ParallaxCard>
        <h1>Card 2</h1>
      </ParallaxCard>
      <ParallaxCard>
        <h1>Card 3</h1>
      </ParallaxCard>
    </ParallaxCardContainer>
  );
};
ParallaxCard:
Each ParallaxCard displays content with a parallax effect based on the scroll position. The scrollYProgress and cardIndex are automatically passed down from the ParallaxCardContainer.

Props:
children (React.ReactNode): The content inside the card.
color (string): The background color of the card. Default is #CDDDE4.
cardIndex (number): The index of the card within the ParallaxCardContainer. It helps to dynamically adjust the card’s parallax effect.
scrollYProgress (MotionValue<number>): The scroll progress value passed from ParallaxCardContainer.
containerStyle (CSSProperties): Custom styles for the container (optional).
cardStyle (CSSProperties): Custom styles for the card (optional).
rangeMultiplier (number): Multiplier for the range of scroll. Adjusts the scroll effect range dynamically. Default is 0.25.
scaleMultiplier (number): Multiplier for the scale of the card based on the scroll position. Default is 0.05.
tsx
Copy
Edit
import { ParallaxCard } from "react-card-parallax";

const App = () => {
  return (
    <ParallaxCard color="#FF5733" rangeMultiplier={0.3} scaleMultiplier={0.07}>
      <h1>Custom Card</h1>
    </ParallaxCard>
  );
};
Example:
tsx
Copy
Edit
import React from "react";
import { ParallaxCard, ParallaxCardContainer } from "react-card-parallax";

const App = () => {
  return (
    <ParallaxCardContainer style={{ minHeight: "100vh" }}>
      <ParallaxCard color="#FF5733" rangeMultiplier={0.3} scaleMultiplier={0.07}>
        <h1>Custom Parallax Card 1</h1>
      </ParallaxCard>
      <ParallaxCard color="#33A1FF">
        <h1>Parallax Card 2</h1>
      </ParallaxCard>
      <ParallaxCard color="#FFC300">
        <h1>Parallax Card 3</h1>
      </ParallaxCard>
    </ParallaxCardContainer>
  );
};

export default App;
Customization
Dynamic Range and Scale:
The rangeMultiplier and scaleMultiplier allow you to control the behavior of the parallax effect. For example:

Increasing the rangeMultiplier will make the scroll effect more pronounced.
Increasing the scaleMultiplier will make the scale change more significantly with scroll.
You can adjust these multipliers on a per-card basis to achieve different effects for each card.

Dependencies
react
framer-motion
@studio-freight/lenis (for smooth scrolling)
License
MIT License.

Contributing
If you'd like to contribute to this package, feel free to fork the repository and submit pull requests. Issues and feature requests can be opened on the GitHub repository.
