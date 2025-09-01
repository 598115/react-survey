import SurveyForm from "./SurveyForm";
import AnswersList from "./AnswersList";

import { useState } from "react";

function Survey(props) {
  const [open, setOpen] = useState(false); //Ignore this state
  const [review, setReview] = useState({review: '', username: '', email: '', colour: 0, timeSpent: [], Id: 0});

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={props.reviews} setReviewobj={setReview} />
      </section>
      <section className="survey__form"><SurveyForm addReview={props.addReview} reviewobj={review} setReviewobj={setReview}/></section>
    </main>
  );
}

export default Survey;
