import React from 'react'
import Explore2eOption from './Explore2Option'
import Explore2Feed from './Explore2Feed'
import Explore2Widgets from './Explore2Widgets'

function Explore2() {
    return (
        <div className='homeContainer'>

            <div className="leftContainer">
                <Explore2eOption />
            </div>
            <div className='centerContainer'>
                <Explore2Feed />
            </div>

            <div className="rightContainer">
                <Explore2Widgets />
            </div>
        </div>
    )

}

export default Explore2
