import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CommodityDetails from "./pages/CommodityDetails";
import Register from "./pages/Authentication/Register";
import Dashboard from "./pages/Dashboard";
import SideBar from "./components/sideBar/SideBar";

{
  /* <Navigation/>
     <LandingPage/> */
}
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<SideBar />} />
        {/* <Route exact path="register" element={<Register />} />
        <Route
          exact
          path="/learn-more/commodity-details/:name"
          element={<CommodityDetails />}
        />
        <Route exact path="/dashboard" element={<Dashboard />}/> */}
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
