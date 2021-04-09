import CN from 'classnames';

import Styles from './styles.module.css';

export default function MainBlock() {
    return (
        <div className={CN(Styles.wrapper)}>
            <h1 className={Styles.main__header}>
                Всегда ли цели терапии СД2 на поверхности?
            </h1>
            <div className={CN(Styles.risks, Styles.hypo)}>
                <p className={CN(Styles.ball, Styles.hypo__ball)}></p>
                Гипогликемия
            </div>
            <div className={CN(Styles.risks, Styles.CC)}>
                <p className={CN(Styles.ball, Styles.CC__ball)}></p>
                СС риски
            </div>
            <div className={CN(Styles.risks, Styles.SD)}>
                <p className={CN(Styles.ball, Styles.SD__ball)}></p>
                Осложнения СД
            </div>
            <div className={CN(Styles.risks, Styles.Hb)}>
                <p className={CN(Styles.ball, Styles.Hb__ball)}></p>
                Цель по HbA1c
            </div>
        </div>
    )
}
