import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, scored, questions, setQuestions}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question} questions={questions} setQuestions={setQuestions} scored={scored}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question} questions={questions} setQuestions={setQuestions} scored={scored}/>
            }
        </div>
    )
}

export default Question;