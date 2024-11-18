// props use hote hai apke components ko resusable banaane ke liye , consider karo apke pass ek button hai and apke us button ko alag alag jagah dalna hai app mein to app ek h button componnent bannye an d uske data hard coded karne ki jagah parent component se send karade and child componen

// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div className='p-4 flex gap-2'>
//       <Card text="Know More" color="bg-red-600"/>
//       <Card text="Download" color="bg-blue-600"/>

//     </div>
//   )
// }

// export default App





import React from 'react'
import { useState } from 'react'
import Card from  './components/Card'


const App = () => {
  const data = [
    {name: "ayush" , proffesion: "BBA", image:"https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdCUyMGJveXxlbnwwfHwwfHx8MA%3D%3D" ,  friends: false},
    {name: "abhay" , proffesion: "photography", image:"https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdCUyMHBob3RvZ3JhcGhlciUyMGJveXxlbnwwfHwwfHx8MA%3D%3D" ,  friends: false},
    {name: "manish" , proffesion: "Hotel Management", image:"https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoaWVmfGVufDB8fDB8fHww" ,  friends: false},
    {name: "mannu" , proffesion: "Wpo Sector", image:"https://images.unsplash.com/photo-1727476112169-be5f16f3a726?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHB1bmphYmklMjBib3l8ZW58MHx8MHx8fDA%3D" ,  friends: false}
  ]

  const [realdata, setRealdata] = useState(data)
  const handleFriendsButton = (cardIndex)=>{
    setRealdata((previous)=>{
      return previous.map((item , index)=>{
        if(index === cardIndex){ return {...item , friends: !item.friends}}
      return item;
    })
    })
  }
  return (
    <div className='h-screen w-full bg-zinc-300 flex items-center justify-center gap-12 '>
      {realdata.map((item, index)=>(
      <Card key={index} index = {index} handlebutton={handleFriendsButton} values={item}/>
      ))}
    </div>
  )
}

export default App