import React from 'react'
import book from '../../public/books.jpg'


const Cards = ({item}) => {
    console.log(item);
  return (
     <>
    <div className='mt-5 flex items-center justify-evenly'>
    <div className="card w-72 bg-base-100 border border-gray-300  shadow-xl hover:scale-110 transition-all duration-700">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary bg-orange-500">{item.category}</div>
    </h2>
    <p className='text-sm'>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="badge badge-outline  py-2 px-2 hover:bg-orange-500 hover:text-white">
        <a href="#">Buy now</a>
      </div>
    </div>
  </div>
</div>
    </div>
     </>
  )
}

export default Cards
