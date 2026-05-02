"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Check, LocationArrow } from "@gravity-ui/icons";
import { CiLocationOn, CiVoicemail } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { MdOutlinePhoneBluetoothSpeaker } from "react-icons/md";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="py-8 md:py-20  px-6 bg-amber-50"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-xl mb-3">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Templates</a>
              </li>
              <li>
                <a href="">Integrations</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-3">Social Links</h3>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-600 w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500 w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-sky-500 w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex gap-1 items-center">
                {" "}
                <CiLocationOn /> Dhaka, Bangladesh
              </li>
              <li className="flex gap-1 items-center">
                {" "}
                <GoMail /> saddam@admin.com
              </li>
              <li className="flex gap-1 items-center">
                <MdOutlinePhoneBluetoothSpeaker /> +880177777777777
              </li>
            </ul>
          </div>
          <div className="bg-base-100 rounded-2xl shadow-md p-3">
            <h3 className="text-xl mb-3">Get In Touch With Us</h3>
            <p className="text-xs text-amber-500 font-extrabold">
              AND WE WILL GET BACK TO YOU
            </p>
            <Form className="flex flex-col gap-2 mt-3">
              <TextField isRequired name="name" type="text">
                <Input
                  placeholder="Enter your name"
                  name="name"
                  className="bg-gray-200"
                />
                <FieldError />
              </TextField>
              <TextField isRequired name="email" type="email">
                <Input
                  placeholder="Enter your email"
                  name="email"
                  className="bg-gray-200"
                />
                <FieldError />
              </TextField>
              <TextField isRequired name="subject" type="text">
                <Input
                  placeholder="subject"
                  name="subject"
                  className="bg-gray-200"
                />
                <FieldError />
              </TextField>
              <TextArea
                name="message"
                placeholder="message"
                className="bg-gray-200"
              ></TextArea>
              <div className="flex gap-1">
                <Button type="submit" className="w-full">
                  <Check />
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-between mt-10 border-t border-gray-600 pt-5">
          <div>
            <p>©2026 Digitools. All rights reserved.</p>
          </div>
          <div className=" mb-5 sm:mb-0 flex justify-between gap-5 text-xs md:text-[16px]">
            <p>Privacy Policy</p>
            <p> Terms of Service </p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
