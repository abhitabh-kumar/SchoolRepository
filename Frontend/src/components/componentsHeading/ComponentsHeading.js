import React from 'react'
import "./componentsHeading.css"

const ComponentsHeading = ({prevPath,path,comColor,content}) => {
  return (
    <div className='componentsPage' style={{backgroundColor:comColor}}>
        <p className="componentsDirectoryPath" style={{backgroundColor:comColor}}>
            <span style={{color:'#848484',marginRight:"3px"}}>{prevPath}</span> <b> {path} </b>
        </p>
        <h1 className='componentsContent' style={{backgroundColor:comColor}}>
            {content}
        </h1>
    </div>
  )
}

export default ComponentsHeading