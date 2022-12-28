import React from 'react'
import exit from '../../Assets/Icons/exitGrey.png'

const PopUpCard = ({children,show,onClose}) => {
    if(!show) return
  return (
    <div className="container-wrapper">
    <div className="popup-card">
        <img onClick={onClose} src={exit} alt="" />
       {children}

    </div>
</div>
  )
}

export default PopUpCard