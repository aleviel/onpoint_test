import CN from 'classnames';
import {useContext} from 'react';

import {SheetContext} from '../../../context/sheetContext';

import Styles from './styles.module.css';

export default function SecondBlock() {

    const Context = useContext(SheetContext);

    const fromUp = Context.isFromUp

    return (
        <div className={CN(Styles.wrapper, {[Styles.fromUp]: fromUp, [Styles.fromDown]: !fromUp})}>
            <h1 className={Styles.header}>
                Основа терапии — <br/> патогенез СД2
            </h1>
        </div>
    )
}
