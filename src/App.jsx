import { useState } from "react";
import reviews from "./data";
import Person from "./Person";

const App = () => {
  const [index, setIndex] = useState(0);

  const goPrevious = () => {
    setIndex((prevState) => {
      if (prevState === 0) {
        return reviews.length - 1;
      } else {
        return prevState - 1;
      }
    });
  };

  const goNext = () => {
    setIndex((prevState) => {
      if (prevState === reviews.length - 1) {
        return 0;
      } else {
        return prevState + 1;
      }
    });
  };
  const { name, job, image, text } = reviews[index];
  return (
    <>
      <main>
        <Person {...reviews[index]} goPrevious={goPrevious} goNext={goNext} />
      </main>
    </>
  );
};
export default App;
