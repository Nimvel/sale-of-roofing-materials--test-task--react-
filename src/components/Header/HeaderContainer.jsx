import { connect } from 'react-redux';
import Header from './Header';

let mapStateToProps = (state) => {
    return {
        elements: state.header.elements
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)