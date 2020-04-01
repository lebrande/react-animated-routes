import React from 'react';
import { motion } from 'framer-motion';
import './page.css';

const Page = ({ match }) => {
  const animalName = match.params.id;
  
  return (
    <div className="Page">
      <motion.h1
        className="Page__title"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 1.5,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.4,
          },
        }}
      >
        {animalName}
      </motion.h1>
      <motion.img
        src={`/img/${animalName}.jpg`}
        alt={animalName}
        className="Page__image"
        initial={{
          opacity: 0,
          scale: 0.8,
          x: -300,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
          x: 300,
          transition: {
            duration: 1,
          },
        }}
      />
    </div>
  );
}

export default Page;
