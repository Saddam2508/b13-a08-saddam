"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  return (
    <div className="w-110 mx-auto my-30 px-5 py-10 shadow-md rounded-lg">
      <Form className="flex flex-col gap-6">
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input name="name" value={user?.name} />
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="text">
          <Label>Photo-url(link)</Label>1112
          <Input name="image" value={user?.image || ""} />
          <FieldError />
        </TextField>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input name="email" value={user?.email} />
          <FieldError />
        </TextField>
        <TextField isRequired minLength={8} name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter your password" name="password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
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
