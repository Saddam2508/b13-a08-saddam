import Login from "@/components/login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | category-A8-Apple",
};

const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
