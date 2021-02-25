import React from 'react'
import {Link} from "react-router-dom";


const CourseEditor = ({history}) =>
    <div>
        <h4>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left"></i>
            </Link>
            Course Editor
            <i onClick={() => history.goBack()}
               className="fas fa-times float-right"></i>
        </h4>
        <div className="wbdv-sticky-top wbdv-padding-5px">
            <div className="row">
                <div className="col-1">
                    <i className="fa fa-times fa-lg"></i>
                </div>

                <div className="col-3 d-none d-lg-block">
                    CS5610 - WebDev
                </div>

                <div className="col-8">
                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Build</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="wbdv-sticky-child wbdv-padding-5px">
            <div className="row modules">
                <div className="col-4">
                    <ul className="list-group">
                        <li className="list-group-item">
                            Module 1 - jQuery
                            <i className="pull-right fa fa-times"></i>
                        </li>
                        <li className="list-group-item active">
                            Module 2 - React
                            <i className="pull-right fa fa-times"></i>
                        </li>
                        <li className="list-group-item">
                            Module 3 - Redux
                            <i className="pull-right fa fa-times"></i>
                        </li>
                        <li className="list-group-item">
                            Module 4 - Native
                            <i className="pull-right fa fa-times"></i>
                        </li>
                        <li className="list-group-item">
                            Module 5 - Angular
                            <i className="pull-right fa fa-times"></i>
                        </li>
                        <li className="list-group-item">
                            Module 6 - Node
                            <i className="pull-right fa fa-times"></i>
                        </li>
                        <li className="list-group-item">
                            Module 7 - Mongo
                            <i className="pull-right fa fa-times"></i>
                        </li>
                        <li className="nav-item sub-module">
                            <a className="nav-link" href="#">
                                <i className="pull-right fa fa-plus fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-8 sub-pills">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

export default CourseEditor