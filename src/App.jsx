import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

import Header from "./components/Header";
import Survey from "./components/Survey";

export default function App() {

  const [reviews, setReviews] = useState([]);

    function addReview(newReview) {
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(addedReview => setReviews(prev => [...prev, addedReview]));
  }

  function deleteReview(id) {
  fetch(`http://localhost:3000/reviews/${id}`, {
    method: 'DELETE'
  }).then(() =>
    setReviews(prev => prev.filter(r => r.id !== id))
  );
}

  useEffect(() => {
  fetch('http://localhost:3000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  }, []);

  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Survey reviews={reviews} addReview={addReview} setReviews={setReviews} deleteReview={deleteReview}/>
    </>
  );
}
