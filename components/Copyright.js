import Link from "next/link"
// import icons
// import motion
import { motion } from "framer-motion"
// import variants
import { fadeInUp } from "../variants"

const Copyright = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial='initial'
      whileInView={"animate"}
      className='bg-white h-[140px]'
    >
      <div className='container mx-auto h-full'>
        <div className='flex justify-between items-center h-full lg:pr-24'>
          {/* copyright text */}
          <p>Copyright &copy; 2022</p>
          <p>Moody Cats Club</p>
          <div className='flex gap-x-[30px]'></div>
        </div>
      </div>
    </motion.div>
  )
}

export default Copyright
