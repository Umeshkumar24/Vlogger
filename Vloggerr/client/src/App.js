import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header";
import Home from "./Components/Home/home";
import Diaries from "./Components/Diaries/Diaries";
import Auth from "./Components/Auth/Auth";
import Add from "./Components/Diaries/Add";
import Profile from "./Components/Profile/Profile";
import DiaryUpdate from "./Components/Diaries/DiaryUpdate";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);
  return (
    <div>
      <header><Header/></header>
      <section>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/diaries" element={<Diaries/>}/>
          <Route path="/auth" element={<Auth/>}/>
          {isLoggedIn && (
            <>
              <Route path="/add" element={<Add />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<DiaryUpdate />} />{" "}
            </>
          )}
        </Routes>
      </section>
    </div>
  );
}

export default App;
