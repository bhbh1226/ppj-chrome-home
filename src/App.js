import React from 'react'
import moment from 'moment'
import PanelContext, { PanelProvider } from './panel/PanelContext'
import PanelNextButton from './panel/PanelNextButton'
import PanelContainer from './panel/PanelContainer'
import PanelIndicator from './panel/PanelIndicator'
import bgImage from './sparkler-677774_1920.jpg'
import './App.scss'

const getDateNow = () => {
    return moment().format('YYYY-MM-DD')
}

const getDayOfWeekNow = () => {
    return moment().days()
}

const dayOfWeekList = ['일', '월', '화', '수', '목', '금', '토']

function App() {
    return (
        <div id="app" style={{ backgroundImage: `url(${bgImage})` }}>
            <PanelProvider>
                <main>
                    <div>{/* 1 - 언어선택 컴포넌트 */}</div>
                    <div>{/* 2 - 검색바 컴포넌트 */}</div>
                    <div>{dayOfWeekList[getDayOfWeekNow()]}</div>
                    <PanelIndicator />
                    <PanelContainer />
                    <div>{/* 6 - 빈 컴포넌트 */}</div>
                    <span className="date" draggable={false}>{getDateNow()}</span>
                    <div><PanelNextButton /></div>
                    <div>{/* 9 - 빈 컴포넌트 */}</div>
                </main>
            </PanelProvider>
        </div>
    )
}

export default App
