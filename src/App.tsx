import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer, Posts, SelectedPost, SearchPosts } from "./components";
import { useSelector } from 'react-redux';
import { IStoreState, THEMES } from './types'

const App = () => {
  const theme = useSelector((state: IStoreState) => state.ui.theme)
  return (
    <BrowserRouter basename="/">
      <div className={`${theme === THEMES.DARK ? "dark" : ""}`}>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
