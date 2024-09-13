import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { answer, index, numQuestions, handleButton } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => handleButton("nextQuestion")}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => handleButton("finish")}>
        Finish
      </button>
    );
}

export default NextButton;
