import { Route, Routes } from "react-router-dom";
import { BooksListPage, NotFoundPage, SignInPage, SignUpPage } from "../pages";
import { axiosInstance } from "../axios";
import md5 from "md5";
const RouterPage = () => {
  const headers = {
    Key: localStorage.getItem("username"),
    Sign: md5(`get/myself{}${localStorage.getItem("password")}`),
  };

  async function isAuth() {
    const res = await axiosInstance
      .get("/myself", {
        headers,
      })
      .catch((err) => {
        console.log(err);
      });

    return res?.data;
  }

  // api`da signUp`dan boshqasi ishlamayapti
  // dozumentatsiyadagi kabi va boshqa usularda ham qilib ko'rdim
  // baribir api ishlamadi

  return (
    <Routes>
      <Route path="/" element={<BooksListPage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouterPage;
