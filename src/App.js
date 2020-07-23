import React from 'react'
import moment from 'moment'
import './App.scss'
import PanelContext, { PanelProvider } from './panel/PanelContext'
import PanelNextButton from './panel/PanelNextButton'
import PanelContainer from './panel/PanelContainer'
import PanelIndicator from './panel/PanelIndicator'

const getDateNow = () => {
    return moment().format('YYYY-MM-DD')
}

function App() {
    return (
        <div id="app">
            <PanelProvider>
                <main>
                    <div>{/* 1 - 빈 컴포넌트 */}</div>
                    <div>검색바</div>
                    <div>목</div>
                    <div><PanelIndicator/></div>
                    <div><PanelContainer/></div>
                    <div>{/* 6 - 빈 컴포넌트 */}</div>
                    <span className="date" draggable={false}>{getDateNow()}</span>
                    <div><PanelNextButton/></div>
                    <div>{/* 9 - 빈 컴포넌트 */}</div>
                </main>
            </PanelProvider>
        </div>
    )
}

export default App
