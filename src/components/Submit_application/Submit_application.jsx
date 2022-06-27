import style from './Submit_application.module.css';
import close from '../../assets/close.svg';
import { NavLink } from 'react-router-dom';
import checkbox from '../../assets/checkbox.svg'
import empty from '../../assets/empty.svg'

const Submit_application = () => {
    return (
        <div className={style.submit_application_background}>
            <NavLink to='/*' className={style.close}>
                <img src={close} alt="close" />
            </NavLink>
            <div className={style.submit_application}>
                <div className={style.bold_text}><strong>Быстро<br />оставить заявку</strong></div>
                <div className={style.enter_number_text}>Введите номер, мы позвоним вам в<br />течение 10 минут в рабочее время</div>
                <div className={style.schedule} >Пн-Пт 9:00 - 18:00, Сб 10:00 - 18:00</div>
                <div className={style.enter_number}>Введите номер телефона</div>
                <input placeholder="+7(___)__-__-__" />
                <div className={style.call_me_button}>
                    <span className={style.call_me_button_text}>Позвоните мне</span>
                </div>
                <div className={style.checkbox}>
                    <img src={checkbox} />
                    <img src={empty} />
                    <span className={style.checkbox_text}>Нажимая кнопку вы соглашаетесь с условиями</span>
                    <span className={style.color_orange}>Политики конфиденциальности</span>
                </div>
            </div>
        </div>
    )
}

export default Submit_application;