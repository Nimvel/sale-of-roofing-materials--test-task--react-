import style from './Content.module.css'
import Properties from './Properties/Properties';
import Menu from '../Header/Menu';

import circles from '../../assets/circles.svg';
import cursor from '../../assets/cursor.svg';

import { NavLink, Route, Routes } from 'react-router-dom';
import { SubmitApplicationContainer } from '../Submit_application/SubmitApplicationContainer';
import Prop from './Properties/Prop';

const Content = ({ menu_icon, esc_icon, styleContent, onePropertyStyle, propertyStyle, onMenuClick, onEscClick, onAddClick }) => {
    let showMenu = () => {
        onMenuClick();
    }

    let hiddenMenu = () => {
        onEscClick();
    }

    return (
        <div className={style.all_content}>
        {/* <div> */}
            <NavLink to='/menu' onClick={showMenu} className={style[menu_icon]} />
            <NavLink to='/*' onClick={hiddenMenu} className={style[esc_icon]} />
            <div className={style[styleContent]}>
                <Properties propertyStyle={propertyStyle} />
                <Prop onePropertyStyle={onePropertyStyle} onAddClick={onAddClick} />
                <div>
                    <div className={style.sale_roof}>Продажа <strong>кровельных материалов</strong> в Тюмени и Тюменской области</div>
                </div>

                <div className={style.and_installation}>
                    <img className={style.circles} src={circles} alt="circles" />
                    и монтаж под ключ
                </div>

                <div className={style.buttons}>
                    <div className={style.green_button}>
                        <p className={style.green_button_text}>Рассчитать стоимость материалов и монтажа</p>
                    </div>
                    <div className={style.orange_button}>
                        <p className={style.orange_button_text}>Записаться на просмотр объектов</p>
                    </div>
                </div>
                <div className={style.answer_questions}>
                    <img className={style.cursor} src={cursor} alt="cursor" />
                    <div className={style.answer}>
                        <strong>Ответьте на несколько<br />вопросов и получите</strong> сметную<br />стоимость и 3 подарка за<br />экономию нашего времени
                    </div>
                    <div className={style.mini_answer}>
                        <strong>Ответьте на несколько вопросов<br />и получите</strong> сметную стоимость и 3 подарка<br />за экономию нашего времени
                    </div>
                </div>
            </div>
            <Routes>
                    <Route path='/submit_application' element={<SubmitApplicationContainer />} />
                    <Route path='/menu' element={<Menu />} />
                </Routes>
        </div>

    )
}

export default Content;