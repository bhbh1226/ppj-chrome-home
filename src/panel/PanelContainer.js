import React, { useContext } from 'react'
import PanelContext from './PanelContext'

const PanelWrapper = ({number, Component}) => {
    const { panelNumber } = useContext(PanelContext)

    return (
        (number === panelNumber) && (<Component number={number}/>)
    )
}

const TempComponent = ({number}) => { 
    return (
        <div>
            {number}
        </div>
    ) 
}

const PanelContainer = () => {
    // const { panelNumber } = useContext(PanelContext)

    return (
        <div>
            <PanelWrapper number={0} Component={TempComponent} />
            <PanelWrapper number={1} Component={TempComponent} />
            <PanelWrapper number={2} Component={TempComponent}/>
        </div>
    )
}

export default PanelContainer