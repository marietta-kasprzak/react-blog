import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const ModalButton = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeletePost = (e) => {
    e.preventDefault();
    dispatch(deletePost(props.postId));
    handleClose();
    navigate('/');
  }

  return (

    <>
      <Button  className=' align-self-start w-50 mx-5'variant='outline-danger' onClick={handleShow}>
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this post from the app?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDeletePost}>Remove</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




export default ModalButton;