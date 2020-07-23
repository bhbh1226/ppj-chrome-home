import React, { Fragment } from 'react'
import PanelTime from './content/PanelTime'
import PanelWrapper from './PanelWrapper'
import PanelMemo from './content/PanelMemo'

const TempComponent = ({number}) => { 
    return (
        <Fragment>
            {number} - this is temporary component.
        </Fragment>
    ) 
}

const PanelContainer = () => {
    return (
        <div>
            <PanelWrapper number={0} Component={PanelTime} />
            <PanelWrapper number={1} Component={PanelMemo} />
            <PanelWrapper number={2} Component={TempComponent} />
        </div>
    )
}

export default PanelContainer