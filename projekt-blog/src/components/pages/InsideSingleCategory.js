import { useSelector } from "react-redux";
import { getSingleCategory } from "../../redux/postsRedux";
import { useParams } from 'react-router';
import SinglePost from "../views/SinglePost";
import { Container, Row } from "react-bootstrap";

const InsideSingleCategory = () => {

  const { categoryId } = useParams();

  const categoryPosts = useSelector(state => getSingleCategory(state, categoryId));

  if (categoryPosts.length === 0)
    return (<div>No posts in this category...</div>)

  return (
    <>
      <h1>Category : {categoryId}</h1>
      <Container className="d-flex justify-content-center flex-column">
        <Row>
        {categoryPosts.map(category =>
          <SinglePost key={category.id} {...category}/>)
          }
         </Row>
      </Container>

      </>
  )


}

export default InsideSingleCategory;