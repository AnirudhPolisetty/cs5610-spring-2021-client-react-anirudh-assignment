import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import quizService from '../../services/quiz-service';

const QuizAttempts = () => {
    const {courseId, quizId} = useParams();
    const [attempts, setAttempts] = useState([]);
    useEffect(() => {
        quizService.getResults(quizId)
            .then(result => setAttempts(result));
    }, [quizId])
    return (
        <div>
            <div className='row'>
                <h2>Attempts :</h2>
            </div>
            <table className='table'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {
                    attempts.map((attempt) =>
                        <tr key={attempt._id}>
                            <td>
                                {attempt._id}
                            </td>
                            <td>
                                {attempt.score}
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default QuizAttempts;