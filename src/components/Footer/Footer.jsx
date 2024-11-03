import Logo from '../../assets/logo.svg';
import { motion } from 'framer-motion';

const NavMenu = [
  {
    id: 1,
    title: 'About',
    link: '#about',
    delay: 0.4
  },
  {
    id: 2,
    title: 'Portfolio',
    link: '#work',
    delay: 0.6
  },
  {
    id: 3,
    title: 'Testimonials',
    link: '#comments',
    delay: 0.8
  },
  {
    id: 4,
    title: 'Contact',
    link: '#contact',
    delay: 1
  }
];

const fadeUp = (delay) => ({
  hidden: {
    opacity: 0,
    x: 150
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

const Footer = () => {
  return (
    <div className="bg-black py-5 text-primary">
      <div className="flex container gap-5 items-center">
        <motion.img variants={fadeUp(0.2)} initial="hidden" whileInView={'show'} src={Logo} alt="Logo" className="h-14" />
        <div className="flex items-center md:items-start space-y-2 flex-col ">
          <ul className="flex gap-4 text-primary tracking-wider flex-col md:flex-row text-center">
            {NavMenu.map((link) => {
              return (
                <motion.li variants={fadeUp(link.delay)} initial="hidden" whileInView={'show'} key={link.id}>
                  <a href={link.link} className="hover:text-alternative transition duration-300 text-xl">
                    {link.title}
                  </a>
                </motion.li>
              );
            })}
            <motion.li variants={fadeUp(1.2)} initial="hidden" whileInView={'show'}>
              <a href="top" className="hover:text-alternative transition duration-300 text-xl">
                Top
              </a>
            </motion.li>
          </ul>
          <motion.p variants={fadeUp(2)} initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-[10px] opacity-70 tracking-wider">
            Copyright &copy; 2024 All Content belongs to Martynas Mockapetris
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
