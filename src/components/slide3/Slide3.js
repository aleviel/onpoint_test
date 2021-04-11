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
                    <div>
                        <span className={Styles.number}> 8</span>
                        Микрофлора <br/> кишечника
                    </div>
                    <div className={CN(Styles.bubble)}>
                        <img src={gut} alt="gut"/>
                    </div>
                    <span className={CN(Styles.item1__arrow, Styles.arrow)}/>
                    <span className={CN(Styles.item1__arrow, Styles.item1__arrow_reverse, Styles.arrow)}/>
                </div>

                <div className={CN(Styles.item2, Styles.item)}>
                    <div>
                        <span className={CN(Styles.number__beta, Styles.number)}>1</span> &beta;-клетки
                    </div>
                    <div className={CN(Styles.bubble)}>
                        <span className={Styles.number}> &beta; </span>
                    </div>
                    <span className={CN(Styles.item2__arrow, Styles.arrow)}/>
                    <span className={CN(Styles.item2_2__arrow, Styles.arrow)}/>
                    <span className={CN(Styles.item2_3__arrow, Styles.arrow)}/>
                    <span className={CN(Styles.item2_4__arrow, Styles.arrow)}/>
                </div>

                <div className={CN(Styles.item3, Styles.item)}>
                    <div className={CN(Styles.bubble)}>
                        <img src={brain} alt="brain"/>
                    </div>
                    <div>
                        <span className={Styles.number}> 7</span> Головной мозг
                    </div>
                    <span className={CN(Styles.item3__arrow, Styles.arrow)}/>
                    <span className={CN(Styles.item3__arrow, Styles.item3__arrow_reverse, Styles.arrow)}/>
                </div>

                <div className={CN(Styles.item4, Styles.item)}>
                    <div className={Styles.item4__abs}>
                        <span className={Styles.number}>9</span> Нарушение иммунной <br/> регуляции/воспаление
                    </div>
                    <div className={CN(Styles.bubble)}>
                        <img src={infection} alt="infection"/>
                    </div>
                    <span className={CN(Styles.item4__arrow, Styles.arrow)}/>
                    <span className={CN(Styles.item4__arrow, Styles.item4__arrow_reverse, Styles.arrow)}/>
                </div>

                <div className={CN(Styles.item5, Styles.item)}>
                    <div className={Styles.double__block}>
                        <div className={Styles.left}>
                            <div>
                                <span className={Styles.number}> 2 </span>
                            </div>
                            <span className={Styles.incretin}>инкретинового <br/> эффекта</span>
                            <span className={CN(Styles.item5__arrow, Styles.arrow)}/>
                        </div>
                        <div>
                            <div>
                                <span className={Styles.number}> 3 </span>
                            </div>
                            <span>Дефект &alpha;-клеток</span>
                            <br/>
                            <span className={Styles.glucagon}>
                                глюкагон
                            </span>
                            <span className={CN(Styles.item5_1__arrow, Styles.arrow)}/>
                            <span className={CN(Styles.item5_2__arrow, Styles.arrow)}/>
                        </div>
                    </div>
                </div>

                <div className={CN(Styles.item6, Styles.item)}>
                    <div>
                        <span className={Styles.number}>10</span>
                        Желудок
                    </div>
                    <div className={CN(Styles.bubble)}>
                        <img src={stomach} alt="stomach"/>
                    </div>
                    <span className={Styles.amylin}>амилин</span>
                    <span className={CN(Styles.item6__arrow, Styles.arrow)}/>
                    <span className={CN(Styles.item6_2__arrow, Styles.arrow)}/>
                    <span className={CN(Styles.item6_3__arrow, Styles.arrow)}/>
                </div>

                <div className={CN(Styles.item7, Styles.item)}>
                    Гипергликемия
                </div>

                <div className={CN(Styles.item8, Styles.item)}>
                    <div>
                        <span className={Styles.number}> 11 </span>
                        Почки
                    </div>
                    <div className={CN(Styles.bubble)}>
                        <img src={buds} alt="buds"/>
                    </div>
                    <span className={CN(Styles.item8__arrow, Styles.arrow)}/>
                    <span className={CN(Styles.item8__arrow, Styles.item8__arrow_reverse, Styles.arrow)}/>
                </div>

                <div className={CN(Styles.item9, Styles.item)}>
                    <h3 className={Styles.item9__header}>
                        Инсулинорезистентность
                    </h3>
                    <div className={Styles.item9__inner}>
                        <div className={CN(Styles.bubble)}>
                            <img src={liver} alt="liver"/>
                        </div>
                        <div>
                            <span className={Styles.number}> 6 </span> Печень
                        </div>
                    </div>
                    <div className={Styles.item9__inner}>
                        <div className={CN(Styles.bubble)}>
                            <img src={muscle} alt="muscle"/>
                        </div>
                        <div>
                            <span className={Styles.number}> 5 </span>Мышцы
                        </div>
                    </div>
                    <div className={Styles.item9__inner}>
                        <div className={CN(Styles.bubble)}>
                            <img src={lipid} alt="lipid"/>
                        </div>
                        <div className={Styles.item9__abs}><span className={Styles.number}> 4 </span> Жировый клетки
                        </div>
                    </div>
                    <span className={CN(Styles.item9__arrow, Styles.arrow)}/>
                    <span className={CN(Styles.item9__arrow, Styles.item9__arrow_reverse, Styles.arrow)}/>
                    <span className={CN(Styles.item9_1__arrow, Styles.arrow)}/>
                    <span className={CN(Styles.item9_1__arrow, Styles.item9_1__arrow_reverse, Styles.arrow)}/>
                </div>

            </div>
        </div>
    )
}
