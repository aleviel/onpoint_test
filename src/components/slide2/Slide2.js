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
                <div className={Styles.top}>
                    <div className={CN(Styles.item, Styles.block__bubble)}>
                        Инкретиновый <br/> эффект
                        <div className={CN(Styles.bubble)}>
                            2
                        </div>
                    </div>
                    <div className={Styles.item}>
                        1<br/>
                        &beta;-клетки
                        <div className={CN(Styles.bubble)}>
                            &beta;
                        </div>
                    </div>
                    <div className={CN(Styles.item, Styles.block__bubble)}>
                        <div className={CN(Styles.bubble)}>
                            3
                        </div>
                        Дефект
                        α-клеток
                    </div>
                </div>
                <div className={Styles.middle}>
                    <div className={Styles.item} F>
                        8 Почки
                        <div className={CN(Styles.bubble)}>
                            <img src={lipid} alt="lipid"/>
                        </div>
                    </div>
                    <div className={Styles.item}>
                        <div className={Styles.hypo__block}>
                            Гипогликемия
                        </div>
                    </div>
                    <div className={Styles.item}>
                        <div className={CN(Styles.bubble)}>
                            <img src={lipid2} alt="lipid"/>
                        </div>
                        4 Жировые клетки
                    </div>
                </div>
                <div className={Styles.bottom}>
                    <div className={Styles.item}>
                        <div className={CN(Styles.bubble)}>
                            <img src={brain} alt="brain"/>
                        </div>
                        7 <br/> Головной мозг
                    </div>
                    <div className={Styles.item}>
                        <div className={CN(Styles.bubble)}>
                            <img src={liver} alt="liver"/>
                        </div>
                        6 <br/> Печень
                    </div>
                    <div className={Styles.item}>
                        <div className={CN(Styles.bubble)}>
                            <img src={muscle} alt="muscle"/>
                        </div>
                        5 <br/> Мышцы
                    </div>
                </div>
            </div>

        </div>
    )

}
