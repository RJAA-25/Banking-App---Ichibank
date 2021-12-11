import React from 'react'

// CSS
import styles from './home.module.css'

// Framer Motion
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion/dist/es/';

import tower from '../../assets/images/tower.jfif';
import papers from '../../assets/images/papers.jfif';
import money from '../../assets/images/money.jfif';

const Home = () => {
    return (
        <div className={styles.container}>

        <div className={styles.topLeftRadius}></div>
        
        <section className={styles.textContainer}>

          <div className={styles.title}>
            <h1><strong>
              <span className={styles.ichi}>Ichi<span className={styles.bank}>Bank</span></span>
              <br />
              One Bank for All Your Needs
              <br />
              銀行ニーズ？イチバンック</strong>
            </h1>
          </div>

          <div className={styles.icons}>
            <i class="fab fa-github"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
          </div>

        </section>

        <section className={styles.imgContainer}>

          <motion.div 
            className={styles.card}
            initial={{opacity: 0, x: '-5vw'}}
            animate={{opacity: 1, x: '0vw'}}
            transition={{type: 'spring', duration: 1.5, bounce: 0.5, delay: 1}}
          >
              <img className={styles.cardImg} src={tower} alt="Tokyo Tower"/>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{opacity: 0, x: '-15vw'}}
            animate={{opacity: 1, x: '0vw'}}
            transition={{type: 'spring', duration: 1.25, bounce: 0.5, delay: 1.25}}
          >
              <img className={styles.cardImg} src={papers} alt="Documents"/>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{opacity: 0, x: '-25vw'}}
            animate={{opacity: 1, x: '0vw'}}
            transition={{type: 'spring', duration: 1, bounce: 0.5, delay: 1.5}}
          >
              <img className={styles.cardImg} src={money} alt="Japanese Yen"/>
          </motion.div>

        </section>

      </div>
    )
}

export default Home
