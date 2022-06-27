import style from '../Content/Content.module.css'
import viber from '../../assets/viber.svg';
import whatsapp from '../../assets/whatsapp.svg';
import telegram from '../../assets/telegram.svg';
import house from '../../assets/house.svg';

const Menu = () => {
    return (
        <div className={style.menu}>
            <div className={style.header_menu}>
                <img className={style.house} src={house} alt="house" />
                <div className={style.height}>Kаталог</div>
                <div className={style.height}>Преимущества</div>
                <div className={style.height}>Примеры работ</div>
                <div className={style.height}>Mонтаж</div>
                <div className={style.height}>Отзывы</div>
                <div className={style.height}>Ответы на вопросы</div>
            </div>


            <div className={style.contacts_menu}>
                <div className={style.roof}>
                    <p><strong>Кровельные и фасадные материалы</strong> в Тюмени<br/>и области. Профессиональный монтаж<br/>с 2010 года.</p>
                </div>
                <div className={style.download_catalog}>
                    <div className={style.round_background}>
                        <span className={style.color_green}>Pdf</span>
                    </div>
                    <span className={style.catalog}>Скачать прайс-каталог</span>
                </div>
                <div className={style.answer_online}>
                    <li> Отвечаем <strong>онлайн</strong></li>
                    <img className={style.messengers} src={viber} alt="viber" />
                    <img className={style.messengers} src={whatsapp} alt="whatsapp" />
                    <img className={style.messengers} src={telegram} alt="telegram" />
                </div>
            </div>
        </div>
    )
}

export default Menu;