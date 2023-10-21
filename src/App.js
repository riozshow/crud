import "./styles.scss";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./components/pages/HomePage";
import PostPage from "./components/pages/PostPage";
import AboutPage from "./components/pages/AboutPage";
import NotFound from "./components/pages/NotFound";
import NavBar from "./components/views/NavBar/NavBar";
import Footer from "./components/views/Footer/Footer";
import PostAdd from "./components/features/PostAdd";
import PostEdit from "./components/features/PostEdit";

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/posts/:id" element={<PostPage />}></Route>
        <Route path="/posts/add" element={<PostAdd />}></Route>
        <Route path="/posts/edit/:id" element={<PostEdit />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
