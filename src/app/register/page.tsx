import Register from "@/components/register/Register";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register | category-A8-Apple",
};

const RegisterPage = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
