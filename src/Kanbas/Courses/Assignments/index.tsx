import AssignmentControl from "./ AssignmentControl";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButton from "./AssignmentControlButton";
import LessControlButtons from "./LessConstrolButton";
import LeftButton from "./LeftButton";
import './index.css'

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentControl />

            <ul className="list-group rounded-0">
                <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButton />
                    </div>

                    <ul className="wd-assignments list-group rounded-0">
                        <li id="wd-assignment-GreenBorder"
                        className="wd-assignment-list list-group-item p-3 ps-1">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <LeftButton />
                                </div>
                                <div className="col-8">
                                    <a className="wd-assignment-link 
                                    text-dark text-decoration-none"
                                        href="#/Kanbas/Courses/1234/Assignments/123">
                                        <strong>A1</strong>
                                    </a>
                                    <div className="wd-assignment-details">
                                        <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am
                                        | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                    </div>
                                </div>
                                <div className="col-2">
                                    <LessControlButtons />
                                </div>
                            </div>
                        </li>


                        <li id="wd-assignment-GreenBorder"
                        className="wd-assignment-list list-group-item p-3 ps-1">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <LeftButton />
                                </div>
                                <div className="col-8">
                                    <a className="wd-assignment-link
                                    text-dark text-decoration-none"
                                        href="#/Kanbas/Courses/1234/Assignments/123">
                                        <strong>A2</strong>
                                    </a>
                                    <div className="wd-assignment-details">
                                        <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am
                                        | <strong>Due</strong> May 20 at 11:59pm | 100 pts
                                    </div>
                                </div>
                                <div className="col-2">
                                    <LessControlButtons />
                                </div>
                            </div>
                        </li>

                        <li id="wd-assignment-GreenBorder"
                        className="wd-assignment-list list-group-item p-3 ps-1">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <LeftButton />
                                </div>
                                <div className="col-8">
                                    <a className="wd-assignment-link
                                    text-dark text-decoration-none"
                                        href="#/Kanbas/Courses/1234/Assignments/123">
                                        <strong>A3</strong>
                                    </a>
                                    <div className="wd-assignment-details">
                                        <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am
                                        | <strong>Due</strong> May 27 at 11:59pm | 100 pts
                                    </div>
                                </div>
                                <div className="col-2">
                                    <LessControlButtons />
                                </div>
                            </div>
                        </li>
                    </ul>



                </li>
            </ul>




        </div>
    );
}
