import { FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Person = ({ name, image, job, text, goPrevious, goNext, getRandom }) => {
  const prevPerson = () => {
    goPrevious();
  };

  const nextPerson = () => {
    goNext();
  };

  const getRand = () => {
    getRandom();
  };
  return (
    <section className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h2 className="author">{name}</h2>
      <h3 className="job">{job}</h3>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaArrowLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaArrowRight />
        </button>
      </div>
      <button className="btn" type="button" onClick={getRand}>
        Surprise Me
      </button>
    </section>
  );
};

export default Person;
