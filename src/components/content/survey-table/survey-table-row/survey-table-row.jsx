import React from "react";
import '../survey-table.scss';
import SurveyTableRowItem from "./survey-table-row-item/survey-table-row-item";
import Dots from "../../../shared/dots/dots";
import SurveyTableRowShadow from "./survey-table-row-shadow/survey-table-row-shadow";


function SurveyTableRow(props) {
    return (
        <React.Fragment>
            <div></div>
            <SurveyTableRowItem survey={props.survey}/>
            <Dots/>

            <div></div>
            <SurveyTableRowShadow opened={props.survey.opened}/>
            <div></div>
        </React.Fragment>
    );
}

export default SurveyTableRow