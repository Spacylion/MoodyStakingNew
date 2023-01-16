// import components

import type { NextPage } from "next"
import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"
import Head from "next/head"
import Hero from "../components/Hero"
import About from "../components/About"
import How from "../components/How"
import Faq from "../components/Faq"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"

// import data
import {
  headerData,
  heroData,
  navData,
  faqData,
  aboutData,
  howData,
  footerData,
} from "../data.json"

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Moody Cats Club</title>
        <meta property='og:image' content='/logo.png' />
        <meta
          property='og:description'
          content='The Moody Cats club is a utility based NFT. Moody Cats club holders will receive $MOODY tokens when staking the NFT and will get special rewards furtherdown the roadmap. Moody cats club is more than an NFT collection, it will also give away to charities. Get ready for launch!'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>

      <div className=' max-w-[1920px] animation'>
        <div className='fullContainer'>
          <div className={styles.container}>
            {/* Top Section */}
            <div className='h-full lg:p-10  bg-gray-900 z rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
              <h1 className=' cursor-default font-extrabold text-2xl  text-center  lg:text-5xl bg-clip-text '>
                Welcome To The Moody Cats Club!
              </h1>
            </div>

            <div className={styles.nftBoxGrid}>
              <div
                className={styles.optionSelectBox}
                role='button'
                onClick={() => router.push(`/mint`)}
              >
                <div
                  className='p-2 rounded-md  backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 
              lg:transform h-64 bg-blue-400 text-right w-80 transition duration-500 lg:hover:scale-125 hover:bg-blue-600 flex justify-center items-center
              '
                >
                  {/* Mint a new NFT */}
                  <img
                    src={"./images/icons/MINT.png"}
                    className=' w-24 h-24'
                    alt='drop'
                  />
                  <h2 className={styles.selectBoxTitle}>
                    Mint a new NFT (0.005 per CAT)
                  </h2>
                </div>
              </div>

              <div
                className={styles.optionSelectBox}
                role='button'
                onClick={() => router.push(`/stake`)}
              >
                <div
                  className='p-2 rounded-md  backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 
              lg:transform h-64 bg-blue-400 w-80 transition duration-500 lg:hover:scale-125 lg:hover:bg-blue-600 flex justify-center items-center'
                >
                  {/* Staking an NFT */}

                  <h2 className={styles.selectBoxTitle}>
                    Stake your CAT to recieve $MOODY!
                  </h2>
                  <p className={styles.selectBoxDescription}></p>
                  <img
                    src={`./images/icons/MINT.png`}
                    className='w-24 h-24'
                    alt='drop'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Hero heroData={heroData} headerData={headerData} navData={navData} />
        <About aboutData={aboutData} />

        <Faq faqData={faqData} />

        <Copyright />
      </div>
    </>
  )
}

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      faqData,
      aboutData,
      howData,
      footerData,
    },
  }
}

export default Home
