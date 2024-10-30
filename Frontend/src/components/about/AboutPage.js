import React from 'react'
import ResponsiveAppBar from '../../materialUIComponents/navbar/ResponsiveAppBar'
import ComponentsHeading from '../componentsHeading/ComponentsHeading'
import Navigate from '../../materialUIComponents/navigation/Navigate'
import Footer from '../footer/Footer'
import UnderMaintenance from '../underMaintenance/underMaintenance'

const AboutPage = () => {
  return (
    <>
         <ResponsiveAppBar isTransparent={false} />
         <ComponentsHeading prevPath={"Home "} path={" / About"} comColor="#ffffdd" content={"About Ourself"} />
         <UnderMaintenance/>
         <Footer />
         <Navigate />
    </>
  )
}

export default AboutPage