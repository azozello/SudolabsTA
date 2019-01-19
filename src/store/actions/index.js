import {OPEN_SURVEY_TABLE_ROW, SORT_SURVEYS} from "../constants/action-types";


export function openSurveyTableRow(payload) {
    return { type: OPEN_SURVEY_TABLE_ROW, payload}
}

export function sortSurveys(payload) {
    return { type: SORT_SURVEYS, payload}
}