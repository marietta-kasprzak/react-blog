import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { editPost } from '../../redux/postsRedux';
import { getPostById } from '../../redux/postsRedux';
import shortid from 'shortid';
import { dateToStr } from '../../utils/dateToStr';

const EditPostForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = props.postId;

  const post = useSelector((state) => getPostById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
    console.log(post.title);
  };

  return (
    <>
    <PostForm action={handleSubmit} actionText='Edit post'  title={post.title} author={post.author} publishedDate={post.publishedDate} category={post.category} shortDescription={post.shortDescription} content={post.content}/>
    </>
  );
};

export default EditPostForm;