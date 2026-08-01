import { motion } from "framer-motion";
// ---- MODIFIED: Import new social media icons ----
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Amira</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Modern, user <br className='sm:block hidden' />
            friendly web applications
          </p>
          {/* Social links and CV button have been moved from here */}
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* ---- MODIFIED: Bottom section now contains social links, CV, and scroll indicator ---- */}
      <div className='absolute bottom-10 w-full flex flex-col justify-center items-center gap-5'>
        {/* Container for social links and CV */}
        <div className='flex items-center gap-x-6 '>
          {/* Smaller Download CV Text Link */}
          <a
            href='public/Amira_Hesham_Frontend_CV .pdf' // <-- Update path to your CV in the 'public' folder
            download='Amira_Hesham_Frontend_CV.pdf'
            className='bg-[#915EFF] text-white text-sm font-bold py-2 px-5 rounded-lg hover:bg-violet-600 transition-colors duration-300'
          >
            Download CV
          </a>
          
          {/* Separator */}
          <div className='w-[1px] h-6 bg-secondary'></div>

          {/* Smaller Social Media Icons */}
          <div className='flex flex-row gap-5'>
            <a href='https://www.linkedin.com/in/amiirahesham' target='_blank' rel='noopener noreferrer' className='text-secondary text-2xl hover:text-[#915EFF] transition-colors duration-300'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/Amiirahesham/' target='_blank' rel='noopener noreferrer' className='text-secondary text-2xl hover:text-[#915EFF] transition-colors duration-300'>
              <FaGithub />
            </a>
            <a href='https://x.com/A_Hesham_1' target='_blank' rel='noopener noreferrer' className='text-secondary text-2xl hover:text-[#915EFF] transition-colors duration-300'>
              <FaSquareXTwitter />
            </a>
            <a href='https://instagram.com/amiira.hesham' target='_blank' rel='noopener noreferrer' className='text-secondary text-2xl hover:text-[#915EFF] transition-colors duration-300'>
              <FaInstagram />
            </a>
            <a href='https://www.facebook.com/amira.hesham.685173/' target='_blank' rel='noopener noreferrer' className='text-secondary text-2xl hover:text-[#915EFF] transition-colors duration-300'>
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;