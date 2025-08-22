import React from 'react'
import lodder from '../../assests/lodder.gif'

const Lodder = () => {
  return (
    <div style={{zIndex:'10000',backgroundColor:'#00000070',width:'100vw',height:'100vh',position:'fixed'}}>
        <img src={lodder} alt="" srcset="" />
    </div>
  )
}

export default Lodder