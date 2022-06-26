// import style from './Properties.module.css'
import style from '../Content.module.css'

const Properties = () => {
    return (
            <div className={style.properties}>
                <div><strong>Гарантия от 50 лет</strong> на материалы и 5 лет на монтаж</div>
                <div><strong>Замер, монтажный проект</strong> и<br/>еще 4 услуги бесплатно</div>
                <div><strong>Сметы<br/>точны</strong> до копейки </div>
                <div><strong>Поэтапная оплата,</strong> кредит или рассрочка </div>
                <div><strong>Наши крыши в каждом поселке</strong><br/>и дачном сообществе региона </div>
            </div>
    )
}

export default Properties;