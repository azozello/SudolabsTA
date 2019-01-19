import React from 'react';
import './content.scss';
import logo from '../../assets/images/logo.jpg';
import SurveyHeader from "./survey-header/survey-header";
import SurveyTable from "./survey-table/survey-table";
import SurveyTableHeader from "./survey-table/survey-table-header/survey-table-header";
import SurveyTableRow from "./survey-table/survey-table-row/survey-table-row";


class Content extends React.Component {
    state = {
        surveys: [
            {
                unique: 1,
                title: 'Some title',
                state: 'Some state',
                viewed: 1488,
                answered: 228,
                folder: 'root',
                created: new Date(2017, 12, 25),
                valid_until: new Date(2018, 1, 27),
                created_by: logo,
                opened: true
            },
            {
                unique: 1,
                title: 'Another title',
                state: 'No state',
                viewed: 503,
                answered: 207,
                folder: 'folder',
                created: new Date(2017, 12, 21),
                valid_until: new Date(2018, 1, 24),
                created_by: logo,
                opened: false
            },
            {
                unique: 1,
                title: 'Title',
                state: 'State',
                viewed: 803,
                answered: 112,
                folder: 'folder',
                created: new Date(2017, 12, 26),
                valid_until: new Date(2018, 1, 30),
                created_by: logo,
                opened: false
            },
            {
                unique: 1,
                title: 'Title',
                state: 'State',
                viewed: 1121,
                answered: 14,
                folder: 'folder',
                created: new Date(2017, 12, 12),
                valid_until: new Date(2018, 1, 19),
                created_by: logo,
                opened: false
            },
            {
                unique: 1,
                title: 'Title',
                state: 'State',
                viewed: 312000,
                answered: 165153,
                folder: 'folder',
                created: new Date(2017, 12, 9),
                valid_until: new Date(2018, 1, 28),
                created_by: logo,
                opened: false
            },
            {
                unique: 1,
                title: 'Title',
                state: 'State',
                viewed: 20633,
                answered: 1180,
                folder: 'folder',
                created: new Date(2017, 12, 30),
                valid_until: new Date(2018, 1, 29),
                created_by: logo,
                opened: false
            }
        ]
    };

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

export default Content