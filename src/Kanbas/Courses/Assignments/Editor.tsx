export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" />
            <br /><br />
            <textarea id="wd-description" cols={40} rows={10} >
                The assignment is available online Submit a link to the landing page of
                your web application running on Netlify. The landing page should include the follwing: your full
                name and section links to the Kanbas application Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                {/* Complete on your own */}

                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>

                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">percentage</option>
                        </select>
                    </td>
                </tr>

                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>
                    </td>
                </tr>

                <br />
                <tr>
                    <td align="right" valign="top">
                        <label>Online Entry Option</label>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td>
                        <input type="checkbox" name="Online Entry Options" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />
                        <input type="checkbox" name="Online Entry Options" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />
                        <input type="checkbox" name="Online Entry Options" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                        <input type="checkbox" name="Online Entry Options" id="wd-student-annotaion" />
                        <label htmlFor="wd-student-annotaion">Student Annotation</label><br />
                        <input type="checkbox" name="Online Entry Options" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br />
                    </td>
                </tr>

                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to"> Assign to</label><br />
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top"></td>
                    <td>
                        <label htmlFor="wd-due-date"> Due</label><br />
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td>
                        <label htmlFor="wd-available-from"> Available from</label><br />
                        <input type="date" id="wd-available-from" value="2024-05-06" />
                    </td>
                    <td>
                        <label htmlFor="wd-available-until"> Until</label><br />
                        <input type="date" id="wd-available-until" value="2024-05-20" />
                    </td>
                </tr>
                <br />

            </table>

            <hr />

            <table>
                <tr>
                    
                    <td align="right" valign="top">
                        <button type="button">Cancel</button>
                    </td>
                    <td align="right" valign="top">
                        <button type="button">Save</button>
                    </td>
                </tr>

            </table>
        </div>
    );
}
