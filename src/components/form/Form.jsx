import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Bottom from '../bottom/Bottom';

const Form = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const data = { title, location, description };
        try {
          const response = await axios.post('http://localhost:5000/api/post/', data);
          console.log('Note created successfully!');
          navigate('/posts');
        } catch (error) {
          console.error('Error creating note:', error);
        }
      };
  
    return (
    <div className="flex items-center justify-center mt-10">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-w1 w-full">
            <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-6">
                <label className="font-quicksand block font-semibold text-black mb-2" htmlFor="title">
                Title
                </label>
                <input
                className="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none"
                id="title"
                type="text"
                maxLength="10"
                placeholder="Input title here..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required="true"
                />
                <p className="text-gray-500 text-sm ml-1 mt-0">Maximal Character : 10</p>
            </div>
            <div className="mb-6">
                <label className="font-quicksand block font-semibold text-black mb-2" htmlFor="location">
                Location
                </label>
                <input
                className="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none"
                id="location"
                type="text"
                maxLength="25"
                placeholder="Bandung, Jawa Barat"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required="true"
                />
                <p className="text-gray-500 text-sm ml-1 mt-0">Maximal Character : 25</p>
            </div>
            <div className="mb-6">
                <label className="font-quicksand block font-semibold text-black mb-2" htmlFor="description">
                Description
                </label>
                <textarea
                className="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none"
                id="description"
                placeholder="Describe here..."
                maxLength="40"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required="true"
                />
                <p className="text-gray-500 text-sm ml-1 mt-0">Maximal Character : 40</p>
            </div>
            <div className="flex items-center justify-end">
                <button
                className="font-quicksand bg-custom-green-1 hover:drop-shadow-xl text-white font-bold py-1 px-7 rounded-40 focus:outline-none focus:shadow-outline"
                type="submit"
                >
                 Post
                </button>
            </div>
            </form>
        </div>
        
    </div>
    
  )
}

export default Form;