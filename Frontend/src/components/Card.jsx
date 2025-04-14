import React from 'react'
// import List from '/public/Data/List.json'
const Card = ({items}) => {


  return (
    <>
    <div className="card group bg-transparent bg-base-100 h-[500px] px-4  shadow-xl mt-14">
  <figure>
    <img
      src={items.image}
      alt="Shoes"
      className='group-hover:scale-110 duration-300 transition-all' />
  </figure>
  <div className="card-body border dark:border-slate-800">
    <h2 className="card-title">{items.name}</h2>
    <p>{items.des}</p>
    <h2 className={`text-lg font-semibold py-1 px-2 rounded-lg ${items.category === 'Free' ? "bg-green-500 text-white w-14":""}`}>{items.category}</h2>
    <div className="card-actions justify-end">
       <p className=' text-lg font-semibold text-pink-500'>${items.price}</p>
      <button className="btn btn-outline btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Card