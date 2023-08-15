import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NavBar, SideBar, User } from "./pages";


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
            </Routes>
          </Router>

        </div>
      </div>
    </>




  );
}

export default App;