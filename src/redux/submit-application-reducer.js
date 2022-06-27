let initialState = {
    checkboxStyle: 'checkbox_off',
    isClicked: false
}

let CHECKBOX_CLICK = 'CHECKBOX_CLICK';

const submitApplicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKBOX_CLICK:
            if (state.isClicked) {
                return {
                    ...state,
                    checkboxStyle: 'checkbox_on',
                    isClicked: false
                }
            }
            else {
                return {
                    ...state,
                    checkboxStyle: 'checkbox_off',
                    isClicked: true
                }
            }


        default:
            return state;
    }
}

export const checkboxClickActionCreator = () => ({type: CHECKBOX_CLICK});

export default submitApplicationReducer;