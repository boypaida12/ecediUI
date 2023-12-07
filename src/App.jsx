import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CommodityDetails from "./pages/CommodityDetails";
import Register from "./pages/Authentication/Register";

{/* <Navigation/>
     <LandingPage/> */}
function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        
          <Route index element={<LandingPage />} />
          <Route exact path="register" element={<Register/>}/>
          <Route exact path="/learn-more/commodity-details/:name" element={<CommodityDetails />}/>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
