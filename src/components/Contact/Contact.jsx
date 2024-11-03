import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100
  },
  hover: {
    scale: 1.1,
    transition: {
      delay: 0.1,
      duration: 0.5
    }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: delay
    }
  }
});

const Contact = () => {
  return (
    <main className="bg-text text-primary py-20" id="about">
      <div className="container py-24 lg:py-36">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <section id="content" className="space-y-6 lg:max-w-[380px]">
            <motion.p variants={fadeUp(0.2)} initial={'hidden'} whileInView={'show'} className="leading-5 tracking-widest text-sm lg:text-xl text-secondary opacity-60">
              Let's talk!
            </motion.p>
            <motion.h1 variants={fadeUp(0.4)} initial={'hidden'} whileInView={'show'} className="text-xl leading-6 text-primary font-semibold">
              Any Type Of Query & Discussion
            </motion.h1>
            <motion.p variants={fadeUp(0.6)} initial={'hidden'} whileInView={'show'} className="leading-5 text-[0.75rem] tracking-widest opacity-60">
              I am always open to any type of discussion! Even about the weather!
            </motion.p>
            <motion.button variants={fadeUp(0.8)} initial={'hidden'} whileHover={'hover'} whileInView={'show'} className="bg-text border-b-2 border-alternative text-alternative flex items-center py-1">
              marmocka@gmail.com <FaArrowRight className="text-sm pt-[2px] ml-4" />
            </motion.button>
          </section>
          <div className="space-y-6">
            <motion.p variants={fadeUp(0.4)} initial={'hidden'} whileInView={'show'} className="text-[1.5rem]">
              Creativity is seeing what others see and thinking what no one else ever thought.
            </motion.p>
            <motion.p variants={fadeUp(0.6)} initial={'hidden'} whileInView={'show'} className="text-sm leading-6 opacity-60">
              The best way to pump your creativity juices is to simply go outside and look around. Meet your friends, travel, listen to music and creativity will hit you unexpected, thats when the magic begins.{' '}
            </motion.p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div variants={fadeUp(1)} initial={'hidden'} whileInView={'show'} className="flex gap-2 items-center space-y-1 my-3">
                <p className="text-4xl text-alternative">10</p>
                <p className="text-primary opacity-70 text-[0.7rem] lg:text-sm leading-none">Years of Learning</p>
              </motion.div>
              <motion.div variants={fadeUp(1.2)} initial={'hidden'} whileInView={'show'} className="flex gap-2 items-center space-y-1 my-3">
                <p className="text-4xl text-alternative">3</p>
                <p className="text-primary opacity-70 text-[0.7rem] lg:text-sm leading-none">Years of Experience</p>
              </motion.div>
              <motion.div variants={fadeUp(1.4)} initial={'hidden'} whileInView={'show'} className="flex gap-2 items-center space-y-1 my-3">
                <p className="text-4xl text-alternative">6</p>
                <p className="text-primary opacity-70 text-[0.7rem] lg:text-sm leading-none">Programming languages</p>
              </motion.div>
              <motion.div variants={fadeUp(1.6)} initial={'hidden'} whileInView={'show'} className="flex gap-2 items-center space-y-1 my-3">
                <p className="text-4xl text-alternative">15</p>
                <p className="text-primary opacity-70 text-[0.7rem] lg:text-sm leading-none">Web Projects</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
