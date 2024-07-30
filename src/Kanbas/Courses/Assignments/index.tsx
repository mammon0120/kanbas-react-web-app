import AssignmentControl from "./AssignmentControl";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButton from "./AssignmentControlButton";
import LessControlButtons from "./LessConstrolButton";
import LeftButton from "./LeftButton";
import { Link, useParams, useLocation } from "react-router-dom";
import * as db from "../../Database";
import { addAssignment, deleteAssignment, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function Assignments() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    return (
        <div id="wd-assignments">
            <AssignmentControl />
            <ul className="list-group rounded-0">
                <li className="wd-assignments list-group-item p-0 mb-5 fs-5 wd-border-gray">
                    <div className="wd-title p-3 ps-2 wd-bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButton />
                    </div>

                    <ul className="wd-assignments list-group rounded-0">
                        {assignments.filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li id="wd-assignment-GreenBorder" key={assignment._id}
                                    className="wd-assignment-list list-group-item p-3 ps-1">
                                    <div className="row align-items-center">
                                        <div className="col-2">
                                            <LeftButton />
                                        </div>
                                        <div className="col-8">
                                            <Link to={`${pathname}/${assignment._id}`}
                                                className="wd-assignment-link text-dark text-decoration-none"
                                            >
                                                <strong>{assignment.title}</strong>
                                            </Link>
                                            <div className="wd-assignment-details">
                                                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.available}
                                                | <strong>Due</strong> {assignment.due} | {assignment.points} pts
                                            </div>
                                        </div>
                                        <div className="col-2 text-nowrap">
                                            <LessControlButtons />
                                            <FaTrash
                                                className="text-danger me-2 mb-1"
                                                data-bs-toggle="modal" data-bs-target={`#delete-assignment-dialog-${assignment._id}`} />
                                            <div id={`delete-assignment-dialog-${assignment._id}`} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title">Confirm Deletion</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            Are you sure you want to remove this assignment?
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                            <button type="button" className="btn btn-danger"
                                                                onClick={() => dispatch(deleteAssignment(assignment._id))}
                                                                data-bs-dismiss="modal">Yes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
