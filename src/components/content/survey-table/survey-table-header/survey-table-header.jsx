import React from "react";
import '../survey-table.scss';
import store from "../../../../store";
import {sortSurveys} from "../../../../store/actions";


const compareByTitle = (a,b) => {
    if (a.title < b.title)
        return -1;
    if (a.title > b.title)
        return 1;
    return 0;
};

const compareByState = (a,b) => {
    if (a.state < b.state)
        return -1;
    if (a.state > b.state)
        return 1;
    return 0;
};

const compareByViewed = (a,b) => {
    if (a.viewed < b.viewed)
        return -1;
    if (a.viewed > b.viewed)
        return 1;
    return 0;
};

const compareByAnswered = (a,b) => {
    if (a.answered < b.answered)
        return -1;
    if (a.answered > b.answered)
        return 1;
    return 0;
};

const compareByFolder = (a,b) => {
    if (a.folder < b.folder)
        return -1;
    if (a.folder > b.folder)
        return 1;
    return 0;
};

const compareByCreated = (a,b) => {
    if (a.created < b.created)
        return -1;
    if (a.created > b.created)
        return 1;
    return 0;
};

const compareByValid = (a,b) => {
    if (a.valid_until < b.valid_until)
        return -1;
    if (a.valid_until > b.valid_until)
        return 1;
    return 0;
};


const sortByTitle = () => {
    store.dispatch(sortSurveys(compareByTitle));
};

const sortByState = () => {
    store.dispatch(sortSurveys(compareByState));
};

const sortByViewed = () => {
    store.dispatch(sortSurveys(compareByViewed));
};

const sortByAnswered = () => {
    store.dispatch(sortSurveys(compareByAnswered));
};

const sortByFolder = () => {
    store.dispatch(sortSurveys(compareByFolder));
};

const sortByCreated = () => {
    store.dispatch(sortSurveys(compareByCreated));
};

const sortByValid = () => {
    store.dispatch(sortSurveys(compareByValid));
};

function SurveyTableHeader() {
    return (
        <div className="survey-table-header">
            <div onClick={sortByTitle} className={'ml-3'}>Title</div>
            <div onClick={sortByState}>State</div>
            <div onClick={sortByViewed}>Viewed</div>
            <div onClick={sortByAnswered}>Answered</div>
            <div onClick={sortByFolder}>Folder</div>
            <div onClick={sortByCreated}>Created</div>
            <div onClick={sortByValid}>Valid until</div>
            <div>Created by</div>
        </div>
    );
}

export default SurveyTableHeader