import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import { GlobalStyles } from "./components/Styles/Global";

const Home = React.lazy(() => import("./pages/Home"));
const Detail = React.lazy(() => import("./pages/Detail"));

function App() {
  return (
    <Suspense fallback={<div>...</div>}>
      <Header />
      <GlobalStyles />
      <Routes>
        <Route
          path="/react-recipes"
          element={<Navigate replace to="/home" />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/home/cuisine/:type" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Suspense>
  );
}

export default App;
