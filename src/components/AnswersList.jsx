import AnswersItem from "./AnswersItem";
import propTypes from "prop-types";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} answersList={answersList} setReviewobj={props.setReviewobj} key={i}/>
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: propTypes.array.isRequired,
};
