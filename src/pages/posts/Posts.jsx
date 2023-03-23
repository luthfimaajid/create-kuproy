import axios from 'axios';
import Topbar from '../../components/topbar/Topbar';
import Navbar from '../../components/navbar/Navbar';
import Bottom from '../../components/bottom/Bottom';
import { Link, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Modal from '../../components/modal/Modal';
import { useParams } from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const handleOnClose = () => setShowModal(false)
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        let response = await axios.get("http://localhost:8080/api/note");
        response = response.data.map(response => {
            return {
                id: response._id || response.id,
                title: response.title,
                description: response.description,
                location: response.location,
            }
        })

        setPosts(response);
    };
    
    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/note/${id}`);
            getPosts();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeletePost = async (id) => {
        try {
            await deletePost(id);
            setPostId(id);
            getPosts();
            setShowModal(true);
        } catch (error) {
            console.log(error);
        }
        
    }

    const rows = [];
    for (let i = 0; i < posts.length; i += 2) {
        rows.push(posts.slice(i, i + 2));
    }

  return (
    <div>
        <Topbar />
        <Navbar />
        <div className="md:container md:mx-auto ">
        {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center justify-center">
            {row.map(post => (
                <div key={post.id} className="flex justify-center items-center ">
                <div className="mr-6 ml-6 mt-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="max-h-56 text-xl font-quicksand mb-4 font-semibold">{post.title}</h2>
                    <p className="text-13 font-montserrat font-light ">{post.location}</p>
                    <p className="font-montserrat font-regular text-black leading-relaxed w-96 break-words">
                    {post.description}
                    </p>
                    <ul className="flex items-center mt-6 justify-center">
                    <li className="rounded-40 bg-custom-green-1 hover:drop-shadow-xl items-center w-28">
                        <Link to={`/update/${post.id}`} className="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center ">    
                        <img src={`${process.env.PUBLIC_URL}/assets/edit_icon.svg`} alt="Edit_icon" className="pr-3 w-7 h-7" />
                        Edit
                        </Link>
                    </li>
                    <li className="ml-6 rounded-40 bg-custom-red-1 hover:drop-shadow-xl items-center w-28"> 
                        <Link className="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center " onClick={() => setShowModal(post.id)}>
                        <img src={`${process.env.PUBLIC_URL}/assets/trash_icon.svg`} alt="Delete_icon" className="pr-3 w-7 h-7" />
                        Delete
                        </Link>
                    </li>
                    </ul>
                </div>
                {showModal === post.id && (
                    <Modal visible={true} onClose={() => setShowModal(null)} postId={post.id} handleDeletePost={handleDeletePost} />
                )}
                </div>
            ))}
            </div>
        ))}
        </div>

        <Bottom />
    </div>
  )
}

export default Posts
