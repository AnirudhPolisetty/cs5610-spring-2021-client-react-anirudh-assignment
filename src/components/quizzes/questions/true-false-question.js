import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")
    const [btn, setBtn] = useState(false);
    const choices = [
        "true",
        "false"
    ];
    return(
        <div>
            <h4>
                {question.question}
                {
                    btn && question.correct === answer && <i className="fas fa-check text-success"></i>
                }
                {
                    btn && question.correct !== answer && <i className="fas fa-times text-danger"></i>
                }
            </h4>
            <ul className="list-group">
                {
                    choices.map((choice) => {
                        return (
                            <li className={`list-group-item
                                ${btn && choice === question.correct ? "list-group-item-success" : ""}
                                ${btn && answer !== question.correct && answer === choice ?
                                "list-group-item-danger" : ""}`}>
                                <label>
                                    <input
                                        onChange={(event) => {
                                            setAnswer(event.target.value)}}
                                        type="radio"
                                        name={question._id}
                                        value={choice}
                                        disabled={btn}
                                    />
                                    {choice}
                                </label>
                                {
                                    btn && choice === question.correct &&
                                    <i className="fas fa-check text-success float-right"/>
                                }
                                {
                                    btn && answer !== question.correct && answer === choice &&
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
            <button onClick={() => setBtn(true)} className="btn btn-success" disabled={btn}>
                Grade
            </button>
        </div>
    )
}

export default TrueFalseQuestion;

