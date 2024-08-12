import { useEffect, useState } from "react";
import "./App.css";

import { Route, Router, useLocation } from "react-router-dom";
import Loader from "./common/Loader/Loader";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      {/* <Router>
        <Route
          path="/"
          element={
            <>
              <Dashboard />
            </>
          }
        />
      </Router> */}
    </DefaultLayout>
  );
}

export default App;
