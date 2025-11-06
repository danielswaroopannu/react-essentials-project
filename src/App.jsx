import Header from "./components/Header/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

 let tabContent = <p>Please select a topic.</p>;

if (selectedTopic) {
  tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>{EXAMPLES[selectedTopic].code}</pre>
    </div>
  );
}
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((item, index) => (
              <CoreConcepts {...item} key={index} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")} isSelected={selectedTopic === "components"}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")} isSelected={selectedTopic === "jsx"}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")} isSelected={selectedTopic === "props"}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")} isSelected={selectedTopic === "state"}>State</TabButton>
          </menu>

          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
