import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Bottom from "../bottom/Bottom";

const UpdateForm = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPostById();
  }, [id]);

  const getPostById = async () => {
    const response = await axios.get(`http://localhost:8080/api/note/${id}`)
    setTitle(response.data.title);
    setLocation(response.data.location);
    setDescription(response.data.description);
  };

  const updatePost = async (event) => {
    event.preventDefault();

    const data = { title, location, description }
    try {
      const response = await axios.patch(`http://localhost:8080/api/note/${id}`, data);
      console.log('Note updated successfully!');
      navigate("/posts");
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return (
    <div className="container mt-5 max-w-w1">
      <div className="bg-white-100 rounded-3 shadow p-6 m-5">
        <Form onSubmit={updatePost}>
          <Form.Group controlId="formBasicTitle" className="ms-5 me-5 pt-5">
            <Form.Label className="font-quicksand fw-medium fs-5">Title</Form.Label>
            <Form.Control
              className="font-montserrat fw-normal fs-6"
              type="text"
              placeholder="Input title here..."
              maxLength="10"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Text className="text-muted ml-1 mt-0" muted>Maximal Character : 10</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicLocation" className="ms-5 me-5 pt-2">
            <Form.Label className="font-quicksand fw-medium fs-5">Location</Form.Label>
            <Form.Control
              className="font-montserrat fw-normal fs-6"
              type="text"
              maxLength="25"
              placeholder="Bandung, Jawa Barat"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Form.Text className="text-muted ml-1 mt-0" muted>Maximal Character : 25</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicDescription" className="ms-5 me-5 pt-2 pb-4">
            <Form.Label className="font-quicksand fw-medium fs-5">Description</Form.Label>
            <Form.Control
              className="font-montserrat fw-normal fs-6"
              as="textarea"
              rows={6}
              maxLength="40"
              placeholder="Describe here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Text className="text-muted ml-1 mt-0" muted>Maximal Character : 40</Form.Text>
          </Form.Group>
          

          <div className="d-flex justify-content-end">
            <Button className="bg-success text-white rounded-pill d-flex align-items-center justify-content-center me-5 px-4 ml-auto mb-3" type="submit">
              Update
            </Button>
          </div>
          
        </Form>
      </div>
      <Bottom />
    </div>
  )
}

export default UpdateForm
