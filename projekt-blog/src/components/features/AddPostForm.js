import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm";

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    dispatch(addPost(post ));
    navigate('/');
  }

  return (
    <>
      <div className="w-50 ps-5">
        <PostForm action={handleSubmit} actionText='Add post' />
      </div>
    </>
  )


}

export default AddPostForm;