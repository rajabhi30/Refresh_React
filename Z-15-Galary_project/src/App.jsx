import React,{useState,useEffect} from 'react'
import axios from 'axios'
const App = () => {

 const [userData, setUserData] = useState([])

 const[index,setIndex]=useState(2)

  const getData= async()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)

    setUserData(response.data); 
 
  }

  useEffect(function(){
    getData()
  },[index])

    let printUserData=<h1 className='text-xl text-gray-500 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2'>
      Loading...</h1>

    if(userData.length>0){
      printUserData=userData.map(function(elem,idx){
        return <div className='pl-6' key={idx}>
         <a href={elem.url} target='_blank'>
           <div className='h-40 w-45 overflow-hidden rounded-xl'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
        </div>
        <h2 className='font-bold text-xl'>{elem.author}</h2>
         </a>
        </div>
      })
    }
  return (

    <div className='bg-black h-screen text-white p-4 overflow-auto'>
        <div className='flex flex-wrap gap-4'>{printUserData}</div>

        <div className='flex justify-center gap-6 items-center p-4'>
          <button  onClick={function(){
            if(index>2){
              setIndex(index-1)
              setUserData([]);
              console.log("prev")
            }
          }}
          className=' font-medium bg-amber-400 text-m cursor-pounter active:scale-95 px-4 py-2 rounded text-black'>Prev</button>
          <button  onClick={function(){
            setIndex(index+1)
             setUserData([]);
            console.log("next")
          }}
          className=' font-medium bg-amber-400 text-m cursor-pounter active:scale-95 px-4 py-2 rounded text-black'>Next</button>
        </div>
    </div>
  )
}

export default App