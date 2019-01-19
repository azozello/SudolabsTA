import React from "react";
import '../survey-table.scss';

function SurveyTableHeader() {
    return (
        <div className="survey-table-header">
            <div>Title</div>
            <div>State</div>
            <div>Viewed</div>
            <div>Andsvere</div>
            <div>Folder</div>
            <div>Created</div>
            <div>Valid until</div>
            <div>Created by</div>
        </div>
    );
}

export default SurveyTableHeader