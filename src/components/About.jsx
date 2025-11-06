import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { birth, location, phone, email, linkedin, cv } from "../assets";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Here are my personal details and contact information.
      </motion.p>
      <motion.div
        variants={staggerContainer(0.2, 0)}
        className='mt-10 grid sm:grid-cols-2 gap-6'
      >
        {/* Birth (đổi vị trí với Phone) */}
        <motion.div variants={fadeIn("up", "spring", 0, 0.75)} whileHover={{ scale: 1.05 }} className='flex items-center gap-3'>
          <img src={birth} alt='Birth' className='w-6 h-6 object-contain' />
          <div>
            <p className='text-secondary text-[14px]'>Date of birth</p>
            <p className='text-white text-[16px]'>12/07/2003</p>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeIn("up", "spring", 0, 0.75)} whileHover={{ scale: 1.05 }} className='flex items-center gap-3'>
          <img src={email} alt='Email' className='w-6 h-6 object-contain' />
          <div>
            <p className='text-secondary text-[14px]'>Email</p>
            <a href='mailto:tytybill123@gmail.com' className='text-white text-[16px] hover:text-[#66ffa6]'>
              tytybill123@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Location (đổi vị trí với Phone) */}
        <motion.div variants={fadeIn("up", "spring", 0, 0.75)} whileHover={{ scale: 1.05 }} className='flex items-center gap-3'>
          <img src={location} alt='Location' className='w-6 h-6 object-contain' />
          <div>
            <p className='text-secondary text-[14px]'>Location</p>
            <p className='text-white text-[16px]'>Chau Doc, An Giang</p>
          </div>
        </motion.div>

        {/* LinkedIn */}
        <motion.div variants={fadeIn("up", "spring", 0, 0.75)} whileHover={{ scale: 1.05 }} className='flex items-center gap-3'>
          <img src={linkedin} alt='LinkedIn' className='w-6 h-6 object-contain' />
          <div>
            <p className='text-secondary text-[14px]'>LinkedIn</p>
            <a href='https://linkedin.com/in/htty' target='_blank' rel='noreferrer' className='text-white text-[16px] hover:text-[#66ffa6]'>
              linkedin.com/in/htty
            </a>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div variants={fadeIn("up", "spring", 0, 0.75)} whileHover={{ scale: 1.05 }} className='flex items-center gap-3'>
          <img src={phone} alt='Phone' className='w-6 h-6 object-contain' />
          <div>
            <p className='text-secondary text-[14px]'>Phone</p>
            <p className='text-white text-[16px]'>+84 399623947</p>
          </div>
        </motion.div>

        {/* CV item */}
        <motion.div variants={fadeIn("up", "spring", 0, 0.75)} whileHover={{ scale: 1.05 }} className='flex items-center gap-3'>
          <img src={cv} alt='CV' className='w-6 h-6 object-contain' />
          <div>
            <p className='text-secondary text-[14px]'>CV</p>
            <a
              href='https://drive.google.com/file/d/1VKtMubxBp8E_iKZzRoKDP_Ldmdsrurnd/view?usp=drive_link'
              target='_blank'
              rel='noreferrer'
              className='text-white text-[16px] hover:text-[#66ffa6]'
            >
              View CV
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
