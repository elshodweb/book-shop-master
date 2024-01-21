import React from "react";
import { FormBottom, FormStyle, H1, SignWap } from "../styles";
import SocialBtn from "../components/SocialBtn/SocialBtn";
import MyInput from "../components/MyInput/MyInput";
import Or from "../components/Or/Or";
import MyButton from "../components/Button/Button";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <SignWap>
      <FormStyle>
        <H1>Sign in</H1>
        <SocialBtn variant="google" value={"asdasd"} onClick={() => {}} />
        <SocialBtn variant="facebook" value={"asdasd"} onClick={() => {}} />
        <Or />

        <MyInput title="Your name" placeholder={"Enter your name"} />
        <MyInput title="Your email" placeholder={"Enter your email"} />
        <MyInput title="Your username" placeholder={"Enter your username"} />

        <MyButton />

        <FormBottom>
          Already signed up? <Link to="/signup">Go to sign in.</Link>
        </FormBottom>
      </FormStyle>
    </SignWap>
  );
};

export default SignInPage;

