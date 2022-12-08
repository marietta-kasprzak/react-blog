import { Container, Row, Button, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import InsideSingleCategory from "../pages/InsideSingleCategory";
import shortid from "shortid";

const Categories = () => {

  const postCategories = useSelector(state =>  state.postsCategory );

  return (
    <Container className="d-flex flex-column justify-content-between mb-5">
      <h1>All categories</h1>
      <ListGroup>
        {postCategories.map(category =>

          <ListGroup.Item key={shortid()}>
            <Link key={category.id} categorydescription={category.description}  to={`/categories/${category.description}`}>
              {category.description}

            </Link>
          </ListGroup.Item>)}

      </ListGroup>
    </Container>



  )


}

export default Categories;