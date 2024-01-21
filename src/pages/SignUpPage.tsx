import React, { useState } from "react";
import { FormBottom, FormStyle, H1, SignWap } from "../styles";
import SocialBtn from "../components/SocialBtn/SocialBtn";
import MyInput from "../components/MyInput/MyInput";
import Or from "../components/Or/Or";
import MyButton from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios";

interface IUserData {
  name: string;
  email: string;
  key: string;
  secret: string;
}

const SignUpPage: React.FC = () => {
  const location = useNavigate();
  const [userData, setUserData] = useState<IUserData>({
    name: "heloo",
    email: "heloo@gmail.com",
    key: "heloo",
    secret: "heloo",
  });

  async function signUp() {
    const res = await axiosInstance
      .post("/signup", userData)
      .catch((err) => {console.log(err)});
      

    if (res?.status === 200) {
      localStorage.setItem("username", res?.data.data.key);
      localStorage.setItem("password", res?.data.data.secret);
      location("/");
    }
  }

  return (
    <SignWap>
      <FormStyle>
        <H1>Sign up</H1>
        <SocialBtn
          variant="google"
          value={"asdasd"}
          onClick={() => {}}
        />
        <SocialBtn
          variant="facebook"
          value={"asdasd"}
          onClick={() => {}}
        />
        <Or />

        <MyInput
          value={userData.name}
          onChange={(e: any) =>
            setUserData({ ...userData, name: e.target.value })
          }
          title="Your name"
          placeholder={"Enter your name"}
        />
        <MyInput
          value={userData.email}
          onChange={(e: any) =>
            setUserData({ ...userData, email: e.target.value })
          }
          title="Your email"
          placeholder={"Enter your email"}
        />
        <MyInput
          value={userData.key}
          onChange={(e: any) =>
            setUserData({ ...userData, key: e.target.value })
          }
          title="Your username"
          placeholder={"Enter your username"}
        />
        <MyInput
          value={userData.secret}
          onChange={(e: any) =>
            setUserData({ ...userData, secret: e.target.value })
          }
          type="password"
          title="Your password"
          placeholder={"Enter your password"}
        />

        <MyButton onClick={signUp} />
        <FormBottom>
          Already signed up? <Link to="/signin">Go to sign in.</Link>
        </FormBottom>
      </FormStyle>
    </SignWap>
  );
};

export default SignUpPage;

