import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Footer } from "./components/Footer";
import { Posts } from "./components/Posts";

function App() {
  return (
    <BrowserRouter basename="/">
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Posts/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
