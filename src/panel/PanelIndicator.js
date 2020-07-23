import React, { useContext } from 'react'
import PanelContext from './PanelContext'

const PanelIndicator = () => {
    const { panelNumber } = useContext(PanelContext)

    return (
        <div>
            <span>{panelNumber}</span>
        </div>
    )
}

export default PanelIndicator