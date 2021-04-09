import CN from 'classnames';

import Styles from './styles.module.css';

export default function SecondBlock() {
    return (
        <div className={CN(Styles.wrapper)}>
            <h1 className={Styles.header}>
                Основа терапии — <br/> патогенез СД2
            </h1>
        </div>
    )
}
