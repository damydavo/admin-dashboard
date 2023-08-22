import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NavBar, SideBar, User, Product } from "./pages";

const App = () => {
  return ( 
    <>
      <div className="bg-primary">
        <NavBar />

        <div className=" flex">

          <Router>
            <SideBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/user' element={<User />} />
              <Route path='/products' element={<Product />} />
            </Routes>
          </Router>

        </div>
      </div>
    </>




  );
}

export default App;