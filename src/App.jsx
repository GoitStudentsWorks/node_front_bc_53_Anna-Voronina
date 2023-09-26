import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { selectRefresh } from "./redux/auth/authSelectors";
import { refreshThunk } from "./redux/auth/authOperations";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));
const AddPetPage = lazy(() => import("./pages/AddPetPage/AddPetPage"));
const OurFriendsPage = lazy(() =>
  import("./pages/OurFriendsPage/OurFriendsPage")
);
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="notices" element={<NoticesPage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="add-pet" element={<AddPetPage />} />
            <Route path="friends" element={<OurFriendsPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
