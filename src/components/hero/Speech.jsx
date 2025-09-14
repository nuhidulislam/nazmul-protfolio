import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer md:w-[40%] w-[70%] md:right-[60px] md:top-[60px] top-5 right-7"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble md:h-[100px]">
        <TypeAnimation
          sequence={[
            1000,
            "Hello everyone, my name is Nazmul Huda!",
            600,
            "I'm FULL STACK web desiener and developer",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
          className="text-sm md:text-base lg:text-base leading-3"
        />
      </div>
      <img src="/profile.png" alt="" />
    </motion.div>
  );
};

export default Speech;
