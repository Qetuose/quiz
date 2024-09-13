import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, index, answer, newAnswer } = useQuiz();

  const hasAnswerd = answer !== null;
  return (
    <div className="options">
      {questions[index].options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswerd
              ? i === questions[index].correctOption
                ? "correct"
                : "wrong"
              : ""
          } `}
          key={option}
          disabled={hasAnswerd}
          onClick={() => newAnswer(i)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
