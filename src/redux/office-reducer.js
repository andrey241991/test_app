const ADD_OFFICE = 'ADD_OFFICE';
const UPDATE_OFFICE = 'UPDATE_OFFICE';
const DELETE_OFFICE = 'UPDATE_OFFICE';
const SET_OFFICES = 'SET_OFFICES';

let initialState = {
    offices: [
        {
            id: '0',
            adress: ['Thames Valley Park', 'Reading',
                'Berkshire, England RG6 1WG', 'United Kingdom'
            ],
            phone: '+ 1(425) 882 - 8080',
            email: 'msft@microsoft.com',
            fax: '+44 (0)87 0602 0100'
        },
        {
            id: '1',
            adress: ['Thames Valley Park', 'Reading',
                'Berkshire, England RG6 1WG', 'United Kingdom'
            ],
            phone: '+ 1(425) 882 - 8080',
        },
        {
            id: '2',
            adress: ['Thames Valley Park', 'Reading',
                'Berkshire, England RG6 1WG', 'United Kingdom'
            ],
            phone: '+ 1(425) 882 - 8080',
            email: 'msft@microsoft.com',
        }
    ]
}


const officeReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_OFFICES:
            let offices = action.offices;
            return {
                offices: offices,
            }
        case ADD_OFFICE:
            let newMessage = { message: state.newMessageBody };
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, newMessage],
            }
        case UPDATE_OFFICE:
            return {
                ...state,
                newMessageBody: action.newMessageBody
            }
        case DELETE_OFFICE:
            return {
                ...state,
                newMessageBody: action.newMessageBody
            }
        default:
            return state;
    }

}

export const addOfficeActionCreator = () => ({ type: ADD_OFFICE })
export const updateOfficeActionCreator = (id) => ({ type: UPDATE_OFFICE, Id: id })
export const deleteOfficeActionCreator = (id) => ({ type: DELETE_OFFICE, Id: id })
export const setOfficesActionCreator = (offices) => ({ type: SET_OFFICES, offices: offices })

export default officeReducer;