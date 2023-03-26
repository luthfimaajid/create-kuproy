import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Bottom from '../bottom/Bottom';
import { Form as FormBoots, Button } from "react-bootstrap";

const Form = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const data = { title, location, description };
        try {
          const response = await axios.post('http://localhost:8080/api/note/', data);
          console.log('Note created successfully!');
          navigate('/posts');
        } catch (error) {
          console.error('Error creating note:', error);
        }
      };
  
    return (
      <div className="container mt-5 max-w-w1">
        <div className="bg-white-100 rounded-3 shadow p-6 m-5">
          <FormBoots onSubmit={handleSubmit}>
            <FormBoots.Group controlId="formBasicTitle" className="ms-5 me-5 pt-5">
              <FormBoots.Label className="font-quicksand fw-medium fs-5">Title</FormBoots.Label>
              <FormBoots.Control
                className="font-montserrat fw-normal fs-6"
                type="text"
                placeholder="Input title here..."
                maxLength="10"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required="true"
              />
              <FormBoots.Text className="text-muted ml-1 mt-0" muted>Maximal Character : 10</FormBoots.Text>
            </FormBoots.Group>

            <FormBoots.Group controlId="formBasicLocation" className="ms-5 me-5 pt-2">
              <FormBoots.Label className="font-quicksand fw-medium fs-5">Location</FormBoots.Label>
              <FormBoots.Control
                className="font-montserrat fw-normal fs-6"
                type="text"
                maxLength="25"
                placeholder="Bandung, Jawa Barat"
                value={location}
                required="true"
                onChange={(e) => setLocation(e.target.value)}
              />
              <FormBoots.Text className="text-muted ml-1 mt-0" muted>Maximal Character : 25</FormBoots.Text>
            </FormBoots.Group>

            <FormBoots.Group controlId="formBasicDescription" className="ms-5 me-5 pt-2 pb-4">
              <FormBoots.Label className="font-quicksand fw-medium fs-5">Description</FormBoots.Label>
              <FormBoots.Control
                className="font-montserrat fw-normal fs-6"
                as="textarea"
                rows={6}
                maxLength="40"
                placeholder="Describe here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required="true"
              />
              <FormBoots.Text className="text-muted ml-1 mt-0" muted>Maximal Character : 40</FormBoots.Text>
            </FormBoots.Group>

            <div className="d-flex justify-content-end">
              <Button className="bg-success text-white rounded-pill d-flex align-items-center justify-content-center me-5 px-4 ml-auto mb-3" type="submit">
                Create
              </Button>
            </div>
          </FormBoots>
        </div>
        <Bottom />
      </div>
  )
}

export default Form;