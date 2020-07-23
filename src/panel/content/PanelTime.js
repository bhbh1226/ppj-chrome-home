import React, { useEffect, useState, Fragment } from 'react'
import moment from 'moment'

const PanelTime = () => {
    const [time, setTime] = useState('00 : 00 : 00')

    useEffect(() => {
        const timeInterval = setInterval(() => { 
            setTime(moment().format('HH : mm : ss')) 
        }, 500)

        return () => { clearInterval(timeInterval) }
    }, [])

    return (
        <Fragment>
            <span style={{ fontSize: '6em' }}>{time}</span>
            <span>오늘도 열심히</span>
        </Fragment>
    )
}

export default PanelTime