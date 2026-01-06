import React from 'react'
import Agent from './Agent'
const InterviewUi = () => {
  return (
    <>
    <h3 className='text-white'>Interview Generation
    </h3>
    <Agent userName='You' userId="user1" type="generate"/>
    </>
  )
}

export default InterviewUi