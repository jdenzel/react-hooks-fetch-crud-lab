import React from "react";
import url from "../constants";

function QuestionItem({ question, onDeleteClick }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleAnswerChange = async (e, id) => {
    console.log(e.target.value)
    const config = { 
    method: "PATCH", 
    headers: { "Content-Type": "application/json"},
    correctIndex: e
  }
    const response = await fetch(`${url.questions}/${id}`)
   }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={(e,id) =>handleAnswerChange(e, id)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => onDeleteClick(id)} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
