import React from 'react'
import CourseManager from "./components/course-manager/course-manager";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor/course-editor";
import UniversityTable from "./components/university-table/university-table";
import Quizzes from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true} component={Home}/>
                <Switch>
                    <Route path={[
                        "/courses/:layout/edit/:courseId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                    ]} exact={true} render={(props) => <CourseEditor {...props}/>}/>
                    <Route path='/courses/:courseId/quizzes' exact={true}>
                        <Quizzes/>
                    </Route>
                    <Route path='/courses/:courseId/quizzes/:quizId' exact={true}>
                        <Quiz/>
                    </Route>
                    <Route path="/universities" component={UniversityTable}/>
                    <Route path="/courses" component={CourseManager}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
    }

export default App;
