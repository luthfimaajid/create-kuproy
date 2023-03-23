import React from 'react'

const Card = () => {
  return (
    <div className="mr-6 ml-6 mt-10 w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-quicksand mb-4 font-semibold">Lorem Ipsum</h2>
        <p className="text-13 font-montserrat font-light ">Bandung, Jawa Barat</p>
        <p className="font-montserrat font-regular text-black leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        pharetra lacinia sem eu porttitor. Fusce sed dapibus nulla.
        </p>
        <ul className="flex items-center mt-6 justify-center">
          <li className="rounded-40 bg-custom-green-1 items-center w-28">   
            <a href="/update" className="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
            <img src={`${process.env.PUBLIC_URL}/assets/edit_icon.svg`} alt="Edit_icon" className="pr-3 w-7 h-7" /> 
                Edit  
            </a>
          </li>
          <li className="ml-6 rounded-40 bg-custom-red-1 items-center w-28">   
            <a href="/posts" className="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
            <img src={`${process.env.PUBLIC_URL}/assets/trash_icon.svg`} alt="Trash_icon" className="pr-3 w-7 h-7 " /> 
                Delete
            </a>
          </li>
        </ul>
    </div>

  ) 
}

export default Card