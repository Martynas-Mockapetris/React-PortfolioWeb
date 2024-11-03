import Coding from '../../assets/coding.png';
import { FaArrowRight } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: {
    opacity: 0,
    x: 100
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay
    }
  },
  hover: {
    translateX: 10,
    transition: {
      delay: 0.1,
      duration: 0.5
    }
  }
});

const Hero = () => {
  return (
    <>
      <main className="bg-secondaryDark text-text pt-20" id="top">
        <div id="wrapper" className="container min-h-[650px] flex items-center">
          <div id="content-display" className="md:grid md:grid-cols-5 gap-5 items-center my-4 xl:grid-cols-6">
            <div id="socials-col" className="md:col-span-3 flex items-center md:items-start flex-col xl:items-left">
              <div id="socials-content" className="relative">
                <motion.h1 variants={container(0.2)} initial="hidden" whileInView="show" animate={{ opacity: 1 }} className="text-5xl font-bold text-text text-center md:text-left">
                  Martynas <br /> Mockapetris
                </motion.h1>
                <motion.div variants={container(0.4)} initial="hidden" whileInView="show" className="h-[4px] w-[40px] bg-alternative mt-2 ml-1"></motion.div>
              </div>
              <div className="flex gap-3 mt-5">
                <motion.div variants={container(0.4)} initial="hidden" whileInView="show">
                  <FaSquareGithub className="text-2xl hover:scale-125 cursor-pointer duration-200" />
                </motion.div>
                <motion.div variants={container(0.6)} initial="hidden" whileInView="show">
                  <FaLinkedin className="text-2xl hover:scale-125 cursor-pointer duration-200" />
                </motion.div>
                <motion.div variants={container(0.8)} initial="hidden" whileInView="show">
                  <FaSquareFacebook className="text-2xl hover:scale-125 cursor-pointer duration-200" />
                </motion.div>
                <motion.div variants={container(1)} initial="hidden" whileInView="show">
                  <FaSquareWhatsapp className="text-2xl hover:scale-125 cursor-pointer duration-200" />
                </motion.div>
              </div>
              <div className="">
                <motion.img initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} src={Coding} alt="Coding" className="absolute bottom left-[0%] opacity-5 md:relative md:opacity-100 md:left-0 overflow-x-hidden" />
              </div>
            </div>
            <div id="content" className="md:col-span-2 xl:col-span-3 sm:mt-10 md:mt-0 text-center md:text-left relative z-30">
              <motion.p variants={container(0.4)} initial="hidden" whileInView="show" className="py-5 leading-5 tracking-widest font-serif lg:text-2xl">
                Introduction
              </motion.p>
              <motion.h1 variants={container(0.6)} initial="hidden" whileInView="show" className="text-2xl leading-7 lg:text-4xl">
                React Student who is Learning to become a master in React Web Apps
              </motion.h1>
              <motion.p variants={container(0.8)} initial="hidden" whileInView="show" className="leading-5 py-5 lg:text-xl">
                A person who is coming back again to renew its friendship with programming. With great terms this might be the final and best atempt to slowly become the master of React.
              </motion.p>
              <motion.button variants={container(1)} initial="hidden" whileHover={'hover'} whileInView="show" className="text-alternative flex items-center font-bold border-b-2 border-alternative py-1 m-auto md:m-0">
                My story <FaArrowRight className="text-sm pt-[2px] ml-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
