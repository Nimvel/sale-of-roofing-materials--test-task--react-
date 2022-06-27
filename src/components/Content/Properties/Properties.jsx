import style from '../Content.module.css';
// import button from '../../../assets/button.svg';

const Properties = ({propertyStyle}) => {
    return (
        <div className={style.properties}>
            <div className={style.remove} />
            <div className={style.first_property} ><strong>Гарантия от 50 лет</strong> на материалы и 5 лет на монтаж</div>
            <div className={style.second_property}><strong>Замер, монтажный проект</strong> и<br />еще 4 услуги бесплатно</div>
            <div className={style.third_property}><strong>Сметы<br />точны</strong> до копейки </div>
            <div className={style.fourth_property}><strong>Поэтапная оплата,</strong> кредит или рассрочка </div>
            <div className={style.fifth_property}><strong>Наши крыши в каждом поселке</strong><br />и дачном сообществе региона </div>
        </div>

    )
}

export default Properties;

