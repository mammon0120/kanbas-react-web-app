import GradesControl from "./GradesControl";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiFilter } from "react-icons/ci";

export default function Grades() {
    return (
        <div id="wd-grades" className="container">
            <div className="row">
                <GradesControl />
            </div>

            <div id="wd-grades-search" className="row mb-4">
                <div id="wd-grades-search" className="col-6">
                    <label><strong>Student Names</strong></label>
                    <div className="d-flex">
                        <HiMagnifyingGlass className="gray position-absolute ms-3 mt-2 fs-4" />
                        <select className="form-select ps-5">
                            <option selected>Search Students</option>
                        </select>
                    </div>
                </div>

                <div id="wd-grades-search" className="col-6">
                    <label><strong>Assignment Names</strong></label>
                    <div className="d-flex">
                        <HiMagnifyingGlass className="gray position-absolute ms-3 mt-2 fs-4" />
                        <select className="form-select ps-5">
                            <option selected>Search Assignments</option>
                        </select>
                    </div>
                </div>
            </div>

            <div id="wd-grades-filter" className="d-flex mb-4">
                <CiFilter className="position-absolute ms-2 mt-2 fs-3" />
                <button className="btn btn-secondary ps-5">Apply Filters</button>
            </div>

            <div id="wd-grades-table">
                <table className="table table-bordered table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col" className="pb-3 text-start">Student Name</th>
                            <th scope="col">A1 SETUP<br />out of 100</th>
                            <th scope="col">A2 HTML<br />out of 100</th>
                            <th scope="col">A3 CSS<br />out of 100</th>
                            <th scope="col">A4 BOOTSTRAP<br />out of 100</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="text-start text-danger">Jane Adams</th>
                            <td>100%</td>
                            <td>96.67%</td>
                            <td>92.18%</td>
                            <td>66.22%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start text-danger">Christina Allen</th>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start text-danger">Samreen Ansari</th>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start text-danger">Han Bao</th>
                            <td>100%</td>
                            <td>100%</td>
                            <td>
                                <input
                                    type="text"
                                    className="border-1 rounded-2 border-danger w-50"
                                    value="88.03%"></input>
                            </td>
                            <td>98.99%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start text-danger">Mahi Sai Srinivas Bobbili</th>
                            <td>100%</td>
                            <td>96.67%</td>
                            <td>98.37%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start text-danger">Siran Cao</th>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>






        </div >










    );
}