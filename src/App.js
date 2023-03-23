
import Home from "./Pages/Home";
import Holidays from "./Pages/Holidays";
import Flightinfo from "./Pages/Flightinfo";
import Contact from "./Pages/Contact";
import {
  createBrowserRouter, RouterProvider, Route, createRoutesFromElements
} from "react-router-dom";
import Rootlayout from "./Rootlayout";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(

    <Route>

      <Route element={<Rootlayout />} >

        <Route path="/" element={<Home />} ></Route>
        <Route path="/holidays" element={<Holidays />} ></Route>
        <Route path="/flightinfo" element={<Flightinfo />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>

      </Route>

    </Route>

  ));

  return (
    <>
      <RouterProvider router={router} ></RouterProvider>

    </>
  );
}

export default App;
