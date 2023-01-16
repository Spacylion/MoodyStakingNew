import Image from "next/image"

// import components
import Header from "./Header"

// import motion
import { motion } from "framer-motion"

// import variants
import {
  staggerContainer,
  girlAnim,
  boyAnim,
  heroTruckAnim,
  fadeInDown,
} from "../variants"

// import icons

const Hero = ({ headerData, heroData, navData }) => {
  // destructure heroData
  const { title, boyImg, girlImg, truckImg, btnText } = heroData
  return (
    <section className='bg-hero bg-cover -z-40 '>
      <div className='div'>
        {/* container */}
        <motion.div
          variants={staggerContainer}
          initial='initial'
          animate='animate'
          className='container mx-auto relative min-h-[800px] lg:min-h-[950px]'
        >
          {/* header */}
          <motion.div variants={fadeInDown}>
            <Header headerData={headerData} navData={navData} />
          </motion.div>

          {/* <motion.div
            variants={girlAnim}
            className='hidden lg:flex absolute bottom-0'
          >
            <Image src={girlImg} width={150} height={400} />
          </motion.div> */}

          {/* truck image */}

          {/* boy image */}
          <motion.div
            variants={boyAnim}
            className='hidden lg:flex absolute right-[380px] -bottom-10 z-10'
          >
            <a href='https://twitter.com/MoodyCatsClub'>
              <Image src={boyImg} width={400} height={400} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
