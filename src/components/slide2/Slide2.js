import CN from 'classnames';

import brain from "./assets/brain.png";
import muscle from "./assets/musle.png";
import liver from "./assets/Capa.png";
import lipid2 from "./assets/lipid2.png";
import lipid from "./assets/lipid.png";

import Styles from './styles.module.css';

export default function Slide2() {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.header__block}>
                <h1 className={Styles.header}>Смертельный октет</h1>
            </div>

            <div className={Styles.routes}>

                <div className={CN(Styles.item1, Styles.item)}>
                    Инкретиновый <br/> эффект
                    <div className={CN(Styles.bubble)}>
                        <span className={Styles.number}>2</span>
                    </div>
                    <span className={CN(Styles.item1__arrow, Styles.arrow)}></span>
                </div>

                <div className={CN(Styles.item2, Styles.item)}>
                    <span className={Styles.number}>1</span>
                    &beta;-клетки
                    <div className={CN(Styles.bubble)}>
                        &beta;
                    </div>
                    <span className={CN(Styles.item2__arrow, Styles.arrow)}></span>
                </div>

                <div className={CN(Styles.item3, Styles.item)}>
                    <div className={CN(Styles.bubble)}>
                        <span className={Styles.number}>3</span>
                    </div>
                    Дефект <br/>
                    α-клеток
                    <span className={CN(Styles.item3__arrow, Styles.arrow)}></span>
                </div>

                <div className={CN(Styles.item4, Styles.item)}>
                    <div style={{'padding': '20px'}}>
                        <span className={Styles.number}>8</span>
                        Почки
                    </div>
                    <div className={CN(Styles.bubble)}>
                        <img src={lipid} alt="lipid"/>
                    </div>
                    <span className={CN(Styles.item4__arrow, Styles.arrow)}></span>
                </div>

                <div className={CN(Styles.item5, Styles.item)}>
                    <div className={Styles.hypo__block}>
                        Гипогликемия
                    </div>
                </div>

                <div className={CN(Styles.item6, Styles.item)}>
                    <div className={CN(Styles.bubble)}>
                        <img src={lipid2} alt="lipid"/>
                    </div>
                    <div style={{'padding': '10px'}}>
                        <span className={Styles.number}> 4 </span>
                        Жировые клетки
                    </div>
                    <span className={CN(Styles.item6__arrow, Styles.arrow)}></span>
                </div>

                <div className={CN(Styles.item7, Styles.item)}>
                    <div className={CN(Styles.bubble)}>
                        <img src={brain} alt="brain"/>
                    </div>
                    <span className={Styles.number}>7</span> Головной мозг
                    <span className={CN(Styles.item7__arrow, Styles.arrow)}></span>
                </div>

                <div className={CN(Styles.item8, Styles.item)}>
                    <div className={CN(Styles.bubble)}>
                        <img src={liver} alt="liver"/>
                    </div>
                    <span className={Styles.number}>6</span>
                    Печень
                    <span className={CN(Styles.item8__arrow, Styles.arrow)}></span>
                </div>

                <div className={CN(Styles.item9, Styles.item)}>
                    <div className={CN(Styles.bubble)}>
                        <img src={muscle} alt="muscle"/>
                    </div>
                    <span className={Styles.number}>5</span> Мышцы
                    <span className={CN(Styles.item9__arrow, Styles.arrow)}></span>
                </div>

            </div>

        </div>
    )

}
