"use client";
import { authClient } from "@/lib/auth-client";

const GoogleLoginPage = () => {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  signIn();

  return <div></div>;
};

export default GoogleLoginPage;
