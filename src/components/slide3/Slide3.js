import CN from 'classnames';

import gut from './assets/gut.png';
import infection from './assets/infection.png';
import stomach from './assets/stomach.png';
import buds from './assets/buds.png';
import muscle from './assets/muscle.png';
import lipid from './assets/lipid.png';
import liver from './assets/liver.png';
import brain from './assets/brain.png';

import Styles from './styles.module.css'

export default function Slide3() {
    return (
        <div className={Styles.wrapper}>

            <div className={Styles.header__block}>
                <h1 className={Styles.header}>
                    Звенья патогенеза СД2
                </h1>
            </div>

            <div className={Styles.routes}>
                <div className={CN(Styles.item1, Styles.item)}>
                    Микрофлора <br/> кишечника
                    <div className={CN(Styles.bubble)}>
                        <img src={gut} alt="gut"/>
                    </div>
                </div>
                <div className={CN(Styles.item2, Styles.item)}>
                    1 &beta;-клетки
                    <div className={CN(Styles.bubble)}>
                        <span className={Styles.number}> &beta; </span>
                    </div>
                </div>
                <div className={CN(Styles.item3, Styles.item)}>
                    <div className={CN(Styles.bubble)}>
                        <img src={brain} alt="brain"/>
                    </div>
                    Головной мозг
                </div>

                <div className={CN(Styles.item4, Styles.item)}>
                    Нарушение иммунной <br/> регуляции/воспаление
                    <div className={CN(Styles.bubble)}>
                        <img src={infection} alt="infection"/>
                    </div>
                </div>

                <div className={CN(Styles.item5, Styles.item)}>
                    <div className={Styles.double__block}>
                        <div className={Styles.left}>
                            <div>
                                <span className={Styles.number}> 2 </span>
                            </div>
                            инкретинового <br/> эффекта
                        </div>
                        <div className={Styles.right}>
                            <div>
                                <span className={Styles.number}> 3 </span>
                            </div>
                            Дефект &alpha;-клеток
                            <br/>
                            глюкагон
                        </div>
                    </div>
                </div>

                <div className={CN(Styles.item6, Styles.item)}>
                    Желудок
                    <div className={CN(Styles.bubble)}>
                        <img src={stomach} alt="stomach"/>
                    </div>
                </div>

                <div className={CN(Styles.item7, Styles.item)}>
                    Гипергликемия
                </div>

                <div className={CN(Styles.item8, Styles.item)}>
                    <div className={CN(Styles.bubble)}>
                        <img src={buds} alt="buds"/>
                    </div>
                    Почки
                </div>

                <div className={CN(Styles.item9, Styles.item)}>
                    <h3 className={Styles.item9__header} >
                        Инсулинорезистентность
                    </h3>
                    <div className={Styles.item9__inner}>
                        <div className={CN(Styles.bubble)}>
                            <img src={liver} alt="liver"/>
                        </div>
                        6 <br/> Печень
                    </div>
                    <div className={Styles.item9__inner}>
                        <div className={CN(Styles.bubble)}>
                            <img src={muscle} alt="muscle"/>
                        </div>
                        5 <br/> Мышцы
                    </div>
                    <div className={Styles.item9__inner}>
                        <div className={CN(Styles.bubble)}>
                            <img src={lipid} alt="lipid"/>
                        </div>
                        4 <br/> Жировый клетки
                    </div>
                </div>


            </div>
        </div>
    )
}
