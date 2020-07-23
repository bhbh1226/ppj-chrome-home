import React, { useEffect, useState, Fragment } from 'react'
import './PanelMemo.scss'

const PanelMemo = () => {
    return (
        <Fragment>
            <h1>Memo</h1>
            <form className='panel-memo' onSubmit={(e) => {e.preventDefault()}}>
                <div className='textarea-container'>
                    <textarea />
                </div>
                <button>저장</button>
            </form>
        </Fragment>
    )
}

export default PanelMemo