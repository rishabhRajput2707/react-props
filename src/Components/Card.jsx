// import React from 'react'

// const Card = ({color , text}) => {
//   return (
//     <div >
//         <button className={`px-4 py-1 ${color} rounded text-white`}>{text}</button>
//     </div>
//   )
// }

// export default Card




import React from 'react'

const Card = ({values , handlebutton , index}) => {
    const {image , name , proffesion , friends} = values


  return (
    <div className='w-40 bg-white overflow-hidden rounded-md'>
        <div className='w-full h-42 bg-sky-200 '>
            <img className='w-full h-full object-cover' src={`${image}`} alt="" />
        </div>
        <div className='px-4'>
            <h3 className='text-xl font-semibold mt-2 mb-1'>{name}</h3>
            <h5>{proffesion}</h5>
            <button onClick={()=>handlebutton(index)} className={`px-4 py-1  ${friends === true ? "bg-green-400" : "bg-red-400"} text-white mt-2 mb-2 rounded-md`} >{friends === true ? "friends" : "Add Friend" }</button>
        </div>
    </div>
  )
}

export default Card