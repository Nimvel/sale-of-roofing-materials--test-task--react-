import { connect } from 'react-redux';
import { checkboxClickActionCreator} from '../../redux/submit-application-reducer';
import SubmitApplication from './SubmitApplication';

let mapStateToProps = (state) => {
    return {
        checkboxStyle: state.SubmitApplicationBlock.checkboxStyle
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        checkbox_click: () => dispatch(checkboxClickActionCreator())
    }
}

export const SubmitApplicationContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitApplication);