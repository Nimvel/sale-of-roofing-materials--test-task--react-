import style from '../Content.module.css';

const Prop = ({ onePropertyStyle, onAddClick }) => {
    let onButtonAddClick = () => {
        onAddClick();
    }

    return (
            <div className={style[onePropertyStyle]} >
                <div className={style.one_property_text} ><strong>Гарантия от 50 лет</strong><br /> на материалы и 5<br />лет на монтаж</div>
                <div className={style.small_text}>Нажмите на плюсик, чтобы увидеть<br />все преимущества работы с нами</div>
                <div className={style.add} onClick={onButtonAddClick} />
            </div>
    )
}

export default Prop;

