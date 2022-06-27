import style from './Header.module.css'

import house from '../../assets/house.svg';

const Header = ({ elements }) => {
    let headerElements = elements.map(e => <span className={style.element} key={e.id}>{e.name}</span>)
    return (
        <div className={style.header}>
            <img className={style.house} src={house} alt="house" />
            {headerElements}
        </div>
    )
}

export default Header;