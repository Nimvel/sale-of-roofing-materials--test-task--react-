let initialState = {
    menu_icon: 'menu_icon',
    esc_icon: 'hidden',
    styleContent: 'content',
    isClicked: false,

    onePropertyStyle: 'one_property',
    propertyStyle: 'hidden',

    propertyClicked: false,
}

let ON_MENU_CLICK = 'ON_MENU_CLICK';
let ON_ESC_CLICK = 'ON_ESC_CLICK';
let ON_PROPERTY_ADD_CLICK = 'ON_PROPERTY_ADD_CLICK';

const concontentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_MENU_CLICK:
            return {
                ...state,
                menu_icon: 'hidden',
                esc_icon: 'esc_icon',
                styleContent: 'hidden',
                isClicked: true
            }

        case ON_ESC_CLICK:
            return {
                ...state,
                menu_icon: 'menu_icon',
                esc_icon: 'hidden',
                styleContent: 'content',
                isClicked: false
            }

        case ON_PROPERTY_ADD_CLICK:
            return {
                ...state,
                onePropertyStyle: 'hidden',
                propertyStyle: 'properties',
                propertyClicked: true
            }

        default:
            return state;
    }
}

export const onMenuClickActionCreator = () => ({ type: ON_MENU_CLICK })
export const onEscClickActionCreator = () => ({ type: ON_ESC_CLICK })
export const onPropertyAddClickActionCreator = () => ({ type: ON_PROPERTY_ADD_CLICK })

export default concontentReducer;