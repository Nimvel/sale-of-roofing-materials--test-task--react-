import style from './Content.module.css'
import Properties from './Properties/Properties';
import Submit_application from './Submit_application/Submit_application';
import circles from '../../assets/circles.svg';
import cursor from '../../assets/cursor.svg';

const Content = () => {
    return (
        <div className={style.content}>

            <Properties />

            <div>
                <div className={style.sale_roof}>Продажа <strong>кровельных материалов</strong> в Тюмени и Тюменской области</div>
            </div>

            <div className={style.and_installation}>
                <img className={style.circles} src={circles} alt="circles"/>
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
                <img className={style.cursor} src={cursor} alt="cursor"/>
                <div className={style.answer}>
                    <strong>Ответьте на несколько<br/>вопросов и получите</strong> сметную<br/>стоимость и 3 подарка за<br/>экономию нашего времени
                </div>
            </div>

            <Submit_application />
            </div>
    )
}

export default Content;