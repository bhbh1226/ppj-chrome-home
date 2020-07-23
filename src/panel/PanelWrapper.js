import React, { useContext } from 'react'
import PanelContext from './PanelContext'
import './PanelWrapper.scss'
import classname from 'classname'

const PanelWrapper = ({ number, Component }) => {
    const { panelNumber } = useContext(PanelContext)

    return (
        <div className={classname('panel-wrapper', (number === panelNumber) ? 'panel-focused' : 'panel-unfocused')}>
            <Component number={number} />
        </div>
    )
}

export default PanelWrapper