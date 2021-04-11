import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";
import questionService from "../../services/question-service";
import quizService from "../../services/quiz-service";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [quiz, setQuiz] = useState({});
    useEffect(() => {
        // TODO: move this to a service file
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions));
        quizService.findQuizById(quizId)
            .then(quiz => setQuiz(quiz));
    }, [quizId])

    return (
        <div className="container-fluid">
            <h2>{quiz.title}</h2>
            <ul>
                {
                    questions.map(question =>
                        <div key={question._id}>
                            <Question question={question}/>
                        </div>
                    )
                }
            </ul>
        </div>
    );
}

export default Quiz