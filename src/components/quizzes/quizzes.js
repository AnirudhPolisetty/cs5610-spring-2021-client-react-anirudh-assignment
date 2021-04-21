import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from "../../services/quiz-service";

const Quizzes = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        quizzesService.findAllQuizzes()
            .then(res => setQuizzes(res));
    }, [])
    return (
        <div>
            <h2>Quizzes</h2>
            <ul className="list-group">
                {
                    quizzes.map(quiz => <li className="list-group-item" key={quiz._id}>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>{quiz.title}</Link>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`} className="btn btn-primary float-right">
                            Start
                        </Link>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}
                              className="btn btn-primary float-right">
                            Attempts :
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default Quizzes