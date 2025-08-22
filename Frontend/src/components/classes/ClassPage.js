import React from 'react'
import ResponsiveAppBar from '../../materialUIComponents/navbar/ResponsiveAppBar'
import ComponentsHeading from '../componentsHeading/ComponentsHeading'
import Navigate from '../../materialUIComponents/navigation/Navigate'
import Footer from '../footer/Footer'
import UnderMaintenance from '../underMaintenance/underMaintenance'

const ClassPage = () => {
  return (
    <>
         <ComponentsHeading prevPath={"Home "} path={" / Classes"} comColor="rgb(255 225 225)" content={"Our Classes"} />
         <UnderMaintenance/>
    </>
  )
}

export default ClassPage