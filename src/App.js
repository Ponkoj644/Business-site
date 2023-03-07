import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./Components/Pages/AboutPage/AboutPage";
import BlogPage from "./Components/Pages/BlogPage/BlogPage";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Reg from "./Components/Pages/Reg/Reg";
import SignIn from "./Components/Pages/SignIn/SignIn";
import Footer from "./Components/Section/Footer/Footer";
import Header from "./Components/Section/Header/Header";
import NotFound from "./Components/Section/NotFound/NotFound";
import RequireAuth from "./Components/Section/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <BlogPage />
            </RequireAuth>
          }
        />
        <Route path="/reg" element={<Reg />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
