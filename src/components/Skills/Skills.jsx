import { FaLaptopCode } from 'react-icons/fa';
import { FaBoxOpen } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import Thumb1 from '../../assets/thumb1.jpg';
import Thumb2 from '../../assets/thumb2.jpg';
import Thumb3 from '../../assets/thumb3.jpg';
import Thumb4 from '../../assets/thumb4.jpg';
import Thumb5 from '../../assets/thumb5.jpg';
import Thumb6 from '../../assets/thumb6.png';
import Thumb7 from '../../assets/thumb7.png';
import Thumb8 from '../../assets/thumb8.png';
import Thumb9 from '../../assets/thumb9.jpg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: 50
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

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: 'Programm',
      icon: <FaLaptopCode className="text-4xl text-alternative" />,
      delay: 0.2
    },
    {
      id: 2,
      title: 'Research',
      icon: <FaBoxOpen className="text-alternative text-4xl" />,
      delay: 0.4
    },
    {
      id: 3,
      title: 'Communicate',
      icon: <FaPencilAlt className="text-alternative text-4xl" />,
      delay: 0.6
    }
  ];

  const projects = [
    { url: Thumb1, alt: 'Jekyll Project', id: 1, delay: 0.4 },
    { url: Thumb2, alt: 'Fashion Page', id: 2, delay: 0.6 },
    { url: Thumb3, alt: 'ToDo Web', id: 3, delay: 0.8 },
    { url: Thumb4, alt: 'Parallaxing', id: 4, delay: 1 },
    { url: Thumb9, alt: 'Improved Site', id: 5, delay: 1.2 },
    { url: Thumb6, alt: 'Drivr', id: 6, delay: 1.4 },
    { url: Thumb7, alt: 'My Portfolio', id: 7, delay: 1.6 },
    { url: Thumb8, alt: 'React TMDB', id: 8, delay: 1.8 },
    { url: Thumb5, alt: 'Jekyll & Sass Portfolio', id: 9, delay: 2 }
  ];

  const [myProjects, setMyProjects] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/projects')
      .then((res) => res.json())
      .then((data) => setMyProjects(data));
    console.log();
  });

  return (
    <div className="bg-secondary text-text py-20" id="work">
      <div className="container py-8 grid grid-cols-1 md:grid-cols-3 gap-4 xl:flex xl:justify-around">
        {skills.map((skill) => {
          return (
            <motion.div
              variants={fadeUp(skill.delay)}
              initial="hidden"
              whileInView={'show'}
              key={skill.id}
              className="flex items-center justify-center gap-4 lg:justify-end bg-secondaryDark py-4 px-3 border-r-4 border-text rounded-l-md lg:max-w-[300px] min-w-[200px] shadow-lg hover:text-primary hover:bg-text hover:border-alternative hover:scale-105 duration-300"
            >
              {skill.icon}
              <div className="space-y-[-2px]">
                <h1 className="text-xl font-semibold tracking-tighter">{skill.title}</h1>
              </div>
            </motion.div>
          );
        })}
      </div>
      <motion.h1 variants={fadeUp(0.5)} initial="hidden" whileInView={'show'} className="text-center text-3xl text-text font-semibold">
        Projects
      </motion.h1>
      <div className=" container flex justify-center items-center flex-col sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-8">
        {projects.map((project) => {
          return (
            <motion.div variants={fadeUp(project.delay)} initial="hidden" whileInView={'show'} key={project.id} className="project-card relative overflow-hidden">
              <img src={project.url} alt={project.alt} className="hover:scale-110 transition-all opacity-75 hover:opacity-100 hover:z-20 relative duration-200 object-cover h-[150px] xl:h-[220px] sm:w-[100%] w-[300px] " />
              <div class="hover:left-0 left-[-100%] opacity-0 hover:opacity-80 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-alternative font-semibold bg-dominant text-center px-6">{project.alt}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
