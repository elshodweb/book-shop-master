import { Route, Routes } from "react-router-dom";
import { BooksListPage, NotFoundPage, SignInPage, SignUpPage } from "../pages";

const RouterPage = () => {
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
