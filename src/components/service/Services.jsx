import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";

import { fadeIn } from "../../motion/motions";
import MenuContext from "../Menucontext";
import ServiceCard from "../serviceCard/ServiceCard";
import { allServices } from "./allService";
const Services = () => {
  const { setActiveMenu } = useContext(MenuContext);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    setActiveMenu("services");
  }, [isInView, setActiveMenu]);

  return (
    <div
      ref={ref}
      id="services"
      className="h-auto pt-10 lg:min-h-screen md:px-14 px-8 py-8"
    >
      <motion.h3
        variants={fadeIn("left", "tween", 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        className="font-bold text-xl md:text-2xl lg:text-3xl"
      >
        What I do
      </motion.h3>

      <motion.h1
        variants={fadeIn("right", "tween", 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        className="text-xs md:text-base lg:text-xl pt-5 pb-10"
      >
        I’m a self-taught Web Application Developer specializing in MERN Stack.
        I create responsive, interactive web applications using React.js and
        Next.js, turning static templates into dynamic user experiences. On the
        backend, I build scalable REST APIs with Node.js, Express.js, and
        MongoDB, connecting them seamlessly to frontend applications. I also
        manage state efficiently using Redux and RTK Query. I’m experienced in
        DevOps practices, including Docker containerization, Jenkins CI/CD
        pipelines, Linux server administration, and AWS deployment with EC2 and
        S3. My focus is on delivering high-quality, maintainable, and performant
        web applications, combining modern frontend, backend, and DevOps
        expertise.
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center flex-wrap">
        {allServices.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeIn("left", "tween", 0.3, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              svg={service.svg}
              background={service.background}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
