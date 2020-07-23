import React, { useState, createContext } from 'react'

const PanelContext = createContext({
    panelNumber: 0, 
    setPanelNumber: () => {},
    passPanelNumber: () => {}, 
    panelMax: 3, 
    setPanelMax: () => {}
})

const PanelProvider = ({children}) => {
    const [panelNumber, setPanelNumber] = useState(0)
    const [panelMax,    setPanelMax]    = useState(3)

    const passPanelNumber = () => {
        setPanelNumber(prevNumber => (
            (prevNumber !== panelMax - 1)
                ? (prevNumber + 1)
                : 0
            )
        )
    }

    return (
        <PanelContext.Provider value={{
            panelNumber, setPanelNumber, passPanelNumber,
            panelMax, setPanelMax
        }}>
            {children}
        </PanelContext.Provider>
    )
}


export { PanelProvider }
export default PanelContext