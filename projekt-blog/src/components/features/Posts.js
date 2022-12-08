import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/store";
import SinglePost from '../views/SinglePost';
import { Container, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Posts = () => {

  const posts = useSelector(getAllPosts);

  return (
    <>
      <Container className="d-flex flex-row justify-content-between mb-5">
        <h1>All posts</h1>
        <Link to={'/post/add'}>
          <Button variant="info">Add Post</Button>
        </Link>
      </Container>
      <Container className="d-flex justify-content-center flex-column">
        <Row>
            {posts.map(post => <SinglePost key={post.id} {...post}/>)}
        </Row>
      </Container>


    </>

  )
}

export default Posts;