import {useContext} from 'react';
import CN from 'classnames';

import {SheetContext} from '../../context/sheetContext';

import Styles from './styles.module.css';

export default function BottomArrow() {

    const Context = useContext(SheetContext)

    return (
        <p
            onClick={() => {
                Context.incActive(1)
            }}
            className={CN(Styles.arrow)}
        >
            Листайте вниз
        </p>
    )
}
