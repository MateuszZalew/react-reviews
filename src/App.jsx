import { useState } from "react";
import reviews from "./data";
import Person from "./Person";

const App = () => {
  const [index, setIndex] = useState([0]);

  const { name, job, image, text } = reviews[index];
  return (
    <>
      <main>
        <Person {...reviews[index]} />
      </main>
    </>
  );
};
export default App;
