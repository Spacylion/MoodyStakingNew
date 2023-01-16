import Image from "next/image"

// import motion
import { motion } from "framer-motion"
// import variants
import { fadeInLeft, fadeInRight, staggerTextContainer } from "../variants"

const How = ({ howData }) => {
  // destructure how data
  const { title, subtitle, girlImg } = howData
  return (
    <section className='mb-[60px] lg:mb-[160px]'>
      <div className='container mx-auto'></div>
    </section>
  )
}

export default How
