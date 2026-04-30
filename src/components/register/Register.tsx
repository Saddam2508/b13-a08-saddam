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
  Link,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Register = () => {
  const router = useRouter();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: formObj.name as string,
      image: formObj.image as string,
      email: formObj.email as string,
      password: formObj.password as string,
      callbackURL: "/",
    });

    if (data) {
      router.push("/login");
    }
  };

  return (
    <div className="w-110 mx-auto my-30 px-5 py-10 shadow-md rounded-lg">
      <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" name="name" />
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="text">
          <Label>Photo-url(link)</Label>
          <Input placeholder="Image url" name="image" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" name="email" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
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

export default Register;
