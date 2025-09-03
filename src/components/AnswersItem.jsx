// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, colour, timeSpent, review, id, email }, prepareEdit, deleteReview
}) {

  const handleEdit = () => {
    prepareEdit({username: username, colour: colour, timeSpent: timeSpent, review: review, id: id, email: email})
  }

  const handleDelete = () => {
    deleteReview(id)
  }

  return (
    <li id={id}>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <div>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </div>
        <em>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </em>
        <em>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </em>
      <button className="edit_button" id={id} onClick={handleEdit}>Edit</button>
      <button className="delete_button" onClick={handleDelete}>Delete</button>
      </article>
    </li>
  );
}
