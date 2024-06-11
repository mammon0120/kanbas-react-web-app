import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function AssignmentControl() {
    return (
        <div id="wd-assignments-control" className="mb-5">
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
            <button id="wd-add-assignment-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>

            <div id="wd-assignment-search-box" className="d-flex">

                <HiMagnifyingGlass className="gray position-absolute ms-3 mt-2 fs-3" />

                <div>
                    <input
                        type="text"
                        className="form-control button-height ps-5 fs-5"
                        id="wd-search-assignment"
                        placeholder="Search..."
                    />
                </div>
            </div>
        </div>

    );
}