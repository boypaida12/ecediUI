import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CommodityDetails from "./pages/CommodityDetails";
import FarmerDashboard from "./pages/FarmerDashboard";
import FarmerAuth from "./pages/Authentication/FarmerAuth";
import BuyerAuth from "./pages/Authentication/BuyerAuth";

{
  /* <Navigation/>
     <LandingPage/> */
}
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<LandingPage />} />
        <Route exact path="register-as-farmer" element={<FarmerAuth />} />
        <Route exact path="register-as-buyer" element={<BuyerAuth />} />
        <Route
          exact
          path="/learn-more/commodity-details/:name"
          element={<CommodityDetails />}
        />
        <Route exact path="/farmer-dashboard" element={<FarmerDashboard />}/>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
