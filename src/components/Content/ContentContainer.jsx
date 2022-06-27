import { connect } from 'react-redux';
import { onEscClickActionCreator, onMenuClickActionCreator } from '../../redux/content-reducer';
import Content from './Content';

let mapStateToProps = (state) => {
    return {
        menu_icon: state.contentPage.menu_icon,
        esc_icon: state.contentPage.esc_icon,
        styleContent: state.contentPage.styleContent,
        isClicked: state.contentPage.isClicked
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMenuClick: () => dispatch(onMenuClickActionCreator()),
        onEscClick: () => dispatch(onEscClickActionCreator())
    }
}

export const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);