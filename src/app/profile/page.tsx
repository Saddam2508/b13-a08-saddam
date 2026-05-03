"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile | category-A8-Apple",
};

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  if (!user) return null;
  return (
    <div className="w-full max-w-110 mx-auto my-30 px-5 py-10 shadow-md rounded-lg">
      <h2 className="text-[1.75rem] sm:text-4xl text-center my-3">
        My Profile
      </h2>
      <div className="flex justify-center">
        <div className="avatar avatar-online">
          <div className="w-24 rounded-full">
            <Image
              src={
                user.image ||
                "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
              }
              alt="profile"
              width={20}
              height={20}
              unoptimized
            />
          </div>
        </div>
      </div>
      <Form className="flex flex-col gap-6 w-full">
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input name="name" value={user?.name} readOnly className="w-full" />
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="text">
          <Label>Photo-url(link)</Label>
          <Input
            name="image"
            value={user?.image || ""}
            readOnly
            className="w-full"
          />
          <FieldError />
        </TextField>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input name="email" value={user?.email} readOnly className="w-full" />
          <FieldError />
        </TextField>
      </Form>
      <div className="mt-3">
        <Link href={`/profile/${user?.id}`} className="btn w-full">
          <Check />
          Update
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
