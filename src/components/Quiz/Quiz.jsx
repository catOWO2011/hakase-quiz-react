import { useState } from "react";
import Question from "../Question/Question";

const data = [{
  title: 'Quiz Title',
}];
export default function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0)
  return (
    <div>
      <h2>Title Quiz</h2>
      
      <button>Check</button>
    </div>
  );
}