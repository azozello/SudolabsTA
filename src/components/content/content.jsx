import React from 'react';
import './content.scss';
import SurveyHeader from "./survey-header/survey-header";
import SurveyTable from "./survey-table/survey-table";
import SurveyTableHeader from "./survey-table/survey-table-header/survey-table-header";
import SurveyTableRow from "./survey-table/survey-table-row/survey-table-row";
import store from "../../store";


class ContentComponent extends React.Component {
    state = {
        surveys: []
    };

    constructor() {
        super();
        this.state = store.getState();
    }

    render() {
        return (
            <div className="col-11 content pb-5">
                <div className="row justify-content-center">
                    <SurveyHeader/>

                    <div className="col-11 mt-4 pl-0 pr-0">
                        <SurveyTable>
                            <div>Chk</div>
                            <SurveyTableHeader/>
                        </SurveyTable>

                        {this.state.surveys.map(survey =>
                            <SurveyTable>
                                <SurveyTableRow key={survey.unicode} survey={survey}/>
                            </SurveyTable>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentComponent