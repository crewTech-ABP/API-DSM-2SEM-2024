import { Route, Routes } from "react-router-dom";
import { NotFoundPage, SignInPage, SignUpPage, MainPage } from "../pages";


export default function UnsignedRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
