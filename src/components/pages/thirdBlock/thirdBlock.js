import {useContext, useEffect} from 'react';
import Slide1 from '../../slide1';
import Slide2 from '../../slide2/Slide2';
import Slide3 from '../../slide3';

import {SheetContext} from '../../../context/sheetContext';

import Styles from './styles.module.css';

export default function ThirdBlock() {

    const Context = useContext(SheetContext)

    const {
        refRange,
        changeValue,
        finishSelect,
        valueOnRange
    } = Context;

    useEffect(() => {
        finishSelect()
    }, []);

    const content = () => {
        if (valueOnRange <= 26) {
            return <Slide1/>
        } else if (valueOnRange > 26 && valueOnRange < 71) {
            return <Slide2/>
        } else if (valueOnRange >= 70) {
            return <Slide3/>
        } else {
            return <div>error</div>
        }
    }
    return (
        <>
            <div className={Styles.slider__wrapper}>

                {content()}

                <div className={Styles.range__wrapper}>
                    <input
                        ref={refRange}
                        onChange={(e) => {
                            changeValue(e)
                        }}
                        onTouchEnd={() => {
                            finishSelect()
                        }}
                        className={Styles.range} type="range"
                        value={valueOnRange}
                    />
                    <div className={Styles.range__years}>
                        <span>1988</span>
                        <span>2009</span>
                        <span>2016</span>
                    </div>
                </div>
            </div>
        </>
    )
}
