import { useState } from "react";
import reviews from "./data";
import Person from "./Person";

const App = () => {
  const [index, setIndex] = useState(0);

  const goPrevious = () => {
    setIndex((prevState) => {
      const newIndex = (prevState - 1 + reviews.length) % reviews.length;
      return newIndex;
    });
  };

  const goNext = () => {
    setIndex((prevState) => {
      const newIndex = (prevState + 1) % reviews.length;
      return newIndex;
    });
  };

  const getRandom = () => {
    const randomNum = Math.floor(Math.random() * reviews.length);
    setIndex((prevState) => {
      if (randomNum === prevState && randomNum !== reviews.length - 1) {
        return randomNum + 1;
      } else if (randomNum === prevState && randomNum === reviews.length - 1) {
        return randomNum - 1;
      } else {
        return randomNum;
      }
    });
  };
  return (
    <>
      <main>
        <Person
          {...reviews[index]}
          goPrevious={goPrevious}
          goNext={goNext}
          getRandom={getRandom}
        />
      </main>
    </>
  );
};
export default App;
