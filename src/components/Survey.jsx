import SurveyForm from "./SurveyForm";
import AnswersList from "./AnswersList";

import { useState } from "react";

function Survey(props) {
  const [open, setOpen] = useState(false); //Ignore this state
  const [review, setReview] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [colour, setColour] = useState(0);
  const [timeSpent, setTimeSpent] = useState([]);
  const [id, setId] = useState();

    function prepareEdit(review) {
        setReview(review.review);
        setUsername(review.username);
        setEmail(review.email || '');
        setId(review.id);
        setTimeSpent(review.timeSpent || [])
        setColour(review.colour || 0)
    }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={props.reviews} setReviewobj={setReview} prepareEdit={prepareEdit} deleteReview={props.deleteReview} />
      </section>
      <section className="survey__form"><SurveyForm setTimeSpent={setTimeSpent} timeSpent={timeSpent} addReview={props.addReview} review={review}
       username={username} email={email} colour={colour} id={id} setReview={setReview} setUsername={setUsername} setEmail={setEmail} setColour={setColour} setId={setId} reviews={props.reviews} setReviews={props.setReviews} /></section>
    </main>
  );
}

export default Survey;
