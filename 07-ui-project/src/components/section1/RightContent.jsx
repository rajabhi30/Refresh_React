import React from 'react'
import Rightcard from './Rightcard'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div  id='right' className='h-full w-2/3   p-5 flex  flex-nowrap gap-5 overflow-x-auto rounded-4xl '>
       {props.users.map(function(elem,idx){
        return <Rightcard img={elem.img} key={idx}  id={idx} tag={elem.tag } color={elem.color}/>
       })}
    </div>
  )
}

export default RightContent