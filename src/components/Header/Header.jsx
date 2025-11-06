import React from 'react'
import coreConceptsImg from "../../assets/react-core-concepts.png";
import "./Header.css"
const reactDescriptions = ["Fundamentals", "Crucial", "Core"];
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function Header() {
  const description = reactDescriptions[getRandomIndex(reactDescriptions)];
  return (
    <header>
      <img src={coreConceptsImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header