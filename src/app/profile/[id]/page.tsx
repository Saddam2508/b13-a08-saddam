"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [userName, setUserName] = useState(user?.name);
  const [userImage, setUserImage] = useState(user?.image);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.updateUser({
      name: formObj.name as string,
      image: formObj.image as string,
    });
    if (error) {
      toast.error(error.message);
      return;
    }

    if (data) {
      toast.success("User update successfully");
      redirect("/profile");
    }
  };
  return (
    <div className="w-110 mx-auto my-30 px-5 py-10 shadow-md rounded-lg">
      <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="text">
          <Label>Photo-url(link)</Label>
          <Input
            name="image"
            value={userImage || ""}
            onChange={(e) => setUserImage(e.target.value)}
          />
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit" className="w-full">
            <Check />
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProfilePage;
