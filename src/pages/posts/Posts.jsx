import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CustomModal from '../../components/modal/CustomModal';
import Topbar from '../../components/topbar/Topbar';
import Navbar from '../../components/navbar/Navbar';
import Bottom from '../../components/bottom/Bottom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        let responses = await axios.get("http://localhost:8080/api/note");
        responses = responses.data.map(data => {
            return {
	            id: data._id || data.id,
			    title: data.title,
			    location: data.location,
			    description: data.description
            }
        })

        setPosts(responses);
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
    <>
        <Topbar />
        <Navbar />
        <Container className='rounded'>
            {rows.map((row, rowIndex) => (
                <Row key={rowIndex} className="justify-content-center">
                    {row.map(post => (
                        <Col key={post.id} md={6}>
                            <Card className="shadow border-0 mt-5">
                                <Card.Body className="">
                                    <Card.Title className='font-quicksand fw-semibold text-xl'>{post.title}</Card.Title>
                                    <Card.Text className='font-montserrat fw-normal text-13'>{post.location}</Card.Text>
                                    <Card.Text className='font-montserrat fw-medium'>{post.description}</Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <Button variant="success" as={Link} to={`/update/${post.id}`} className="bg-success text-white rounded-pill d-flex align-items-center justify-content-center me-3 px-4 ">
                                            <img src={`${process.env.PUBLIC_URL}/assets/edit_icon.svg`} alt="Edit_icon" className="icon me-2" />
                                            Edit
                                        </Button>
                                        <Button variant="danger" onClick={() => setShowModal(post.id)} className="text-white bg-danger rounded-pill d-flex align-items-center justify-content-center px-3">
                                            <img src={`${process.env.PUBLIC_URL}/assets/trash_icon.svg`} alt="Delete_icon" className="icon me-2" />
                                            Delete
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                            {showModal === post.id && (
                                <CustomModal visible={true} onClose={() => setShowModal(null)} postId={post.id} handleDeletePost={handleDeletePost} />
                            )}
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
        <Bottom />
    </>
  )
}

export default Posts
