"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import ContactSection from "./getstarted/contactus";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const BannerContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const emailAddress = 'sahuami2000@gmail.com';
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  }

 

  return (
    <div className="banner-content">
      <div className="container flex flex-col items-center justify-center text-center font-dmSans mt-28">
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-4 text-white max-w-3xl"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="  text-center  flex space-x-1 text-xl md:text-3xl">
            Hi, My Name is{" "}
            <span className="font-bold ml-3 font-signature text-2xl md:text-4xl">
              Amit Sahu
            </span>
          </h1>
          <h1 className="flex space-x-1 font-serif justify-center text-2xl md:text-3xl">&</h1>
          <div className="flex justify-center text-2xl md:text-3xl">

            Welcome To My Potfolio
          </div>
        </motion.h1>

        {/* <motion.p
          className="md:text-lg mb-8 text-white text-justify opacity-85 max-w-3xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
         I'm an Experienced Web Developer with a strong focus on Front-End development. Proficiency in HTML, CSS, JavaScript, React js, Tailwind css, JAVA with DSA and OOPs concept a deep understanding of modern web standards and best practices.. As a Web Developer and fervent Tech Enthusiast, I am driven by the exploration of the boundless opportunities within the realm of Web Development. 🌐🚀
        </motion.p> */}

        <Sheet>
          <SheetTrigger className="md:block hidden overflow-visible">
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button className="md:text-lg bg-blue-500 text-white font-semibold px-7 py-6  rounded-md hover:text-blue-600 hover:bg-white ">
                  LET’S CONNECT
                </Button>
              </motion.div>
            </div>
          </SheetTrigger>
          <SheetContent className="p-0 overflow-auto sm:rounded-none">
            <ContactSection />
          </SheetContent>
        </Sheet>

        {/* MOBILE VIEWS */}
        <div className="md:hidden block">
          <Drawer>
            <DrawerTrigger>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button className="md:text-lg bg-blue-500 text-white font-semibold px-7 py-6  rounded-md hover:text-blue-600 hover:bg-white ">
                  LET’S TALK
                </Button>
              </motion.div>
            </DrawerTrigger>
            <DrawerContent>
              <ContactSection />
            </DrawerContent>
          </Drawer>


          <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0  mt-10 ">
            <div className="  space-y-2  mt-5 ">
              <h1 className="font-bold text-center text-xl ">Available on</h1>
              <ul className="flex space-x-6 ">
                <li>
                  <a href="https://github.com/sahuami" target="_blank">
                    <FaGithub className="text-2xl cursor-pointer   " />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/amit-sahu-39387a262" target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer " />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/sahuami2000" target="_blank">
                    <FaXTwitter className="text-2xl cursor-pointer " />
                  </a>
                </li>
                <li>
                  <a onClick={handleEmailClick} target="_blank">
                    <IoIosMail className="text-2xl cursor-pointer " />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
