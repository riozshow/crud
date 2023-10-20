import "./styles.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PostPage from "./components/pages/PostPage";
import PostEditPage from "./components/pages/PostEditPage";
import AboutPage from "./components/pages/AboutPage";
import NotFound from "./components/pages/NotFound";
import { Container } from "react-bootstrap";
import NavBar from "./components/views/NavBar/NavBar";
import Footer from "./components/views/Footer/Footer";

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/posts/:id" element={<PostPage />}></Route>
        <Route path="/posts/add" element={<PostEditPage />}></Route>
        <Route path="/posts/edit/:id" element={<PostEditPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
