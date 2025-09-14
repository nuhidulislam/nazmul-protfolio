import { faLaptopCode, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { fadeIn } from "../../motion/motions";
import MenuContext from "../Menucontext";

const About = () => {
  const { setActiveMenu } = useContext(MenuContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    setActiveMenu("about");
  }, [isInView, setActiveMenu]);

  return (
    <div
      ref={ref}
      id="about"
      className="h-auto pt-14 md:pt-0 lg:min-h-screen flex flex-col justify-start items-start py-3 lg:py-10 md:px-14 px-8"
    >
      {/* Heading */}
      <motion.h3
        variants={fadeIn("left", "tween", 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        className="text-xl md:text-2xl lg:text-3xl font-outfit font-bold"
      >
        About me
      </motion.h3>

      <motion.h1
        variants={fadeIn("right", "tween", 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        className="py-4 text-2xl md:text-3xl lg:text-4xl font-outfit font-semibold"
      >
        Who I am?
      </motion.h1>

      <motion.p
        variants={fadeIn("left", "tween", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        className="text-xs md:text-sm lg:text-base font-poppins leading-5 md:leading-7 tracking-wide capitalize"
      >
        He has completed his studies in Computer Science and Engineering from
        Bangladesh Open University. Besides that formal introduction, he is a{" "}
        <span className="border-[1px] border-l-0 border-r-0 border-white bg-softTheme">
          self-taught MERN Stack Developer, skilled in React, Node.js, Express,
          and MongoDB, with strong expertise in building scalable web
          applications and REST APIs.
        </span>{" "}
        He also works with modern tools like Redux, RTK Query, Docker, Jenkins,
        and AWS, which makes him a versatile and dedicated developer passionate
        about continuous growth.
      </motion.p>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full pt-10 flex-wrap">
        {/* Figma Designer */}
        <Card
          icon={
            <FontAwesomeIcon
              className="h-[25px] md:h-[40px]"
              icon={faLightbulb}
            />
          }
          text="Figma Designer"
          hoverColor="hover:text-purple-500 hover:border-purple-500 hover:shadow-purple-500/40"
        />

        {/* Frontend Developer */}
        <Card
          icon={
            <svg
              className="h-[25px] md:h-[40px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M2 8V56H62V8H2ZM60 54H4V10H60V54ZM20 26L14 32L20 38V34H36V30H20V26ZM44 26V30H28V34H44V38L50 32L44 26Z" />
            </svg>
          }
          text="Frontend Developer"
          hoverColor="hover:text-[#21749b] hover:border-[#21749b] hover:shadow-[#21749b]/40"
        />

        {/* MERN Web Developer */}
        <Card
          icon={
            <FontAwesomeIcon
              className="h-[25px] md:h-[40px]"
              icon={faLaptopCode}
            />
          }
          text="MERN Web Developer"
          hoverColor="hover:text-green-400 hover:border-green-400 hover:shadow-green-400/40"
        />

        {/* Backend Developer */}
        <Card
          icon={
            <FontAwesomeIcon
              className="h-[25px] md:h-[40px]"
              icon={faLaptopCode}
            />
          }
          text="Backend Developer"
          hoverColor="hover:text-yellow-500 hover:border-yellow-500 hover:shadow-yellow-500/40"
        />

        {/* Database Management */}
        <Card
          icon={
            <svg
              className="h-[25px] md:h-[40px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M32 2C14 2 2 8 2 16v32c0 8 12 14 30 14s30-6 30-14V16C62 8 50 2 32 2zM32 6c16 0 26 5 26 10s-10 10-26 10S6 21 6 16 16 6 32 6zM32 58c-16 0-26-5-26-10V22c5 4 14 6 26 6s21-2 26-6v26c0 5-10 10-26 10z" />
            </svg>
          }
          text="Database Management"
          hoverColor="hover:text-green-500 hover:border-green-500 hover:shadow-green-500/40"
        />

        {/* DevOps Engineer */}
        <Card
          icon={
            <svg
              className="h-[25px] md:h-[40px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M32 6a26 26 0 1 0 26 26A26 26 0 0 0 32 6zm0 48a22 22 0 1 1 22-22 22 22 0 0 1-22 22z" />
              <path d="M32 16a16 16 0 1 0 16 16A16 16 0 0 0 32 16zm0 28a12 12 0 1 1 12-12 12 12 0 0 1-12 12z" />
            </svg>
          }
          text="DevOps Engineer"
          hoverColor="hover:text-orange-500 hover:border-orange-500 hover:shadow-orange-500/40"
        />

        {/* Cloud Engineer */}
        <Card
          icon={
            <svg
              className="h-[25px] md:h-[40px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M48 24a14 14 0 0 0-27-4A12 12 0 0 0 12 44h36a10 10 0 0 0 0-20z" />
            </svg>
          }
          text="Cloud Engineer"
          hoverColor="hover:text-blue-400 hover:border-blue-400 hover:shadow-blue-400/40"
        />
      </div>
    </div>
  );
};

// Reusable Card Component
const Card = ({ icon, text, hoverColor }) => (
  <motion.div
    variants={fadeIn("up", "tween", 0.3, 0.5)}
    initial="hidden"
    whileInView="show"
    className={`w-[265px] my-5 flex justify-center flex-col items-center 
                border-[1px] border-white p-8 md:p-10 rounded-md gap-3 
                hover:scale-105 duration-300 font-bold mx-1 
                ${hoverColor}`}
  >
    {icon}
    {text}
  </motion.div>
);

export default About;
