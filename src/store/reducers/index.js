import logo from "../../assets/images/logo.jpg";
import {
    CHECK_ALL_SURVEY_TABLE_ROWS,
    CHECK_SURVEY_TABLE_ROW,
    OPEN_SURVEY_TABLE_ROW,
    SORT_SURVEYS
} from "../constants/action-types";

const initialState = {
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
            checked: false,
            opened: false
        },
        {
            unique: 3,
            title: 'Another title',
            state: 'No state',
            viewed: 503,
            answered: 207,
            folder: 'folder',
            created: new Date(2017, 12, 21),
            valid_until: new Date(2018, 1, 24),
            created_by: logo,
            checked: false,
            opened: false
        },
        {
            unique: 4,
            title: 'Title',
            state: 'State',
            viewed: 803,
            answered: 112,
            folder: 'folder',
            created: new Date(2017, 12, 26),
            valid_until: new Date(2018, 1, 30),
            created_by: logo,
            checked: false,
            opened: false
        },
        {
            unique: 5,
            title: 'Title',
            state: 'State',
            viewed: 1121,
            answered: 14,
            folder: 'folder',
            created: new Date(2017, 12, 12),
            valid_until: new Date(2018, 1, 19),
            created_by: logo,
            checked: false,
            opened: false
        },
        {
            unique: 6,
            title: 'Title',
            state: 'State',
            viewed: 312000,
            answered: 165153,
            folder: 'folder',
            created: new Date(2017, 12, 9),
            valid_until: new Date(2018, 1, 28),
            created_by: logo,
            checked: false,
            opened: false
        },
        {
            unique: 7,
            title: 'Title',
            state: 'State',
            viewed: 20633,
            answered: 1180,
            folder: 'folder',
            created: new Date(2017, 12, 30),
            valid_until: new Date(2018, 1, 29),
            created_by: logo,
            checked: false,
            opened: false
        }
    ]
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHECK_ALL_SURVEY_TABLE_ROWS:
            const checkedAllSurveys = state.surveys.map(s => ({...s}));
            const allTrue = checkedAllSurveys.find(s => s.checked === false) === undefined;
            if (allTrue) {
                checkedAllSurveys.forEach(s => s.checked = false)
            } else {
                checkedAllSurveys.forEach(s => s.checked = true)
            }
            return { surveys: checkedAllSurveys };

        case CHECK_SURVEY_TABLE_ROW:
            const checkedSurveys = state.surveys.map(s => ({...s}));
            checkedSurveys.find(s => s.unique === action.payload.unique).checked
                = !checkedSurveys.find(s => s.unique === action.payload.unique).checked;
            return {surveys: checkedSurveys};

        case SORT_SURVEYS:
            const sortedSurveys = state.surveys.map(s => ({...s}));
            sortedSurveys.sort(action.payload);
            return {surveys: sortedSurveys};

        case OPEN_SURVEY_TABLE_ROW:
            const {unique} = action.payload;
            const newSurveys = state.surveys.map(s => (
                {
                    ...s,
                    opened: s.unique === unique && s.opened === false
                }));
            return {surveys: newSurveys};

        default:
            return state;
    }
}

export default rootReducer;