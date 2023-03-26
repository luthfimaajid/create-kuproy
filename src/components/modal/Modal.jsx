import React from 'react'

const Modal = ({ visible, onClose, postId, handleDeletePost }) => {

    const handleOnClose = () => {
        onClose()
    };

    const onDeleteClick = async () => {
        try {
            await handleDeletePost(postId);
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    if (!visible) return null;

    return (
        <div onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className="bg-white p-2 rounded w-1/3 pt-8 pl-0 pr-0 pb-0">
                <h1 className='ml-4 mt-0 font-quicksand font-semibold text-lg'>
                  Delete Post
                </h1>
                <p className="ml-4 mr-4 mb-12 font montserrat font-normal text-left text-base text-custom-gray-4">
                  Are you sure you want to delete your post? This action can not be undone.
                </p>
                <div className="containter mt-8 bg-custom-gray-5 text-right">
                    <button onClick={handleOnClose} className="mt-3 mb-3 mr-2 px-5 py-1 text-gray-700 rounded" >
                        Cancel
                    </button>
                    <button onClick={onDeleteClick} className="mt-3 mb-3 mr-2 px-5 py-1 bg-custom-red-1 text-white rounded" >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
