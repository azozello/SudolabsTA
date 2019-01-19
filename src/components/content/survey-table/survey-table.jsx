import React from "react";
import './survey-table.scss';


function SurveyTable(props) {
    return (
        <div className="survey-table">
            {props.children}
        </div>
    );
}

export default SurveyTable