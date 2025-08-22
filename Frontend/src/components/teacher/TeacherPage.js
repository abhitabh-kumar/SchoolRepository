import React, {  } from 'react'
import ComponentsHeading from '../componentsHeading/ComponentsHeading'
import "./teacherPage.css"
import TeacherTemplate from './TeacherTemplate'
// import { teachers } from '../../dummyData/teachers';

const TeacherPage = () => {
  return (
    <>
      <ComponentsHeading prevPath={"Home "} path={" / Teachers"} comColor="#ffeef0" content={"Our Teachers"} />
      <TeacherTemplate/>
    </>
  )
}

export default TeacherPage