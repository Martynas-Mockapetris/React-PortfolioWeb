import { Carousel, Typography } from '@material-tailwind/react';
import Per1 from '../../assets/DianaF.jpg';
import Per2 from '../../assets/PremK.jpg';
import Per3 from '../../assets/GermanS.jpg';
import Per4 from '../../assets/LaimaP.jpg';
import Logo1 from '../../assets/AAU.png';
import Logo2 from '../../assets/CBS.png';
import Logo3 from '../../assets/CPHU.png';
import Logo4 from '../../assets/VivaBatai.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: 'I know Martynas as a reliable and trustworthy person who takes pride in being able to solve problems and enjoys challenging work. He has a big interest in helping people and self-developing which is a valuable asset to have as a friend or colleague. His drive and dedication will help him to succeed in life and achieve his goals.',
      per: Per1,
      logo: Logo2,
      name: 'Diana Faur',
      uni: 'Copenhagen Business School'
    },
    {
      id: 2,
      text: 'His proficient problem solving skills together with fast learning pace and ability to rapidly find solutions have made a great impact on project development that Martynas helped me with. Considering his competence level, in future I am hoping to have one more opportunity to collaborate with such a professional, who also happens to be a great human being.',
      per: Per3,
      logo: Logo1,
      name: 'German Skripničenko',
      uni: 'Aalborg University in Copenhagen'
    },
    {
      id: 3,
      text: 'He has a bold approach to life, is not afraid of innovation and all the difficulties he ables to control with a serious approach and youthful enthusiasm. Communication with the other people he keeps in a peculiar way, which set him apart from the rest. All in all, he is a good person, a good friend and a good partner.',
      per: Per4,
      logo: Logo4,
      name: 'Laima Purickaitė',
      uni: 'Viva Batai'
    },
    {
      id: 4,
      text: 'I have known Martynas for ten years and it has been an absolute pleasure and privilege knowing him. He has always been a brilliant computer technician and student, he stands out in his humility and the "queer" ability to manage people by saying the right thing at the right time. His ability to smile and get everyone to give off their best in the most strenuous of times is something I have always admired and aspired to be.',
      per: Per2,
      logo: Logo3,
      name: 'Prem Krishnann',
      uni: 'Copenhagen Biology University'
    }
  ];

  const fadeUp = (delay) => ({
    hidden: {
      opacity: 0,
      x: 250
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

  return (
    <div className="bg-secondaryDark" id="comments">
      <div className="container py-14 ">
        <Carousel className="text-text sm:min-h-[500px] md:min-h-[300px]">
          {testimonials.map((testimonial) => {
            return (
              <motion.div variants={fadeUp(0.2)} initial="hidden" whileInView={'show'} className="relative h-full w-full py-5 xl:pt-20 overflow-hidden">
                <div className="inset-0 grid h-full w-full items-center">
                  <div className="w-5/6 md:w-3/4 pl-20 pt-10 xl:w-10/12">
                    <motion.div variants={fadeUp(0.6)} initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
                      <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl text-text relative z-50">
                        {testimonial.name}
                      </Typography>
                    </motion.div>
                    <motion.div variants={fadeUp(0.8)} initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
                      <Typography variant="lead" color="white" className="mb-12 opacity-80 text-primary text-[0.8rem] xl:text-xl leading-8 tracking-wide indent-6 first-letter:text-2xl first-letter:text-alternative relative z-10">
                        {testimonial.text}
                      </Typography>
                    </motion.div>
                    <img src={testimonial.per} alt={testimonial.name} className=" absolute w-16 h-16 object-cover rounded-[50%] md:top-14 md:right-16 xl:top-20 xl:right-20 top-12 right-14" />
                    <img src={testimonial.logo} alt={testimonial.uni} className=" absolute h-8 object-contain md:top-[160px] md:right-14 bg-white rounded-sm min-w-20 xl:right-[72px] xl:top-[180px] hidden md:block" />
                    <p className="absolute text-[0.5rem] md:top-[125px] md:right-14 w-20 text-center xl:top-[150px] xl:right-[72px] hidden md:block">{testimonial.uni}</p>
                    <p className="text-[8rem] font-serif absolute top-[60px] opacity-10">"</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
