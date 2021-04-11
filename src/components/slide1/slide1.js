import CN from 'classnames';

import muscle from './assets/musle.png'
import liver from './assets/liver.png'
import beta from './assets/beta.png'

import Styles from './styles.module.css';

export default function Slide1() {
    return (
        <>
            <div className={Styles.wrapper}>
                <div className={Styles.header__block}>
                    <h1 className={Styles.header}>Звенья патогенеза СД2</h1>
                </div>

                <div className={Styles.routes}>

                    <div className={Styles.top}>
                        1 <br/> &beta;-клетки
                        <div className={CN(Styles.bubble)}>
                            <img className={Styles.beta__img} src={beta} alt="beta"/>
                        </div>
                        <span className={CN(Styles.beta__arrow, Styles.arrow)}></span>
                    </div>

                    <div className={Styles.bottom}>
                        <div className={Styles.item}>
                            2 <br/> мышцы
                            <div className={Styles.bubble}>
                                <img src={muscle} alt="muscle"/>
                            </div>
                            <span className={CN(Styles.muscle__arrow, Styles.arrow)}></span>
                        </div>
                        <div className={Styles.item}>
                            <div className={Styles.hypo__block}>
                                гипогликемия
                            </div>
                            <span className={CN(Styles.hypo__leftArrow, Styles.arrow)}></span>
                            <span className={CN(Styles.hypo__rightArrow, Styles.arrow)}></span>
                        </div>
                        <div className={Styles.item}>
                            3 <br/> печень
                            <div className={Styles.bubble}>
                                <img className={Styles.liver__img} src={liver} alt="liver"/>
                            </div>
                            <span className={CN(Styles.liver__arrow, Styles.arrow)}></span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
