"use client"

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <motion.div initial={{opacity: 0, y: 150}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                 transition={{
                duration: 0.45,
                ease: "easeOut",
            }} className="bg-black py-8 md:py-20  text-white px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="space-y-3">
            <h2 className=" text-2xl md:text-5xl mb-5">DigiTools</h2>
            <p>
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
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
            <h3 className="text-xl mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="">Documentation</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
              <li>
                <a href="">Contact</a>
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
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-between text-white mt-10 border-t border-gray-600 pt-5">
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