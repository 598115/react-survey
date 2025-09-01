import PropTypes from 'prop-types';
import { useState } from "react";

function SurveyForm(props) {

  const [review, setReview] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [colour, setColour] = useState(0);
  const [timeSpent, setTimeSpent] = useState([]);
  const [Id, setId] = useState(0);

  const handleTimeSpent = (value) => {
  setTimeSpent(prev =>
    prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value] 
  );
  console.log("Time spent: ", timeSpent)
};


  const handleSubmit = (e) => {
    e.preventDefault();
    props.addReview({
      review,
      username,
      email,
      colour,
      timeSpent,
      Id
    });
    setReview("");
    setUsername("");
    setEmail("");
    setColour(0);
    setId(Id + 1);
    setTimeSpent([]);
    document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
    document.querySelectorAll('input[type=radio]').forEach(el => el.checked = false);
  };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <input type="radio" id="colour1" name="duck_colour" value={colour} onChange={() => setColour(1)}/>
        <label htmlFor="colour1">1</label>
        <input type="radio" id="colour2" name="duck_colour" value={colour} onChange={() => setColour(2)}/>
        <label htmlFor="colour2">2</label>
        <input type="radio" id="colour3" name="duck_colour" value={colour} onChange={() => setColour(3)}/>
        <label htmlFor="colour3">3</label>
        <input type="radio" id="colour4" name="duck_colour" value={colour} onChange={() => setColour(4)}/>
        <label htmlFor="colour4">4</label>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <input type="checkbox" id="time1" name="duck_time_swim" value={review} onChange={() => handleTimeSpent("swimming")}/>
        <label htmlFor="time1">Swimming</label>
        <input type="checkbox" id="time2" name="duck_time_bath" value={review} onChange={() => handleTimeSpent("bathing")}/>
        <label htmlFor="time2">Bathing</label>
        <input type="checkbox" id="time3" name="duck_time_chat" value={review} onChange={() => handleTimeSpent("chatting")}/>
        <label htmlFor="time3">Chatting</label>
        <input type="checkbox" id="time4" name="duck_time_notime" value={review} onChange={() => handleTimeSpent("noTime")}/>
        <label htmlFor="time4">I dont like to</label>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="reviewEle" cols="30" rows="10" value={review} onChange={(e) => setReview(e.target.value)}/>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default SurveyForm;

SurveyForm.propTypes = {
  addReview: PropTypes.func.isRequired,
};
