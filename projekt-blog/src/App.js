import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SinglePost from './components/views/SinglePost';
import PostEdit from './components/pages/PostEdit';
import PostAdd from './components/pages/PostAdd';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import { Container } from 'react-bootstrap'
import InsideSinglePost from './components/pages/InsideSinglePost';
import Posts from './components/features/Posts';
import EditPostForm from './components/features/EditPostForm';
import Categories from './components/views/Categories';
import InsideSingleCategory from './components/pages/InsideSingleCategory';


function App() {



  return (
    <Container>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<InsideSinglePost/>}/>
          {/* <Route path="/post/:postId/InsideSinglePost" element={<InsideSinglePost/>}/> */}
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:postId" element={<PostEdit />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<InsideSingleCategory />} />
          <Route path="/about" element={<About />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Container>

  );
}

export default App;