import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import { dateToStr } from '../../utils/dateToStr';

const Post = (props) => {
  return (
        <Col  xs='12' md='6' lg='4' >
          <Card border="light">
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Subtitle className="fw-bold">Author: <span className='fw-normal'>{props.author}</span></Card.Subtitle>
              <Card.Subtitle className="fw-bold">Published: <span className='fw-normal'>{dateToStr(props.publishedDate)}</span></Card.Subtitle>
              <Card.Subtitle className="fw-bold">Category: <span className='fw-normal'>{props.category}</span></Card.Subtitle>
              <Card.Text >
            {/* {props.content} */}

                <p dangerouslySetInnerHTML={{ __html: props.content }} />

              </Card.Text>
              {/* <Link to={`/post/${props.id}`}>
                <Button variant="primary">Readmore</Button>
              </Link> */}
            </Card.Body>
          </Card>
        </Col>
  )
}
export default Post;