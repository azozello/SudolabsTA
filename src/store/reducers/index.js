import logo from "../../assets/images/logo.jpg";

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

function rootReducer(state = initialState, action) {
    switch (action) {
        default:
            return state;
    }
}

export default rootReducer;