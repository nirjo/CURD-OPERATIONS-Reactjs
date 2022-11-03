import React from "react";
import { Route, Routes } from "react-router-dom";
import Biodata from "./Biodata";
import LandingPage from "./LandingPage";

import View from './Biodata/View'
import {
  BASE_ROUTE,
  LANDING_ROUTE,
} from "./_main/routeConstants";

function App() {
  return (
      <Routes>
        <Route path={BASE_ROUTE} element={<Biodata />} />
        <Route path={LANDING_ROUTE} element={<LandingPage />} />
        <Route path='/view/:id' element={<View />}  />
      </Routes>
  );
}

export default App;
