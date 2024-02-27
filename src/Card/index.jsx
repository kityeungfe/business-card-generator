import React from 'react'

function Card ({ title, children }) {
  return (
	<div className="border border-stone-950 m-4 p-4 rounded">
		{/* title */}
		<div className='text-2xl font-bold'>{title}</div>
		{/* children */}
	  	{children}
	</div>
  )
}

export default Card