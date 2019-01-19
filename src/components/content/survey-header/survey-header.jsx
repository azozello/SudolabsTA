import React from 'react';
import './survey-header.scss';


function SurveyHeader() {
    return (
        <div className="col-11 survey-header-container">
            <div className="row justify-content-between">
                <div className="col-auto">
                    <p className="survey-link-header">
                        Surveys
                    </p>
                </div>

                <div className="col-auto">
                    <button className="btn new-survey-button">
                        New Survey
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SurveyHeader