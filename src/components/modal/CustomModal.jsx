import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ visible, onClose, postId, handleDeletePost }) => {

    const handleOnClose = () => {
        onClose();
    };

    const onDeleteClick = async () => {
        try {
            await handleDeletePost(postId);
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal show={visible} onHide={handleOnClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete your post? This action can not be undone.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleOnClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onDeleteClick}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;