import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Footer } from "./components/Footer";
import { Posts } from "./components/Posts";
import { SelectedPost } from "./components/Posts/SelectedPost";
import { SearchPosts } from "./components/Posts/SearchedPosts";

function App() {
  return (
    <BrowserRouter basename="/">
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Posts/>}/>
          <Route path="posts">
              <Route path="search">
                  <Route path=":searchValue" element={<SearchPosts />}/>
                </Route>
              <Route path=":id" element={<SelectedPost/>} />
          </Route>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
