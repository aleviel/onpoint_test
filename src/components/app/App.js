import Wrapper from '../wrapper';
import MainBlock from '../pages/mainBlock';
import SecondBlock from '../pages/secondBlock/secondBlock';
import ThirdBlock from '../pages/thirdBlock';

import {useEffect, useState} from 'react';

import {SheetContext} from '../../context/sheetContext';

function App() {

    const [activeSheet, setActiveSheet] = useState(1);
    const [{start, end}, setTouch] = useState({start: 0, end: 0});

    useEffect(() => {
        if (start - end > 100) {
            incActive(1)
        }
        if (-start + end > 100) {
            incActive(-1)
        }
    }, [end]);

    const setActiveDot = (id) => {
        setActiveSheet(id)
    }

    const incActive = (value) => {
        if (activeSheet + value !== 0 && activeSheet + value !== 4) {
            setActiveSheet(activeSheet => activeSheet + value)
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
