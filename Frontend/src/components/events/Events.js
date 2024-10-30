import React from 'react'
import ResponsiveAppBar from '../../materialUIComponents/navbar/ResponsiveAppBar'
import ComponentsHeading from '../componentsHeading/ComponentsHeading'
import Navigate from '../../materialUIComponents/navigation/Navigate'
import Footer from '../footer/Footer'
import UnderMaintenance from '../underMaintenance/underMaintenance'

const Events = () => {
  return (
    <>
         <ResponsiveAppBar isTransparent={false} />
         <ComponentsHeading prevPath={"Home "} path={" / Events"} comColor="#d7fff3" content={"Our Events"} />
         <UnderMaintenance/>
         <Footer />
         <Navigate />
    </>
  )
}

export default Events