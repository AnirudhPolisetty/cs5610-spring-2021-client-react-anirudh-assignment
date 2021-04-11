import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from "../../services/quiz-service";


const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        // TODO: implement this in a separate service file
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div className="container-fluid">
            <h2>Quizzes</h2>
            <ul className="list-group">
                {
                    quizzes.map((quiz) => {
                        return (
                            <li className="list-group-item" key={quiz._id}>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>{quiz.title}</Link>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                      className="btn btn-primary float-right">
                                    Start
                                </Link>
                            </li>
                        )}
                    )
                }
            </ul>
        </div>
    )
}

export default QuizzesList;

