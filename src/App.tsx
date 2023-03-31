import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NewCar from "./components/NewCar/NewCar";
import UpdateCar from "./components/Update/UpdateCar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<NewCar />} />
        <Route path="/update/:id" element={<UpdateCar />} />
      </Routes>
    </BrowserRouter>

  )
}


export default App;