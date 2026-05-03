import { Metadata } from "next";
import Profile from "../../components/profile/Profile";

export const metadata: Metadata = {
  title: "Profile | category-A8-Apple",
};

const ProfilePage = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default ProfilePage;
