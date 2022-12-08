import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import shortid from "shortid";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateToStr } from "../../utils/dateToStr";
import { useForm } from "react-hook-form";
import Posts from "./Posts";
import { useSelector } from "react-redux";



  const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [category,setCategory] = useState(props.category || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    // const { postId } = useParams();

    const postCategories = useSelector(state =>  state.postsCategory );
    console.log(postCategories);

    // const categoriesForTheSelectField = postCategories.map(category => <option key={category.id} value={category.category}>{category.description}</option>)

    const handleSubmit = () => {

      // e.preventDefault();
      setContentError(!content)
      setDateError(!publishedDate)
      if(content && publishedDate) {
        action({ title, author, publishedDate,category, shortDescription, content })
      }
    }

    return (

    <div className="w-100 ps-5" >
      <Form onSubmit={validate(handleSubmit)}>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control {...register("title", { required: true, minLength: 3 })} type="text " placeholder="Title " value={title} onChange={ e => setTitle(e.target.value) } />
          {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control {...register("author", { required: true, minLength: 3 })} type="text " placeholder="Author "  value={author} onChange={ e => setAuthor(e.target.value) }/>
          {errors.title && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="published">
          <Form.Label>Published</Form.Label>
          <DatePicker selected={publishedDate} onChange={date => setPublishedDate(date)} />
          {/* <Form.Control type="text " placeholder="Published date " value={publishedDate} onChange={ e => setPublishedDate(e.target.value) } /> */}
          {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
            <Form.Select  value={category} onChange={e => setCategory(e.target.value)} aria-label="Default select example">
              <option>Select category</option>
              {postCategories.map(category => <option key={category.id} >{category.description}</option>)}


          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="shortdescription">
          <Form.Label>Short description</Form.Label>
          <Form.Control {...register("shortdescription", { required: true, minLength: 20 })} as="textarea" rows={3} value={shortDescription} onChange={ e => setShortDescription(e.target.value) }/>
          {errors.title && <small className="d-block form-text text-danger mt-2">Short description is too short (min is 20)</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="maincontent">
          <Form.Label >Main content</Form.Label>
          {/* <Form.Control as="textarea" rows={4} value={content} onChange={ e => setContent(e.target.value) }/> */}
          <ReactQuill    theme="snow" rows={4} value={content} onChange={setContent} />
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </Form.Group>

        <Button type="submit" variant="primary" >{actionText}</Button>

      </Form>

    </div>


  )

  }

  export default PostForm;