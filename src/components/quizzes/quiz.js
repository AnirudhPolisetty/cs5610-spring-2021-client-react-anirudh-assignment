import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import Question from "./questions/question";
import questionService from "../../services/question-service";
import quizService, {getResults} from "../../services/quiz-service";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [quiz, setQuiz] = useState({});
    const [scored, setScored] = useState(false);
    const [attempts, setAttempts] = useState({})

    useEffect(() => {
        // TODO: move this to a service file
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions));
        quizService.findQuizById(quizId)
            .then(quiz => setQuiz(quiz));
        console.log(quiz._id)
        console.log(questions)
        if (scored) {quizService.submitQuiz(quiz._id, questions).then(res => setAttempts(res));}
    }, [quizId, scored])

    return (
        <div className="container-fluid">
            {scored && <Link className='btn btn-primary'
                             to={`/courses/${courseId}/quizzes/${quizId}/attempts`}>Attempts</Link>}
            <h2>{quiz.title}</h2>
            <ul>
                {
                    questions.map(question =>
                        <div key={question._id}>
                            <Question question={question} questions={questions} setQuestions={setQuestions}
                                      scored={scored}/>
                        </div>
                    )
                }
            </ul>
            <div>
                <button onClick={() => setScored(true)} disabled={scored} className="btn btn-success">
                    Submit Quiz
                </button>
                {
                    scored &&
                    <div>
                        <p>Score : {attempts.score}</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default Quiz