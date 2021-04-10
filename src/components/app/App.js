import Wrapper from '../wrapper';
import MainBlock from '../pages/mainBlock';
import SecondBlock from '../pages/secondBlock/secondBlock';
import ThirdBlock from '../pages/thirdBlock';

import {useEffect, useRef, useState} from 'react';

import {SheetContext} from '../../context/sheetContext';

function App() {

    const [activeSheet, setActiveSheet] = useState(1);
    const [{start, end}, setTouch] = useState({start: 0, end: 0});
    const [fromUp, setFromUp] = useState(false)
    const [valueOnRange, setValueOnRange] = useState(0);

    const refRange = useRef(null)

    const changeValue = (e) => {
        let value = e;
        if (typeof (e) === 'object') {
            value = e.target.value
        }
        setValueOnRange(value)
        refRange.current.style.background = `linear-gradient(to right, #d1eaff 0%, #d1eaff ${value}%, #435063 ${value}%, #435063 100%)`
    }

    const finishSelect = () => {
        if (valueOnRange <= 26) {
            setValueOnRange(0)
            changeValue(0)
        } else if (valueOnRange > 26 && valueOnRange < 71) {
            setValueOnRange(50)
            changeValue(50)
        } else if (valueOnRange >= 70) {
            setValueOnRange(100)
            changeValue(100)
        }
    }

    useEffect(() => {
        if (start - end > 100) {
            incActive(1)
        }
        if (-start + end > 100) {
            incActive(-1)
        }
    }, [end]);

    const setActiveDot = (id) => {
        if (id > activeSheet) {
            setFromUp(false)
        } else {
            setFromUp(true)
        }
        setActiveSheet(id)
    }

    const incActive = (value) => {
        if (activeSheet + value !== 0 && activeSheet + value !== 4) {
            setActiveSheet(activeSheet => activeSheet + value)
        }
        if (value === -1) {
            setFromUp(true)
        } else {
            setFromUp(false)
        }
    }

    const scrollEventStart = (e) => {
        setTouch(prev => (
            {
                ...prev,
                start: e.changedTouches[0].clientY
            }
        ))
    }
    const scrollEventEnd = (e) => {
        setTouch(prev => (
            {
                ...prev,
                end: e.changedTouches[0].clientY
            }
        ))
    }

    const content = () => {
        switch (activeSheet) {
            case 1:
                return <MainBlock/>
            case 2:
                return <SecondBlock/>
            case 3:
                return <ThirdBlock/>
            default:
                return <MainBlock/>
        }
    }

    return (
        <>
            <SheetContext.Provider value={
                {
                    setActiveDot: setActiveDot,
                    activeSheet: activeSheet,
                    incActive: incActive,
                    scrollEventStart: scrollEventStart,
                    scrollEventEnd: scrollEventEnd,
                    isFromUp: fromUp,
                    refRange: refRange,
                    changeValue: changeValue,
                    finishSelect: finishSelect,
                    valueOnRange: valueOnRange,
                }
            }>
                <Wrapper>
                    {content()}
                </Wrapper>
            </SheetContext.Provider>
        </>
    );
}

export default App;
