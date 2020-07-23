import React, { useContext } from 'react'
import PanelContext from './PanelContext'

const PanelNextButton = () => {
    const { passPanelNumber } = useContext(PanelContext)

    return (
        <button onClick={passPanelNumber}>wow</button>
    )
}

export default PanelNextButton