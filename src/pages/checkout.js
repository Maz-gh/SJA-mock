import Head from 'next/head';
import CheckoutMain from '../components/Checkout/CheckoutMain';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import HeaderFour from '../components/Layout/Header/HeaderFour/HeaderFour';


export default function Checkout() {

  return (
    <>
      <Head>
      <title>St. John Ambulance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <HeaderFour />
      <CheckoutMain />
      <Footer />
    </>
  )
}
