import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { fadeIn } from "../../motion/motions";
import MenuContext from "../Menucontext";
import ProgressBar from "../progressBar/ProgressBar";

const Skils = () => {
  const { setActiveMenu } = useContext(MenuContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });

  useEffect(() => {
    setActiveMenu("skils");
  }, [isInView, setActiveMenu]);

  return (
    <div
      id="skils"
      className="h-auto pb-14 lg:min-h-screen md:px-14 px-8 flex justify-center items-center"
    >
      <div ref={ref}>
        <motion.h3
          variants={fadeIn("left", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="md:text-lg text-base lg:text-xl font-bold"
        >
          My Speciality
        </motion.h3>

        <motion.h1
          variants={fadeIn("right", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="md:text-3xl text-2xl lg:text-4xl font-bold pt-4 md:pb-10 pb-5 lg:pb-16"
        >
          My Skills
        </motion.h1>

        <motion.p
          variants={fadeIn("left", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-xs md:text-sm text-gray-400 w-[90%]"
        >
          I am a highly skilled and versatile Web Application Developer
          specializing in MERN stack development. My expertise spans both
          frontend and backend technologies. On the frontend, I develop
          responsive, dynamic, and modern user interfaces using React.js and
          Next.js. I also build static templates and convert them into fully
          interactive web applications. On the backend, I create scalable REST
          APIs using Node.js, Express.js, and MongoDB, connecting them
          seamlessly with front-end single-page applications. I am experienced
          in state management using Redux and RTK Query for caching and data
          synchronization. Beyond development, I have hands-on experience in
          DevOps practices including Docker for containerization, Jenkins for
          CI/CD pipelines, Linux server administration, and AWS services (EC2,
          S3). I focus on performance optimization, clean code, and delivering
          intuitive user experiences, making me a versatile full-stack developer
          capable of handling complex projects from end-to-end.
        </motion.p>

        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5 md:gap-0 pt-7 md:pt-10">
          <div className="w-full flex flex-col justify-center flex-1 gap-5 text-sm md:text-base">
            <div className="w-[95%]">
              HTML and CSS <ProgressBar percentage={98} color="#2C98F0" />
            </div>
            <div className="w-[95%]">
              Vanilla JavaScript <ProgressBar percentage={95} color="#F9BF3F" />
            </div>
            <div className="w-[95%]">
              React and Next.js <ProgressBar percentage={92} color="#EC5453" />
            </div>
            <div className="w-[95%]">
              Redux & RTK Query <ProgressBar percentage={90} color="#F06543" />
            </div>
            <div className="w-[95%]">
              Git & GitHub <ProgressBar percentage={95} color="#4078C0" />
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-start flex-1 gap-5">
            <div className="w-[95%]">
              Node.js & Express.js{" "}
              <ProgressBar percentage={95} color="#A84CB8" />
            </div>
            <div className="w-[95%]">
              MongoDB & MySQL <ProgressBar percentage={90} color="#4DB33D" />
            </div>

            <div className="w-[95%]">
              Figma & Canva <ProgressBar percentage={92} color="#4054B2" />
            </div>
            <div className="w-[95%]">
              Docker & Jenkins <ProgressBar percentage={90} color="#2496ED" />
            </div>
            <div className="w-[95%]">
              Linux & Nginx <ProgressBar percentage={88} color="#FCA326" />
            </div>
            <div className="w-[95%]">
              AWS EC2 & S3 <ProgressBar percentage={90} color="#FF9900" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
