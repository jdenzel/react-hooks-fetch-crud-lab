import React from "react";
import QuestionItem from "./QuestionItem";
import url from "../constants"

function QuestionList( {questions, setQuestions } ) {
  const handleDeleteClick = async (id) => {
    const config = {method: "DELETE"}
    const response = await fetch(`${url.questions}/${id}` , config)
    const filteredQuestions = questions.filter(question => question.id !== id)
    setQuestions(filteredQuestions)
  }
  
  const handleAnswerChange = async (e, id) => {
    console.log(e.target.value)
    const config = { 
    method: "PATCH", 
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({correctIndex: e})
  }
    const response = await fetch(`${url.questions}/${id}`)
    .then(r => r.json())

    const updatedQuestions = questions.map(question =>  {
      if(question.id ===id){
      return response
    } else  {
      return updatedQuestions
    }
   })
   setQuestions(updatedQuestions)
  }

  const questionMap =  questions.map((question) => {
    return <QuestionItem key={question.id} onDeleteClick={handleDeleteClick}  question={question} />
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionMap}</ul>
    </section>
  ); 
}

export default QuestionList;