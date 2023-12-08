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
import BuyerDashboard from "./pages/BuyerDashboard";

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
          path="/commodity-details/:id"
          element={<CommodityDetails />}
        />
        <Route exact path="/farmer-dashboard" element={<FarmerDashboard />}/>
        <Route exact path="/buyer-dashboard" element={<BuyerDashboard />}/>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
