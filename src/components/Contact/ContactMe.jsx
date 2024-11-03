import { Card, Input, Textarea, Button, Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';

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

const ContactMe = () => {
  return (
    <div className="bg-text pb-20" id="contact">
      <div className="container flex justify-center items-center flex-col">
        <motion.h1 variants={fadeUp(0.5)} initial={{ opacity: 0, x: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} className="text-primary text-4xl pt-14 text-center">
          Like what you see? <br />
          Drop me a message!
        </motion.h1>
        <Card color="transparent" shadow={false}>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography className="-mb-4 text-alternative text-sm">Your Name</Typography>
              <motion.div variants={fadeUp(0.4)} initial="hidden" whileInView={'show'}>
                <Input
                  type="text"
                  size="lg"
                  placeholder="your name"
                  className="placeholder:text-text !border-primary focus:!border-alternative focus:scale-105 bg-primary"
                  labelProps={{
                    className: 'before:content-none after:content-none'
                  }}
                />
              </motion.div>
              <Typography className="-mb-4 text-alternative text-sm">Your Email</Typography>
              <motion.div variants={fadeUp(0.6)} initial="hidden" whileInView={'show'}>
                <Input
                  type="email"
                  size="lg"
                  placeholder="name"
                  className=" !border-primary focus:!border-alternative focus:scale-105 placeholder:text-text bg-primary"
                  labelProps={{
                    className: 'before:content-none after:content-none'
                  }}
                />
              </motion.div>
              <Typography className="-mb-4 text-alternative text-sm">Your Message</Typography>
              <motion.div variants={fadeUp(0.8)} initial="hidden" whileInView={'show'}>
                <Textarea
                  type="text"
                  size="lg"
                  placeholder="message"
                  className=" !border-primary focus:!border-alternative focus:scale-105 placeholder:text-text bg-primary"
                  labelProps={{
                    className: 'before:content-none after:content-none'
                  }}
                />
              </motion.div>
            </div>
            <motion.div variants={fadeUp(1)} initial="hidden" whileInView={'show'}>
              <Button className="mt-6 bg-secondaryDark hover:shadow-md hover:scale-95 transition-all duration-200" fullWidth>
                Send
              </Button>
            </motion.div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactMe;
