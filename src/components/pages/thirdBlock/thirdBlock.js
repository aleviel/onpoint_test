import {useState} from 'react';
import Slide1 from '../../slide1';
import Slide2 from '../../slide2/Slide2';
import Slide3 from '../../slide3';

import Styles from './styles.module.css';

export default function ThirdBlock() {
    const [valueOnRange, setValueOnRange] = useState(0);

    const changeValue = (e) => {
        const value = e.target.value
        setValueOnRange(value)
        e.target.style.background = `linear-gradient(to right, #d1eaff 0%, #d1eaff ${value}%, #435063 ${value}%, #435063 100%)`
    }

    const content = () => {
        console.log(valueOnRange)
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
                        onChange={(e) => {
                            changeValue(e)
                        }}
                        className={Styles.range} type="range"
                        value={valueOnRange}
                    />
                </div>
            </div>
        </>
    )
}
