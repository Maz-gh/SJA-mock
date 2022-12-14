import Head from 'next/head';
import InstructorProMain from '../components/InstructorProfile/InstructorProMain';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import HeaderFour from '../components/Layout/Header/HeaderFour/HeaderFour';


export default function InstructorProfile() {

  return (
    <>
      <Head>
      <title>St. John Ambulance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <HeaderFour />
       <InstructorProMain />
      <Footer />
    </>
  )
}
