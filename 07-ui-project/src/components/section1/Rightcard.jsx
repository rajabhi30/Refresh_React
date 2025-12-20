import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-65  shrink-0 rounded-4x overflow-hidden relative'>
        <img className=' rounded-4xl h-full object-cover w-full' src={props.img} alt="" />
        <Rightcardcontent tag={props.tag} key={props.key} id={props.id} color={props.color}/>
    </div>
  )
}

export default Rightcard