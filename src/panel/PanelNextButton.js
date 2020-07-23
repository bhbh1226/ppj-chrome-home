import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import PanelContext from './PanelContext'
import './PanelNextButton.scss'

const PanelNextButton = () => {
    const { passPanelNumber } = useContext(PanelContext)

    return (
        <button className='next-button' onClick={passPanelNumber}>
            <FontAwesomeIcon className='next-button-icon' icon={faArrowAltCircleDown}/>
        </button>
    )
}

export default PanelNextButton