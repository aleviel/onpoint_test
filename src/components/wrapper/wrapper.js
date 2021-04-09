import BottomArrow from '../bottomArrow/arrow';
import {useContext} from 'react';
import CN from 'classnames';

import {SheetContext} from '../../context/sheetContext';

import Styles from './styles.module.css';

export default function Wrapper(props) {

    const Context = useContext(SheetContext);
    const arrow = Context.activeSheet !== 3 ? <BottomArrow/> : null

    return (
        <>
            <div
                onTouchStart={(e) => {
                    Context.scrollEventStart(e)
                }}
                onTouchEnd={(e) => {
                    Context.scrollEventEnd(e)
                }}
                className={CN(Styles.wrapper)}>
                {props.children}
                <ul className={Styles.dots__list}>
                    <li className={CN(Styles.dots, {[Styles.active]: Context.activeSheet === 1})}
                        onClick={() => {
                            Context.setActiveDot(1)
                        }}/>
                    <li className={CN(Styles.dots, {[Styles.active]: Context.activeSheet === 2})}
                        onClick={() => {
                            Context.setActiveDot(2)
                        }}/>
                    <li className={CN(Styles.dots, {[Styles.active]: Context.activeSheet === 3})}
                        onClick={() => {
                            Context.setActiveDot(3)
                        }}/>
                </ul>
                {arrow}
            </div>
        </>
    )
}
