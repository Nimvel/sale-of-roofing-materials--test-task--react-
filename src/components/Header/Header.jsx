import style from './Header.module.css'

import house from '../../assets/house.svg';

const Header = () => {
    return (
            <div className={style.header}>
                <img className={style.house} src={house} alt="house" />
                <span>Kаталог</span>
                <span>Преимущества</span>
                <span>Примеры работ</span>
                <span>Mонтаж</span>
                <span>Отзывы</span>
                <span>Ответы на вопросы</span>
                <span>Контакты</span>
            </div>
    )
}

export default Header;