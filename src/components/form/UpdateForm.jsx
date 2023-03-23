import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    // const [_id, setId] = useState("");
    // const [posts, setPosts] = useState("");
    // const [error, setError] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    // const { _id } = useParams();
    const { id } = useParams();

    useEffect(() => {
      getPostById();
    }, [id]);

    const getPostById = async () => {
      const response = await axios.get(`http://localhost:5000/api/post/${id}`)
      setTitle(response.data.title);
      setLocation(response.data.location);
      setDescription(response.data.description);
      // console.log(response.data._id)
      // setId(response.data._id);
    };
   
    const updatePost = async (event) => {
      event.preventDefault();

      const data = {title, location, description}
      try {
        const response = await axios.patch(`http://localhost:5000/api/post/${id}`, data);
        console.log('Note updated successfully!');
        navigate("/posts");
      } catch (error) {
        console.error('Error updating note:', error);
      }
    };

    
  
    return (
    <div className="flex items-center justify-center mt-10">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-w1 w-full">
            <form onSubmit={updatePost} className="w-full">
            <div className="mb-6">
                <label className="font-quicksand block font-semibold text-black mb-2" htmlFor="title">
                Title
                </label>
                <input
                className="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="title"
                type="text"
                placeholder="Input title here..."
                maxLength="10"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label className="font-quicksand block font-semibold text-black mb-2" htmlFor="location">
                Location
                </label>
                <input
                className="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="location"
                type="text"
                maxLength="25"
                placeholder="Bandung, Jawa Barat"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label className="font-quicksand block font-semibold text-black mb-2" htmlFor="description">
                Description
                </label>
                <textarea
                className="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="description"
                placeholder="Describe here..."
                maxLength="40"
                rows="6"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-end">
                <button
                className="font-quicksand bg-custom-green-1 hover:bg-custom-green-2 text-white font-bold py-1 px-7 rounded-40 focus:outline-none focus:shadow-outline"
                type="submit"
                >
                <a>Update</a>
                
                </button>
            </div>
            </form>
        </div>
    </div>

  )
}

export default UpdateForm
