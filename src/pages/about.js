import Head from 'next/head';
import AboutMain from '../components/About/AboutMain';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import HeaderTwo from '../components/Layout/Header/HeaderTwo/HeaderTwo';


export default function About() {

  return (
    <>
      <Head>
      <title>St. John Ambulance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <HeaderTwo />
      <AboutMain />
      <Footer />
    </>
  )
}
