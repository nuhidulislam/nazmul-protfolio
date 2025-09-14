import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fadeIn } from "../../motion/motions";

import MenuContext from "../Menucontext";
import Shape from "./Shape";
import Speech from "./Speech";
const Hero = () => {
  const { setActiveMenu } = useContext(MenuContext);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  useEffect(() => {
    setActiveMenu("home");
  }, [isInView, setActiveMenu]);

  return (
    <div
      ref={ref}
      id="home"
      className="h-auto py-24 lg:min-h-screen flex flex-col-reverse md:flex-row justify-center items-center md:px-14 px-8 relative"
    >
      <div className="w-full md:w-[60%]">
        <motion.h1
          variants={fadeIn("right", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl z-10 md:text-5xl lg:text-6xl font-outfit"
        >
          Hi I&apos;m <br />{" "}
          <span className="text-softTheme font-bold">Nazmul Huda</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("right", "tween", 0.7, 0.5)}
          initial="hidden"
          whileInView="show"
          className="py-4 text-sm md:text-base capitalize font-poppins z-50 lg:w-[95%]"
        >
          I&apos;m a self-taught MERN Stack Developer skilled in building
          dynamic web apps with React, Node.js, Express, and MongoDB, with added
          expertise in DevOps practices like Docker, Jenkins, and AWS.
        </motion.p>

        <motion.a
          variants={fadeIn("right", "tween", 0.9, 0.5)}
          initial="hidden"
          whileInView="show"
          href="#"
          target="_blank"
        >
          <motion.button
            variants={fadeIn("right", "tween", 0.9, 0.5)}
            initial="hidden"
            whileInView="show"
            type="button"
            className="text-softTheme hover:text-white border border-theme hover:bg-theme font-medium rounded-lg text-lg md:text-xl px-3 lg:px-5 py-2.5 text-center me-2 mb-2 flex justify-center items-center gap-2"
          >
            Download Resume
            <FontAwesomeIcon icon={faDownload} height={25} />
          </motion.button>
        </motion.a>
      </div>

      <motion.div
        variants={fadeIn("left", "tween", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-[60%] md:w-[40%] z-40"
      >
        <div className=" absolute md:top-[6.3rem] top-[3rem] lg:top-[6.5rem] right-[25%] md:right-[-14%] lg:right-[-15%] h-[50%] w-[50%] md:h-[74%] md:w-[74%] lg:w-[80%] lg:h-[80%] -z-10">
          <Canvas>
            <Suspense fallback="loading...">
              <Shape />
            </Suspense>
          </Canvas>
        </div>
        <img
          src="/profile.png"
          height={700}
          width={700}
          alt="alauddin"
          loading="lazy"
          className="z-30"
        />
      </motion.div>

      <Speech />
    </div>
  );
};

export default Hero;
