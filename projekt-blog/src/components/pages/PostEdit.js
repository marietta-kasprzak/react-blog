import { useParams } from "react-router-dom";
import EditPostForm from "../features/EditPostForm";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getPostById } from "../../redux/postsRedux";
import { useEffect } from "react";



const PostEdit = () => {

  const { postId } = useParams();
  const post = useSelector(state => getPostById(state, postId))
  const navigate = useNavigate();

  useEffect(() => {
    if (!post) navigate("/");
  }, [])

  if (!post) return null;
  return (
    <>
      <h1>Postedit</h1>
      <EditPostForm postId={postId} />
    </>
  )

}

export default PostEdit;