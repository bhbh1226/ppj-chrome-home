import React, { useContext } from 'react'
import classname from 'classname'
import PanelContext from './PanelContext'
import './PanelIndicator.scss'

const Item = ({number}) => {
    const { panelNumber } = useContext(PanelContext)
    
    return (
        <div className={
            classname('indicator-item', `item-${(number === panelNumber) ? 'focused' : 'unfocused'}`)
        } />
    )
}

const PanelIndicator = () => {
    return (
        <div className="panel-indicator">
            <Item number={0} />
            <Item number={1} />
            <Item number={2} />
        </div>
    )
}

export default PanelIndicator