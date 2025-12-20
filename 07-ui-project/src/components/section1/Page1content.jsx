import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='px-18 py-10 flex gap-10 h-[85vh] items-center'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1content