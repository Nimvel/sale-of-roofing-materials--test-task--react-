import style from './Contacts.module.css'

import logo from '../../assets/logo.png';
import viber from '../../assets/viber.svg';
import whatsapp from '../../assets/whatsapp.svg';
import telegram from '../../assets/telegram.svg';

const Contacts = () => {
    return (
        <div className={style.contacts}>

            <div className={style.roof}>
                <p><strong>Кровельные и фасадные материалы</strong> в Тюмени и области.</p>
                <p>Профессиональный монтаж с 2010 года.</p>
            </div>

            <div className={style.download_catalog}>
                <div className={style.round_background}>
                    <span className={style.color_green}>Pdf</span>
                </div>
                <span className={style.border_bottom}>Скачать прайс-каталог</span>
            </div>

            <div className={style.logo}>
                <img src={logo} alt="logo"/>
            </div>

            <div className={style.answer_online}>
                <li> Отвечаем онлайн</li>
                <img className={style.messengers} src={viber} alt="viber"/>
                <img className={style.messengers} src={whatsapp} alt="whatsapp"/>
                <img className={style.messengers} src={telegram} alt="telegram"/>
            </div>

            <div className={style.schedule}>
                <strong>Пн-Пт</strong> 9:00 - 18:00, <strong>Сб</strong> 10:00 - 18:00
                <div className={style.telephone_number}>8 (800) 222-54-60</div>
                <div className={style.call_me, style.border_bottom, style.color_green}>Позвоните мне</div>
            </div>

        </div>
    )
}

export default Contacts;