import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Survey from "./components/Survey";

export default function App() {

  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
    console.log(reviews);
  }

  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Survey reviews={reviews} addReview={addReview} setReviews={setReviews}/>
    </>
  );
}
