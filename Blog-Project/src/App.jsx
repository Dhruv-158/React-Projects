/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./Appwrite/Auth";
import { login, logout } from "./Store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";



function App() {

  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }))
      } else {
        dispatch(logout())
      }
    }).finally(() => setloading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between  bg-slate-700">
      <div className="w-full block">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : (null)

}

export default App;
