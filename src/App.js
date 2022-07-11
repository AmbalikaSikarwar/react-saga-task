import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Header";
import Enquiries from "./Components/Dashboard/Enquiries";
import FAQ from "./Components/Dashboard/FAQ";
import Profile from "./Components/Dashboard/Profile";
import PageNotFound from "./Components/PageNotFound";

const Dashboard = lazy(() => import("./Components/Dashboard"));

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  let token = localStorage.getItem("Token");
  // console.log("llllll", token);

  useEffect(() => {
    if (token && pathname == "/") {
      navigate("/dashboard");
    } else if (!token && pathname == "/dashboard") {
      navigate("/");
    } else {
      navigate(pathname);
    }
  }, [token]);

  return (
    <div className="App">
      <ToastContainer />
      <Suspense
        fallback={
          <div>
            <Box
              sx={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          </div>
        }
      >
        <Routes>
          {token ? (
            <>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/enquiries" element={<Enquiries />} />
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}

          <Route path="*" exact={true} element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
