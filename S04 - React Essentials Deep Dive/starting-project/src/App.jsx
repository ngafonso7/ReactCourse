import { Fragment } from "react";

import Header from "./components/Header/Header.jsx";

import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

const App = () => {

  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
        
      </main>
    </Fragment>
    // OR
    // <>
    //   <Header />
    //   <main>
    //     <section id="core-concepts">
    //       <h2>Core Concepts</h2>
    //       <ul>
    //         {CORE_CONCEPTS.map((conceptItem) => (
    //           <CoreConcept key={conceptItem.title} {...conceptItem} />
    //         ))}
    //       </ul>
    //     </section>
    //     <section id="examples">
    //       <h2>Examples</h2>
    //       <menu>
    //         <TabButton
    //           isSelected={selectedTopic == "components"}
    //           onSelect={() => handleSelect("components")}
    //         >
    //           Components
    //         </TabButton>
    //         <TabButton
    //           isSelected={selectedTopic == "jsx"}
    //           onSelect={() => handleSelect("jsx")}
    //         >
    //           JSX
    //         </TabButton>
    //         <TabButton
    //           isSelected={selectedTopic == "props"}
    //           onSelect={() => handleSelect("props")}
    //         >
    //           Props
    //         </TabButton>
    //         <TabButton
    //           isSelected={selectedTopic == "state"}
    //           onSelect={() => handleSelect("state")}
    //         >
    //           State
    //         </TabButton>
    //       </menu>
    //       {!selectedTopic && <p>Please select a topic.</p>}
    //       {selectedTopic && (
    //         <div id="tab-content">
    //           <h3>{EXAMPLES[selectedTopic].title}</h3>
    //           <p>{EXAMPLES[selectedTopic].description}</p>
    //           <pre>
    //             <code>{EXAMPLES[selectedTopic].code}</code>
    //           </pre>
    //         </div>
    //       )}
    //     </section>
    //   </main>
    // </>
  );
};

export default App;
