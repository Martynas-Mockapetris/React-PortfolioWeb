import React from 'react';
import Logo from '../../assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';

const NavMenu = [
  {
    id: 1,
    title: 'About',
    link: '#about',
    delay: 0.2
  },
  {
    id: 2,
    title: 'Portfolio',
    link: '#work',
    delay: 0.4
  },
  {
    id: 3,
    title: 'Testimonials',
    link: '#comments',
    delay: 0.6
  },
  {
    id: 4,
    title: 'Contact',
    link: '#contact',
    delay: 0.8
  }
];

const container = (delay) => ({
  hidden: {
    opacity: 0,
    x: -100
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: delay
    }
  }
});

const Navbar = () => {
  return (
    <>
      <div className="py-4 bg-secondary text-text fixed w-full z-50">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#top">
              <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} src={Logo} alt="Logo" className="w-14" />
            </a>
          </div>
          <div>
            <ul className="hidden md:flex justify-center gap-10">
              {NavMenu.map((link) => {
                return (
                  <motion.li variants={container(link.delay)} initial="hidden" whileInView={'show'} key={link.id}>
                    <a href={link.link} className="hover:text-dominant transition duration-300 text-[1.1rem] font-semibold">
                      {link.title}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <div className="md:hidden">
              <GiHamburgerMenu className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
