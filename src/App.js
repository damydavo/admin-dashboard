import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NavBar, SideBar } from "./pages";


const App = () => {
  return ( 
    <>
      <div className="bg-primary">
        <NavBar />

        <div className=" flex">
          <SideBar />

          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Router>

        </div>
      </div>
    </>




  );
}

export default App;