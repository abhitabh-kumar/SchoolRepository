import React from 'react'
import ResponsiveAppBar from '../../materialUIComponents/navbar/ResponsiveAppBar'
import ComponentsHeading from '../componentsHeading/ComponentsHeading'
import Navigate from '../../materialUIComponents/navigation/Navigate'
import Footer from '../footer/Footer'
import UnderMaintenance from '../underMaintenance/underMaintenance'

const BlogPage = () => {
  return (
    <>
         <ResponsiveAppBar isTransparent={false} />
         <ComponentsHeading prevPath={"Home "} path={" / Blog"} comColor="#e4e6ff" content={"Our Blogs"} />
         <UnderMaintenance/>
         <Footer />
         <Navigate />
    </>
  )
}

export default BlogPage