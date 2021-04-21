import React, {useState, useEffect} from "react";

const MultipleChoiceQuestion = ({question, scored, questions, setQuestions}) => {
    const [answer, setAnswer] = useState("");
    //const [btn, setBtn] = useState(false);
    useEffect(() => {
        if (scored) {
            const notRequired = questions.filter(qu => qu._id !== question._id);
            const required = questions.find(qu => qu._id === question._id);
            required.answer = answer;
            const updatedQuestions = [...notRequired, required];
            setQuestions(updatedQuestions);
        }
    }, [scored])
    return(
        <div>
            <h4>
                {question.question}
                {
                    scored && question.correct === answer && <i className="fas fa-check text-success"></i>
                }
                {
                    scored && question.correct !== answer && <i className="fas fa-times text-danger"></i>
                }
            </h4>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <li className={`list-group-item
                            ${scored && choice === question.correct ? "list-group-item-success" : ""}
                            ${scored && answer !== question.correct && answer === choice ? 
                                "list-group-item-danger" : ""}`}>
                                <label>
                                    <input
                                        onChange={(event) => {
                                            setAnswer(event.target.value)}}
                                        type="radio"
                                        name={question._id}
                                        value={choice}
                                        disabled={scored}
                                    />
                                    {choice}
                                </label>
                                {
                                    scored && choice === question.correct &&
                                    <i className="fas fa-check text-success float-right"/>
                                }
                                {
                                    scored && answer !== question.correct && answer === choice &&
                                    <i className="fas fa-times text-danger float-right"/>
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <br/>
            <h6>Your answer: {answer}</h6>
            <br/>
        </div>
    )
}

export default MultipleChoiceQuestion;

